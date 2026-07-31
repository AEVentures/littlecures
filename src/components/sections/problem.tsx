import { Database, Globe, Microscope, Pill } from 'lucide-react';

const problems = [
  {
    icon: Pill,
    title: 'No pediatric market',
    description:
      'Most cancer drugs are developed for adults. Children are an afterthought, and many promising therapies never reach them.',
  },
  {
    icon: Database,
    title: 'Siloed data',
    description:
      'Every hospital holds its own small dataset. For rare pediatric cancers, no single institution has enough cases to train reliable models.',
  },
  {
    icon: Microscope,
    title: 'Biology is harder',
    description:
      'Pediatric tumors are often driven by fusion genes and epigenetics, not mutations, so adult immunotherapies usually fail in kids.',
  },
  {
    icon: Globe,
    title: 'Unequal access',
    description:
      'In high-income countries, survival is ~80%. In many low-income countries, it is below 20% for the same diseases.',
  },
];

export function Problem() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          What is standing in the way
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
              <Icon className="mb-4 h-8 w-8 text-rose-600" />
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
