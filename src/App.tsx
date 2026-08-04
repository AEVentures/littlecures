import { Contribute } from '@/components/sections/contribute';
import { Contributors } from '@/components/sections/contributors';
import { Focus } from '@/components/sections/focus';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
import { Mission } from '@/components/sections/mission';
import { Problem } from '@/components/sections/problem';

export function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Problem />
      <Focus />
      <Contribute />
      <Contributors />
      <Footer />
    </main>
  );
}
