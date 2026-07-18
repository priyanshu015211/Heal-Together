import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-calm-700 sm:text-5xl">
          You don&apos;t have to carry it alone.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-calm-900/80">
          HealTogether is a safe, private space for students to check in with
          themselves, talk to an AI wellness assistant, and connect
          anonymously with peers who understand.
        </p>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <FeatureCard
          href="/chat"
          title="AI Wellness Assistant"
          description="Talk through what's on your mind and get judgment-free, supportive responses."
        />
        <FeatureCard
          href="/mood"
          title="Mood Check-in"
          description="Log how you're feeling and start noticing patterns over time."
        />
        <FeatureCard
          href="/journal"
          title="Wellness Journal"
          description="Write freely in a private space that's just for you."
        />
        <FeatureCard
          href="/support"
          title="Anonymous Peer Support"
          description="Share and connect with other students, without revealing who you are."
        />
      </section>
    </div>
  );
}
