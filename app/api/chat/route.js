import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the HealTogether AI Wellness Assistant, a warm, empathetic
companion for students dealing with academic stress, anxiety, burnout, and loneliness.
You are not a therapist and do not diagnose. Validate feelings, ask gentle follow-up
questions, and suggest small, practical coping steps. If someone expresses intent to
harm themselves or others, calmly encourage them to contact a crisis line or emergency
services immediately.`;

const FALLBACK_RESPONSES = [
  "That sounds really heavy to carry. Can you tell me a bit more about what's been weighing on you most?",
  "Thank you for sharing that with me. It makes sense that you'd feel this way given everything going on.",
  "I hear you. Sometimes just naming what we're feeling can take a little of the pressure off — want to talk through what triggered it?",
];

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const message = (body.message || "").toString().trim();

  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    const reply =
      FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    return NextResponse.json({ reply, mode: "fallback" });
  }

  try {
    const { default: OpenAI } = await import("openai");
    const client = new OpenAI({ apiKey });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      max_tokens: 300,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "I'm here with you. Could you say a little more about that?";

    return NextResponse.json({ reply, mode: "openai" });
  } catch (error) {
    console.error("Chat API error:", error);
    const reply =
      FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    return NextResponse.json({ reply, mode: "fallback-error" });
  }
}
