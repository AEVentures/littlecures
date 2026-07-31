import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Hero() {
  const openGitHub = () => {
    window.open(siteConfig.repoUrl, '_blank', 'noopener,noreferrer');
  };

  const openWhitePaper = () => {
    window.open(siteConfig.whitePaperUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Cures should not wait for market size.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 sm:text-xl">
          LittleCures is a public, open effort to accelerate cures for children with
          cancer — starting with the deadliest and most neglected diseases. We connect
          AI engineers, clinicians, researchers, and families around shared data,
          models, and tools that cannot be locked away.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={openGitHub}>
            Contribute on GitHub <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" onClick={openWhitePaper}>
            Read the white paper
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-600 text-slate-100 hover:bg-slate-800 hover:text-white"
            onClick={scrollToMission}
          >
            Read the mission
          </Button>
        </div>
      </div>
    </section>
  );
}
