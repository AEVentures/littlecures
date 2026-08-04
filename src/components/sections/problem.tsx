import { Database, Globe2, Microscope, Pill } from 'lucide-react';

const problems = [
  {
    icon: Pill,
    title: 'No pediatric market',
    color: 'text-hope-600 bg-hope-50 border-hope-200',
    description:
      'Most cancer drugs are developed for adults. Children are an afterthought, and many promising therapies never reach them.',
  },
  {
    icon: Database,
    title: 'Siloed data',
    color: 'text-heal-600 bg-heal-50 border-heal-200',
    description:
      'Every hospital holds its own small dataset. For rare pediatric cancers, no single institution has enough cases to train reliable models.',
  },
  {
    icon: Microscope,
    title: 'Biology is harder',
    color: 'text-life-600 bg-life-50 border-life-200',
    description:
      'Pediatric tumors are often driven by fusion genes and epigenetics, not mutations, so adult immunotherapies frequently fail in kids.',
  },
  {
    icon: Globe2,
    title: 'Unequal access',
    color: 'text-human-600 bg-human-50 border-human-200',
    description:
      'In high-income countries, survival is ~80%. In many low-income countries, it is below 20% for the same diseases.',
  },
];

export function Problem() {
  return (
    <section className="relative bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-heal-600">
            The problem
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink-800 sm:text-5xl">
            What is standing in the way
          </h2>
          <p className="mt-6 text-lg text-ink-600">
            The problem is not that we lack scientific tools. It is that the
            incentives, the data, and the access are broken.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {problems.map(({ icon: Icon, title, description, color }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-cream p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-heal-500/5"
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-2xl font-semibold text-ink-800">
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
