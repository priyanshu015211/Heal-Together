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
      <h1 className="text-2xl font-bold text-calm-700">Anonymous Peer Support</h1>
      <p className="mt-1 text-sm text-calm-900/70">
        Share what you're going through. No names, no profiles — just
        students supporting students.
      </p>

      <form
        onSubmit={submitPost}
        className="mt-6 flex gap-2 rounded-xl border border-calm-200 bg-white p-4"
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share anonymously…"
          className="flex-1 rounded-lg border border-calm-200 px-4 py-2 text-sm focus:border-calm-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="rounded-lg bg-calm-600 px-5 py-2 text-sm font-medium text-white hover:bg-calm-700 disabled:opacity-50"
        >
          Post
        </button>
      </form>

      <div className="mt-8 space-y-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-calm-200 bg-white p-4 text-sm"
          >
            <p className="text-calm-900/80">{post.message}</p>
            <span className="mt-1 block text-xs text-calm-900/50">
              Anonymous · {new Date(post.createdAt).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
