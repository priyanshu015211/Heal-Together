import IndexCard from "../components/IndexCard";

export default function HomePage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:items-start md:gap-16">
      <div className="md:sticky md:top-16">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
          For students, by students
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
          You don&apos;t have to carry it alone.
        </h1>
        <p className="mt-5 max-w-md text-ink-soft">
          Academic pressure, burnout, loneliness — it adds up. HealTogether
          is a private space to check in with yourself, talk things through,
          and hear from other students who get it.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <IndexCard
          href="/chat"
          tag="Talk it through"
          title="AI Wellness Assistant"
          description="A judgment-free space to say what's actually on your mind."
          accent="marigold"
        />
        <IndexCard
          href="/mood"
          tag="Check in"
          title="Mood Check-in"
          description="Log how you're feeling and start noticing your patterns."
          accent="sage"
        />
        <IndexCard
          href="/journal"
          tag="Write it down"
          title="Wellness Journal"
          description="A private page that's just for you, no one else reads it."
          accent="plum"
        />
        <IndexCard
          href="/support"
          tag="You're not the only one"
          title="Anonymous Peer Support"
          description="Share and hear from other students, without revealing who you are."
          accent="dusk"
        />
      </div>
    </div>
  );
}
