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
        if (!res.ok) {
          throw new Error(`GitHub API responded ${res.status}`);
        }
        return (await res.json()) as Contributor[];
      })
      .then((data) => {
        if (cancelled) return;
        const humans = data.filter((c) => c.type === 'User');
        setContributors(humans);
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
    <section className="border-t border-neutral-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Contributors
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-700">
          Everyone who has committed code, docs, or research to LittleCures.
          This wall updates automatically. Your face belongs here.
        </p>

        <div className="mt-10 min-h-[6rem]">
          {contributors === null && !error && (
            <p className="text-neutral-500">Loading contributors…</p>
          )}

          {error && (
            <p className="text-neutral-500">
              Could not load contributors right now. See the{' '}
              <a
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-neutral-900"
              >
                repository
              </a>
              .
            </p>
          )}

          {contributors && contributors.length > 0 && (
            <ul className="flex flex-wrap gap-4">
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
                      src={`${c.avatar_url}&s=96`}
                      alt={`${c.login} avatar`}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-16 w-16 rounded-full border border-neutral-200 transition group-hover:border-neutral-400 group-hover:shadow"
                    />
                    <span className="text-xs text-neutral-600 group-hover:text-neutral-900">
                      {c.login}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-10 rounded-lg bg-neutral-50 p-6">
          <h3 className="text-lg font-semibold text-neutral-900">
            Want to join this wall?
          </h3>
          <p className="mt-2 text-neutral-700">
            Open a pull request — a doc fix, a test, a bug fix, a new component.
            Every contribution counts. Start with a{' '}
            <a
              href="https://github.com/AEVentures/littlecures/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-neutral-900"
            >
              good first issue
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
