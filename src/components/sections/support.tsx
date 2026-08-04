import { Github, Heart, Share2, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';

const ways = [
  {
    icon: Star,
    title: 'Star the repo',
    description:
      'Every star makes the project more visible to engineers, researchers, and journalists.',
    cta: 'Star on GitHub',
    href: siteConfig.repoUrl,
  },
  {
    icon: Share2,
    title: 'Share the mission',
    description:
      'Post the site to X, LinkedIn, or your family group chat. Every share reaches someone who can help.',
    cta: 'Copy shareable link',
    href: 'https://littlecures.org/',
  },
  {
    icon: Github,
    title: 'Open a PR',
    description:
      'A doc fix, a translation, a new component, a test. Every merged PR is a real contribution to a cure.',
    cta: 'See open issues',
    href: 'https://github.com/AEVentures/littlecures/issues',
  },
  {
    icon: Heart,
    title: 'Sponsor the work',
    description:
      'Individual and institutional funders keep this open, non-profit, and moving. Get in touch to talk sponsorship.',
    cta: 'Fundraising inquiry',
    href: 'https://github.com/AEVentures/littlecures/issues/new?labels=fundraising&template=fundraising.yml',
  },
];

export function Support() {
  return (
    <section id="support" className="relative bg-cream px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-hope-600">
            Support the movement
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink-800 sm:text-5xl">
            Four simple ways to help right now
          </h2>
          <p className="mt-6 text-lg text-ink-600">
            You do not have to be an expert. You do not have to donate money.
            Any of these actions, done today, moves the work forward.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {ways.map(({ icon: Icon, title, description, cta, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-warm-glow"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient-warm text-white shadow-warm-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink-800">
                {title}
              </h3>
              <p className="mt-3 text-ink-600">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-hope-600 transition-colors group-hover:text-hope-700">
                {cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
