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
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main" className="min-h-screen">
        <Hero />
        <div data-reveal><Mission /></div>
        <div data-reveal><Problem /></div>
        <div data-reveal><Focus /></div>
        <div data-reveal><Roadmap /></div>
        <div data-reveal><Tracks /></div>
        <div data-reveal><Support /></div>
        <div data-reveal><Contributors /></div>
        <Footer />
      </main>
    </>
  );
}
