export function Mission() {
  return (
    <section id="mission" className="relative bg-cream px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-heal-600">
          The mission
        </p>
        <h2 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl">
          A world where a child's chance at a cure does not depend on where they were born.
        </h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-700">
          <p>
            LittleCures exists because children with cancer are treated as an
            afterthought in drug development. The deadliest pediatric brain
            cancers have seen virtually no progress in decades. Most children in
            low- and middle-income countries never get diagnosed, let alone
            treated.
          </p>
          <p className="rounded-2xl border border-ink-100 bg-white px-6 py-5 text-xl font-medium text-ink-800 shadow-sm">
            We are building open, public infrastructure to change that — code,
            data, and tools that any hospital, researcher, or family can use.
          </p>
          <p>
            Our work is open source, open data, and open access. We do not
            accept the idea that a child's life is worth less because the market
            is small.
          </p>
        </div>
      </div>
    </section>
  );
}
