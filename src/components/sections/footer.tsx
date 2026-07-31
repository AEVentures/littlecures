import { siteConfig } from '@/config/site';

export function Footer() {
  const openDocs = () => {
    window.open(siteConfig.docsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-slate-950 px-6 py-12 text-slate-400">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm">
          LittleCures is an independent, open-source project. All code is
          available under the MIT license. Content and data are shared for
          public benefit.
        </p>
        <button
          onClick={openDocs}
          className="text-sm text-rose-400 hover:text-rose-300"
        >
          Read the docs on GitHub
        </button>
      </div>
    </footer>
  );
}
