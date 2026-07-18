"use client";

import { useEffect, useState } from "react";

export default function JournalPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("/api/journal")
      .then((res) => res.json())
      .then((data) => setEntries(data.entries || []))
      .catch(() => {});
  }, []);

  async function submitEntry(e) {
    e.preventDefault();
    if (!content.trim()) return;

    const res = await fetch("/api/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      const data = await res.json();
      setEntries([data.entry, ...entries]);
      setTitle("");
      setContent("");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-2xl font-bold text-calm-700">Wellness Journal</h1>
      <p className="mt-1 text-sm text-calm-900/70">
        A private space to write freely — for your eyes only.
      </p>

      <form
        onSubmit={submitEntry}
        className="mt-6 space-y-3 rounded-xl border border-calm-200 bg-white p-6"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title (optional)"
          className="w-full rounded-lg border border-calm-200 px-4 py-2 text-sm focus:border-calm-500 focus:outline-none"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write what's on your mind…"
          rows={6}
          className="w-full rounded-lg border border-calm-200 px-4 py-2 text-sm focus:border-calm-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!content.trim()}
          className="rounded-lg bg-calm-600 px-5 py-2 text-sm font-medium text-white hover:bg-calm-700 disabled:opacity-50"
        >
          Save entry
        </button>
      </form>

      <div className="mt-8 space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="rounded-lg border border-calm-200 bg-white p-4 text-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-calm-700">{entry.title}</h3>
              <span className="text-xs text-calm-900/50">
                {new Date(entry.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="mt-1 whitespace-pre-wrap text-calm-900/80">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
