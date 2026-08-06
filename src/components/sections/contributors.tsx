import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

type Contributor = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
  type: string;
};

const REPO_API =
  'https://api.github.com/repos/AEVentures/littlecures/contributors?per_page=100';

const EXCLUDED_LOGINS = new Set(['plasmaraygun']);

export function Contributors() {
  const [contributors, setContributors] = useState<Contributor[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    fetch(REPO_API, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return (await res.json()) as Contributor[];
      })
      .then((data) => {
        if (cancelled) return;
        setContributors(
          data.filter(
            (c) => c.type === 'User' && !EXCLUDED_LOGINS.has(c.login.toLowerCase())
          )
        );
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : 'Unable to load contributors');
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="contributors" className="relative bg-white px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-heal-600">
            The movement
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink-800 sm:text-5xl">
            Every contributor is a step closer to a cure
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-600">
            This wall updates automatically from GitHub. Your face belongs here.
          </p>
        </div>

        <div className="mt-14 min-h-[8rem]">
          {contributors === null && !error && (
            <p className="text-center text-ink-500">Loading contributors…</p>
          )}

          {error && (
            <p className="text-center text-ink-500">
              Could not load contributors right now. See the{' '}
              <a
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-ink-900"
              >
                repository
              </a>
              .
            </p>
          )}

          {contributors && contributors.length > 0 && (
            <ul className="flex flex-wrap justify-center gap-5">
              {contributors.map((c) => (
                <li key={c.id}>
                  <a
                    href={c.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center gap-2"
                    title={`${c.login} — ${c.contributions} commits`}
                  >
                    <img
                      src={`${c.avatar_url}&s=128`}
                      alt={`${c.login} avatar`}
                      width={72}
                      height={72}
                      loading="lazy"
                      className="h-18 w-18 h-[72px] w-[72px] rounded-full border-2 border-ink-100 transition group-hover:border-hope-400 group-hover:shadow-warm-glow"
                    />
                    <span className="text-xs font-medium text-ink-600 group-hover:text-ink-800">
                      {c.login}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-14 rounded-3xl border border-ink-100 bg-cream p-8 text-center">
          <h3 className="font-display text-2xl font-semibold text-ink-800">
            Want to join this wall?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-ink-700">
            Open a pull request — a doc fix, a test, a bug fix, a new component.
            Every contribution counts.
          </p>
          <a
            href="https://github.com/AEVentures/littlecures/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-white shadow-brand-glow transition-transform hover:-translate-y-0.5"
          >
            Start with a good first issue →
          </a>
        </div>
      </div>
    </section>
  );
}
