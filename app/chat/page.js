"use client";

import { useState } from "react";

const initialMessages = [
  {
    role: "assistant",
    content:
      "Hi, I'm here to listen. There's no judgment here — what's on your mind today?",
  },
];

const STARTERS = [
  "I'm stressed about exams",
  "I feel really lonely lately",
  "I can't stop procrastinating",
  "Just need to vent",
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendText(text) {
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages([
        ...nextMessages,
        { role: "assistant", content: data.reply || "I'm here with you." },
      ]);
    } catch (error) {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "I'm having trouble responding right now, but I'm still here. Try again in a moment?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col px-6 py-10">
      <span className="font-mono text-xs uppercase tracking-wider text-marigold-dark">
        Assistant 💬
      </span>
      <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
        AI Wellness Assistant
      </h1>
      <p className="mt-1 text-sm text-ink-soft">
        A private, judgment-free space to talk things through.
      </p>

      <div className="mt-6 flex-1 space-y-3 rounded-2xl bg-card p-4 shadow-soft">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
            {m.role === "assistant" && (
              <span className="mt-1 text-xl" aria-hidden>
                🌻
              </span>
            )}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                m.role === "assistant"
                  ? "bg-marigold-light text-ink"
                  : "bg-plum text-white"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-2">
            <span className="mt-1 text-xl" aria-hidden>
              🌻
            </span>
            <div className="rounded-2xl bg-marigold-light px-4 py-2 font-mono text-xs text-ink-soft">
              typing…
            </div>
          </div>
        )}
      </div>

      {messages.length <= 1 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {STARTERS.map((s) => (
            <button
              key={s}
              onClick={() => sendText(s)}
              className="rounded-full border border-marigold/40 bg-marigold-light px-3 py-1.5 text-xs font-medium text-marigold-dark transition hover:bg-marigold/30"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendText(input.trim());
        }}
        className="mt-4 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type how you're feeling…"
          className="flex-1 rounded-full border border-rule bg-card px-4 py-2.5 text-sm shadow-soft focus:border-marigold-dark focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-marigold-dark px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
