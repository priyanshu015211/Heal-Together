"use client";

import { useEffect, useState } from "react";

export default function SupportPage() {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/support")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []))
      .catch(() => {});
  }, []);

  async function submitPost(e) {
    e.preventDefault();
    if (!message.trim()) return;

    const res = await fetch("/api/support", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (res.ok) {
      const data = await res.json();
      setPosts([data.post, ...posts]);
      setMessage("");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <span className="font-mono text-xs uppercase tracking-wider text-dusk-dark">
        You&apos;re not the only one 🤝
      </span>
      <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
        Anonymous Peer Support
      </h1>
      <p className="mt-1 text-sm text-ink-soft">
        Share what you&apos;re going through. No names, no profiles — just
        students supporting students.
      </p>

      <form
        onSubmit={submitPost}
        className="mt-6 flex gap-2 rounded-2xl bg-card p-4 shadow-soft"
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share anonymously…"
          className="flex-1 rounded-full border border-rule bg-paper px-4 py-2.5 text-sm focus:border-dusk-dark focus:outline-none"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="rounded-full bg-dusk-dark px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          Post
        </button>
      </form>

      <div className="mt-8 space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="rounded-2xl bg-card p-4 text-sm shadow-soft">
            <p className="text-ink-soft">{post.message}</p>
            <span className="mt-2 flex items-center justify-between font-mono text-xs text-ink-soft">
              anonymous · {new Date(post.createdAt).toLocaleString()}
              <span aria-hidden>🤍</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
