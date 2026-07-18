import Link from "next/link";

export default function FeatureCard({ href, title, description }) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-calm-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-calm-700">{title}</h3>
      <p className="mt-2 text-sm text-calm-900/80">{description}</p>
    </Link>
  );
}
