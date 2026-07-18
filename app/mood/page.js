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
      <h1 className="text-2xl font-bold text-calm-700">Mood Check-in</h1>
      <p className="mt-1 text-sm text-calm-900/70">
        How are you feeling right now?
      </p>

      <form
        onSubmit={submitMood}
        className="mt-6 space-y-4 rounded-xl border border-calm-200 bg-white p-6"
      >
        <div className="flex flex-wrap gap-3">
          {MOODS.map((m) => (
            <button
              type="button"
              key={m.label}
              onClick={() => setSelected(m)}
              className={`flex flex-col items-center gap-1 rounded-lg border px-4 py-3 text-sm ${
                selected?.label === m.label
                  ? "border-calm-500 bg-calm-100"
                  : "border-calm-200 hover:bg-calm-50"
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
          className="w-full rounded-lg border border-calm-200 px-4 py-2 text-sm focus:border-calm-500 focus:outline-none"
        />

        <button
          type="submit"
          disabled={!selected}
          className="rounded-lg bg-calm-600 px-5 py-2 text-sm font-medium text-white hover:bg-calm-700 disabled:opacity-50"
        >
          Log mood
        </button>

        {status && <p className="text-sm text-calm-600">{status}</p>}
      </form>

      {history.length > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-semibold text-calm-700">Recent check-ins</h2>
          <ul className="mt-3 space-y-2">
            {history.slice(0, 10).map((entry) => (
              <li
                key={entry.id}
                className="rounded-lg border border-calm-200 bg-white px-4 py-2 text-sm"
              >
                <span className="font-medium">{entry.mood}</span>
                {entry.note && <span className="text-calm-900/70"> — {entry.note}</span>}
                <div className="text-xs text-calm-900/50">
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
