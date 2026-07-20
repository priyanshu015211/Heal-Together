import IndexCard from "../components/IndexCard";

const STEPS = [
  {
    step: "01",
    emoji: "🌤️",
    title: "Check in",
    description: "Start by naming how you actually feel today, no pressure to explain it perfectly.",
  },
  {
    step: "02",
    emoji: "💬",
    title: "Talk it out",
    description: "Chat with the assistant or write privately in your journal, whichever feels right.",
  },
  {
    step: "03",
    emoji: "🤝",
    title: "Feel less alone",
    description: "See how other students are coping, and share your own story if you want to.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
        <div className="md:sticky md:top-16">
          <span className="font-mono text-xs uppercase tracking-wider text-marigold-dark">
            For students, by students ✨
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            You don&apos;t have to carry it alone.
          </h1>
          <p className="mt-5 max-w-md text-ink-soft">
            Academic pressure, burnout, loneliness — it adds up. HealTogether
            is a warm, private space to check in with yourself, talk things
            through, and hear from other students who get it.
          </p>
          <div className="mt-6 flex gap-2 text-2xl">
            <span aria-hidden>🌱</span>
            <span aria-hidden>💛</span>
            <span aria-hidden>🫶</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <IndexCard
            href="/chat"
            tag="Talk it through"
            title="AI Wellness Assistant"
            description="A judgment-free space to say what's actually on your mind."
            accent="marigold"
            emoji="💬"
          />
          <IndexCard
            href="/mood"
            tag="Check in"
            title="Mood Check-in"
            description="Log how you're feeling and start noticing your patterns."
            accent="sage"
            emoji="🌤️"
          />
          <IndexCard
            href="/journal"
            tag="Write it down"
            title="Wellness Journal"
            description="A private page that's just for you, no one else reads it."
            accent="plum"
            emoji="📝"
          />
          <IndexCard
            href="/support"
            tag="You're not the only one"
            title="Anonymous Peer Support"
            description="Share and hear from other students, without revealing who you are."
            accent="dusk"
            emoji="🤝"
          />
        </div>
      </div>

      <div className="mt-20 border-t border-rule pt-14">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
          How it works
        </span>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.step} className="rounded-2xl bg-card p-5 shadow-soft">
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden>
                  {s.emoji}
                </span>
                <span className="font-mono text-xs text-ink-soft">{s.step}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-2xl bg-plum-light px-8 py-10 text-center">
        <p className="mx-auto max-w-lg font-display text-xl text-ink">
          &ldquo;It&apos;s okay to not have it figured out. Start with just
          one check-in today.&rdquo;
        </p>
        
          href="/mood"
          className="mt-5 inline-block rounded-full bg-plum-dark px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Start your first check-in →
        </a>
      </div>
    </div>
  );
}
