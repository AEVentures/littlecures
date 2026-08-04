import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-ink-900 px-6 py-16 text-ink-200">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a
              href="#top"
              className="font-display text-2xl font-semibold text-white"
            >
              Little<span className="gradient-text">Cures</span>
            </a>
            <p className="mt-4 max-w-md text-sm text-ink-300">
              Open, patient-first infrastructure to accelerate cures for
              children with cancer. Part of{' '}
              <a
                href="https://github.com/AEVentures"
                target="_blank"
                rel="noreferrer"
                className="text-hope-300 hover:text-hope-200"
              >
                AEVentures
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-400">
              Project
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="#mission"
                  className="text-ink-200 hover:text-white"
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="text-ink-200 hover:text-white"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#tracks"
                  className="text-ink-200 hover:text-white"
                >
                  How to help
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-ink-200 hover:text-white"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-400">
              Open
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-200 hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-200 hover:text-white"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whitePaperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-200 hover:text-white"
                >
                  White paper
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AEVentures/littlecures/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-200 hover:text-white"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-700 pt-6 text-center text-xs text-ink-400">
          LittleCures is an independent, open-source project. Code is MIT-licensed.
          Content and data are shared for public benefit.
        </div>
      </div>
    </footer>
  );
}
