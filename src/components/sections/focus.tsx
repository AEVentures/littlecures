import { Network, Radar, ShieldCheck, Sparkles } from 'lucide-react';

const areas = [
  {
    icon: Radar,
    tag: 'Track 01',
    title: 'Open trial matching',
    description:
      'A public tool that helps oncologists and families find relevant clinical trials for pediatric cancers in seconds, not days — with plain-language explanations.',
  },
  {
    icon: Sparkles,
    tag: 'Track 02',
    title: 'Open target registry',
    description:
      'A clear map of molecular drivers, patent status, active trials, and research models for the most neglected pediatric cancers.',
  },
  {
    icon: Network,
    tag: 'Track 03',
    title: 'Federated learning',
    description:
      'Software that lets hospitals train shared models on rare tumor data without moving patient data outside their walls.',
  },
  {
    icon: ShieldCheck,
    tag: 'Track 04',
    title: 'Access and advocacy',
    description:
      'Open IP, equitable licensing, and policy tools that keep discoveries affordable and available everywhere children need them.',
  },
];

export function Focus() {
  return (
    <section id="focus" className="relative bg-cream px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-heal-600">
            What we build
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink-800 sm:text-5xl">
            Four pillars, one movement
          </h2>
          <p className="mt-6 text-lg text-ink-600">
            Each pillar has an open repository, a public roadmap, and a clear
            way for you to contribute regardless of your background.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {areas.map(({ icon: Icon, tag, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-heal-500/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
                  {tag}
                </span>
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold text-ink-800">
                {title}
              </h3>
              <p className="text-ink-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
