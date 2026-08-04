import { ArrowRight, Github } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Ambient gradient orbs — the "global sunrise" feeling */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-heal-300 opacity-40 blur-3xl animate-slow-pulse" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-hope-300 opacity-40 blur-3xl animate-slow-pulse [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-human-200 opacity-40 blur-3xl animate-slow-pulse [animation-delay:4s]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/60 to-cream" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-700 shadow-sm animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-life-500" />
          Open source · patient-first
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-800 sm:text-6xl lg:text-7xl animate-fade-up [animation-delay:80ms]">
          Cures should not wait for <span className="gradient-text">market size</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl animate-fade-up [animation-delay:160ms]">
          LittleCures is a public, open effort to accelerate cures for children
          with cancer — starting with the deadliest and most neglected diseases.
          We connect AI engineers, clinicians, researchers, and families around
          shared data, models, and tools that cannot be locked away.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:240ms]">
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-medium text-white shadow-brand-glow transition-transform hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" /> Contribute on GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.whitePaperUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-7 py-3.5 text-base font-medium text-ink-800 backdrop-blur transition-colors hover:border-heal-500 hover:text-heal-600"
          >
            Read the white paper
          </a>
          <a
            href="#mission"
            className="inline-flex items-center gap-2 px-4 py-3.5 text-base font-medium text-ink-700 transition-colors hover:text-heal-600"
          >
            Read the mission →
          </a>
        </div>

        {/* Small stats strip that reads "movement in motion" without lying */}
        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4 animate-fade-up [animation-delay:320ms]">
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-500">Approach</dt>
            <dd className="mt-1 font-display text-3xl text-ink-800">Open</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-500">Beneficiary</dt>
            <dd className="mt-1 font-display text-3xl text-ink-800">Every child</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-500">Model</dt>
            <dd className="mt-1 font-display text-3xl text-ink-800">Federated</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-ink-500">License</dt>
            <dd className="mt-1 font-display text-3xl text-ink-800">MIT</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
