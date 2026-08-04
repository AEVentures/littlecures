const phases = [
  {
    stage: 'Now',
    color: 'bg-life-500',
    title: 'Public foundation',
    items: [
      'Public repo and site at littlecures.org',
      'Whitepaper, mission, and open roadmap',
      'First good-first-issues open for contributors',
    ],
  },
  {
    stage: 'Next',
    color: 'bg-heal-500',
    title: 'Open trial matching MVP',
    items: [
      'Ingest public trial registries (ClinicalTrials.gov, EU CTR)',
      'Plain-language pediatric filter and family view',
      'First hospital partner review',
    ],
  },
  {
    stage: 'Soon',
    color: 'bg-hope-500',
    title: 'Open target registry v0',
    items: [
      'Curated dataset of the deadliest pediatric cancers',
      'Molecular drivers, active trials, and patent status',
      'API for researchers and clinicians',
    ],
  },
  {
    stage: 'Vision',
    color: 'bg-human-500',
    title: 'Federated learning across hospitals',
    items: [
      'Reference client for federated model training',
      'Governance and consent framework',
      'First multi-institution pilot',
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-heal-600">
            Roadmap
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink-800 sm:text-5xl">
            Where we are, and where we are going
          </h2>
          <p className="mt-6 text-lg text-ink-600">
            An honest, public roadmap. Nothing hidden. When priorities change,
            they change here first.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <li
              key={phase.stage}
              className="rounded-3xl border border-ink-100 bg-cream p-6"
            >
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${phase.color}`} />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  {phase.stage}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink-800">
                {phase.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-700">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="mt-1 text-hope-500">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-ink-500">
          Roadmap changes live in the{' '}
          <a
            href="https://github.com/AEVentures/littlecures/blob/main/docs/ROADMAP.md"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-heal-600 underline underline-offset-4 hover:text-heal-700"
          >
            ROADMAP.md
          </a>{' '}
          and are reviewed openly on GitHub.
        </p>
      </div>
    </section>
  );
}
