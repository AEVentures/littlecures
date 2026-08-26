import { useRevealOnScroll } from '@/lib/useRevealOnScroll';
import { Contributors } from '@/components/sections/contributors';
import { Focus } from '@/components/sections/focus';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
import { Mission } from '@/components/sections/mission';
import { Nav } from '@/components/sections/nav';
import { Problem } from '@/components/sections/problem';
import { Roadmap } from '@/components/sections/roadmap';
import { Support } from '@/components/sections/support';
import { Tracks } from '@/components/sections/tracks';

export function App() {
  useRevealOnScroll();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main" className="min-h-screen">
        <Hero />
        <div data-reveal>
          <Mission />
        </div>
        <div data-reveal>
          <Problem />
        </div>
        <div data-reveal>
          <Focus />
        </div>
        <div data-reveal>
          <Roadmap />
        </div>
        <div data-reveal>
          <Tracks />
        </div>
        <div data-reveal>
          <Support />
        </div>
        <div data-reveal>
          <Contributors />
        </div>
        <div data-reveal>
          <Footer />
        </div>
      </main>
    </>
  );
}
