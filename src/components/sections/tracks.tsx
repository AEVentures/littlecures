import {
  Code2,
  FlaskConical,
  HeartHandshake,
  Megaphone,
  Stethoscope,
  Users,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const tracks = [
  {
    icon: Code2,
    title: 'Engineers',
    subtitle: 'AI / infra / full-stack',
    description:
      'Build the registry, the matching engine, the federated learning clients, and the open APIs. Any language, any stack.',
    cta: 'good first issue',
    href: 'https://github.com/AEVentures/littlecures/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
  },
  {
    icon: FlaskConical,
    title: 'Researchers',
    subtitle: 'Oncology · bio · data science',
    description:
      'Advise on tumor biology, data schemas, and model evaluation. Share datasets, benchmarks, and papers we should be building on.',
    cta: 'Open a discussion',
    href: 'https://github.com/AEVentures/littlecures/discussions',
  },
  {
    icon: Stethoscope,
    title: 'Clinicians',
    subtitle: 'Pediatric oncologists · nurses',
    description:
      'Tell us what tools would actually change your day. Review our clinical assumptions. Pilot with us at your institution.',
    cta: 'Get in touch',
    href: 'https://github.com/AEVentures/littlecures/discussions',
  },
  {
    icon: HeartHandshake,
    title: 'Designers & writers',
    subtitle: 'Make it human',
    description:
      'Make this work legible to families and policymakers, not just scientists. Illustrate, translate, write, film.',
    cta: 'Start here',
    href: 'https://github.com/AEVentures/littlecures/issues?q=is%3Aissue+is%3Aopen+label%3Adesign',
  },
  {
    icon: Megaphone,
    title: 'Advocates',
    subtitle: 'Amplify · share · fund',
    description:
      'Tell the story. Introduce us to institutions, hospitals, and funders. Sponsor the work or an individual contributor.',
    cta: 'Fundraising inquiry',
    href: 'https://github.com/AEVentures/littlecures/issues/new?labels=fundraising&template=fundraising.yml',
  },
  {
    icon: Users,
    title: 'Families',
    subtitle: 'Real experience matters most',
    description:
      'You are why this project exists. Share what you have learned. Tell us what would have helped. We build for you first.',
    cta: 'Share your story',
    href: 'https://github.com/AEVentures/littlecures/discussions/new?category=family-stories',
  },
];

export function Tracks() {
  return (
    <section id="tracks" className="relative bg-ink-800 px-6 py-28 text-cream">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-heal-500 opacity-40 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-hope-500 opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-hope-300">
            How to help
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Every skill has a place in this movement
          </h2>
          <p className="mt-6 text-lg text-ink-200">
            You do not need to be an oncologist or an AI researcher. If a child
            somewhere in the world matters to you, there is a way for you to
            help.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map(({ icon: Icon, title, subtitle, description, cta, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-hope-400/60 hover:bg-white/[0.06]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-hope-300">
                {subtitle}
              </p>
              <p className="mt-4 text-ink-200">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-hope-300 transition-colors group-hover:text-hope-200">
                {cta} →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-medium text-white shadow-brand-glow transition-transform hover:-translate-y-0.5"
          >
            See the whole project on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
