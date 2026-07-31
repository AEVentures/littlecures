const areas = [
  {
    title: 'Open trial matching',
    description:
      'A public tool that helps oncologists and families find relevant clinical trials for pediatric cancers in seconds, not days.',
  },
  {
    title: 'Open target registry',
    description:
      'A clear map of molecular drivers, patent status, active trials, and research models for the most neglected pediatric cancers.',
  },
  {
    title: 'Federated learning',
    description:
      'Software that lets hospitals train shared models on rare tumor data without moving patient data outside their walls.',
  },
  {
    title: 'Access and advocacy',
    description:
      'Open IP, equitable licensing, and policy tools that keep discoveries affordable and available everywhere children need them.',
  },
];

export function Focus() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          What we are building
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {areas.map((area) => (
            <div key={area.title} className="rounded-2xl border border-slate-200 p-8">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{area.title}</h3>
              <p className="text-slate-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
