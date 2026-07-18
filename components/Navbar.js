"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/chat", label: "Assistant", emoji: "💬", accent: "marigold" },
  { href: "/mood", label: "Mood", emoji: "🌤️", accent: "sage" },
  { href: "/journal", label: "Journal", emoji: "📝", accent: "plum" },
  { href: "/support", label: "Peer Support", emoji: "🤝", accent: "dusk" },
];

const accentClasses = {
  marigold: { bar: "bg-marigold", text: "text-marigold-dark" },
  sage: { bar: "bg-sage", text: "text-sage-dark" },
  plum: { bar: "bg-plum", text: "text-plum-dark" },
  dusk: { bar: "bg-dusk", text: "text-dusk-dark" },
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-paper pt-5">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          HealTogether 🌿
        </Link>

        <nav className="mt-4 flex gap-1 border-b border-rule">
          {tabs.map((tab) => {
            const active = pathname === tab.href;
            const accent = accentClasses[tab.accent];
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`relative -mb-px flex items-center gap-1.5 rounded-t-xl border border-b-0 px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? `border-rule bg-card shadow-soft ${accent.text}`
                    : "border-transparent text-ink-soft hover:bg-card/60 hover:text-ink"
                }`}
              >
                <span aria-hidden>{tab.emoji}</span>
                {tab.label}
                {active && (
                  <span
                    className={`absolute inset-x-3 top-0 h-[3px] rounded-full ${accent.bar}`}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
