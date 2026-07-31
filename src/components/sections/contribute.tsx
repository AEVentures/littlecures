import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Code,
  FlaskConical,
  HeartHandshake,
  Megaphone,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const ways = [
  {
    icon: Code,
    title: 'Engineers',
    description:
      'Build the registry, matching engine, federated learning clients, and open APIs.',
  },
  {
    icon: FlaskConical,
    title: 'Researchers and clinicians',
    description:
      'Advise on data models, review accuracy, and connect real patients to the tools we build.',
  },
  {
    icon: HeartHandshake,
    title: 'Designers and writers',
    description:
      'Make this work legible to families and policymakers, not just scientists.',
  },
  {
    icon: Megaphone,
    title: 'Advocates and funders',
    description:
      'Share, support, and help us keep the work open and patient-first.',
  },
];

export function Contribute() {
  const openGitHub = () => {
    window.open(siteConfig.repoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-slate-950 px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          How to help
        </h2>
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl bg-slate-900 p-6">
              <Icon className="mb-4 h-8 w-8 text-rose-400" />
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-slate-400">{description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" onClick={openGitHub}>
            Join on GitHub <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
