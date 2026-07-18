import Link from "next/link";

const accentClasses = {
  marigold: "bg-marigold-light hover:bg-marigold/20",
  sage: "bg-sage-light hover:bg-sage/20",
  plum: "bg-plum-light hover:bg-plum/20",
  dusk: "bg-dusk-light hover:bg-dusk/20",
};

export default function IndexCard({ href, tag, title, description, accent, emoji }) {
  return (
    <Link
      href={href}
      className={`group flex items-start gap-4 rounded-2xl p-5 shadow-soft transition hover:-translate-y-0.5 ${accentClasses[accent]}`}
    >
      <span className="text-3xl" aria-hidden>
        {emoji}
      </span>
      <div className="flex-1">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
          {tag}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">
          {title}
        </h3>
        <p className="mt-1 text-sm text-ink-soft">{description}</p>
      </div>
      <span className="mt-1 shrink-0 text-lg text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-ink">
        →
      </span>
    </Link>
  );
}
