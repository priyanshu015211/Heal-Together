"use client";

import { useState } from "react";

const initialMessages = [
  {
    role: "assistant",
    content:
      "Hi, I'm here to listen. There's no judgment here — what's on your mind today?",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
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
      <h1 className="text-2xl font-bold text-calm-700">AI Wellness Assistant</h1>
      <p className="mt-1 text-sm text-calm-900/70">
        A private, judgment-free space to talk things through.
      </p>

      <div className="mt-6 flex-1 space-y-3 rounded-xl border border-calm-200 bg-white p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
              m.role === "assistant"
                ? "bg-calm-100 text-calm-900"
                : "ml-auto bg-calm-500 text-white"
            }`}
          >
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="max-w-[80%] rounded-lg bg-calm-100 px-4 py-2 text-sm text-calm-900/60">
            Typing…
          </div>
        )}
      </div>

      <form onSubmit={sendMessage} className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type how you're feeling…"
          className="flex-1 rounded-lg border border-calm-200 px-4 py-2 text-sm focus:border-calm-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-calm-600 px-5 py-2 text-sm font-medium text-white hover:bg-calm-700 disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
