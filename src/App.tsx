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
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main" className="min-h-screen">
        <Hero />
        <Mission />
        <Problem />
        <Focus />
        <Roadmap />
        <Tracks />
        <Support />
        <Contributors />
        <Footer />
      </main>
    </>
  );
}
