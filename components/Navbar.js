import Link from "next/link";

const links = [
  { href: "/chat", label: "AI Assistant" },
  { href: "/mood", label: "Mood Check-in" },
  { href: "/journal", label: "Journal" },
  { href: "/support", label: "Peer Support" },
];

export default function Navbar() {
  return (
    <header className="border-b border-calm-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-calm-700">
          HealTogether
        </Link>
        <ul className="flex gap-6 text-sm font-medium text-calm-700">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-calm-500">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
