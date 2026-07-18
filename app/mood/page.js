"use client";

import { useEffect, useState } from "react";

const MOODS = [
  { emoji: "😊", label: "Good" },
  { emoji: "😐", label: "Okay" },
  { emoji: "😔", label: "Low" },
  { emoji: "😟", label: "Anxious" },
  { emoji: "😤", label: "Stressed" },
];

export default function MoodPage() {
  const [selected, setSelected] = useState(null);
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/mood")
      .then((res) => res.json())
      .then((data) => setHistory(data.moods || []))
      .catch(() => {});
  }, []);

  async function submitMood(e) {
    e.preventDefault();
    if (!selected) return;

    const res = await fetch("/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood: selected.label, note }),
    });

    if (res.ok) {
      const data = await res.json();
      setHistory([data.entry, ...history]);
      setSelected(null);
      setNote("");
      setStatus("Logged. Thanks for checking in with yourself today.");
      setTimeout(() => setStatus(""), 4000);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <span className="font-mono text-xs uppercase tracking-wider text-sage-dark">
        Check in
      </span>
      <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
        Mood Check-in
      </h1>
      <p className="mt-1 text-sm text-ink-soft">How are you feeling right now?</p>

      <form
        onSubmit={submitMood}
        className="mt-6 space-y-4 border-l-4 border-sage bg-card p-6"
      >
        <div className="flex flex-wrap gap-3">
          {MOODS.map((m) => (
            <button
              type="button"
              key={m.label}
              onClick={() => setSelected(m)}
              className={`flex flex-col items-center gap-1 border px-4 py-3 text-sm ${
                selected?.label === m.label
                  ? "border-sage-dark bg-sage-light"
                  : "border-rule hover:bg-paper"
              }`}
            >
              <span className="text-2xl">{m.emoji}</span>
              {m.label}
            </button>
          ))}
        </div>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Anything you want to add? (optional)"
          rows={3}
          className="w-full border border-rule bg-paper px-4 py-2 text-sm focus:border-sage-dark focus:outline-none"
        />

        <button
          type="submit"
          disabled={!selected}
          className="bg-sage-dark px-5 py-2 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
        >
          Log mood
        </button>

        {status && <p className="font-mono text-xs text-sage-dark">{status}</p>}
      </form>

      {history.length > 0 && (
        <div className="mt-8">
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink-soft">
            Recent check-ins
          </h2>
          <ul className="mt-3 divide-y divide-rule border-t border-rule">
            {history.slice(0, 10).map((entry) => (
              <li key={entry.id} className="py-3 text-sm">
                <span className="font-medium text-ink">{entry.mood}</span>
                {entry.note && <span className="text-ink-soft"> — {entry.note}</span>}
                <div className="mt-0.5 font-mono text-xs text-ink-soft">
                  {new Date(entry.createdAt).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
