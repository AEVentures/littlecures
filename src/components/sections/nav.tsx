import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

const links = [
  { href: '#mission', label: 'Mission' },
  { href: '#focus', label: 'What we build' },
  { href: '#tracks', label: 'How to help' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#contributors', label: 'Contributors' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-100/70 bg-cream/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-tight text-ink-800"
        >
          Little<span className="gradient-text">Cures</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-heal-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white shadow-brand-glow transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Contribute on GitHub
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden>{open ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-cream md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-medium text-white"
            >
              Contribute on GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
