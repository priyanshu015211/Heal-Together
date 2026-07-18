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
      <span className="font-mono text-xs uppercase tracking-wider text-plum-dark">
        Write it down 📝
      </span>
      <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
        Wellness Journal
      </h1>
      <p className="mt-1 text-sm text-ink-soft">
        A private page that&apos;s just for you — no one else reads it.
      </p>

      <form
        onSubmit={submitEntry}
        className="mt-6 space-y-3 rounded-2xl bg-card p-6 shadow-soft"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title (optional)"
          className="w-full rounded-xl border border-rule bg-paper px-4 py-2 text-sm focus:border-plum-dark focus:outline-none"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write what's on your mind…"
          rows={6}
          className="w-full rounded-xl border border-rule bg-ruled bg-paper px-4 py-2 text-sm leading-8 focus:border-plum-dark focus:outline-none"
        />
        <button
          type="submit"
          disabled={!content.trim()}
          className="rounded-full bg-plum-dark px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          Save entry
        </button>
      </form>

      {entries.length === 0 && (
        <p className="mt-8 rounded-2xl bg-plum-light px-5 py-4 text-sm text-ink-soft">
          🌷 Your entries will show up here. First one's always the hardest —
          you've got this.
        </p>
      )}

      <div className="mt-8 space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="rounded-2xl bg-card p-4 text-sm shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-semibold text-ink">{entry.title}</h3>
              <span className="font-mono text-xs text-ink-soft">
                {new Date(entry.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="mt-2 whitespace-pre-wrap leading-8 text-ink-soft">
              {entry.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
