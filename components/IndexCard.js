import Link from "next/link";

const accentClasses = {
  marigold: "border-l-marigold hover:bg-marigold-light",
  sage: "border-l-sage hover:bg-sage-light",
  plum: "border-l-plum hover:bg-plum-light",
  dusk: "border-l-dusk hover:bg-dusk-light",
};

export default function IndexCard({ href, tag, title, description, accent }) {
  return (
    <Link
      href={href}
      className={`group flex items-start justify-between gap-4 border-l-4 bg-card px-5 py-4 transition ${accentClasses[accent]}`}
    >
      <div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
          {tag}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">
          {title}
        </h3>
        <p className="mt-1 text-sm text-ink-soft">{description}</p>
      </div>
      <span className="mt-1 shrink-0 font-mono text-sm text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-ink">
        →
      </span>
    </Link>
  );
}
