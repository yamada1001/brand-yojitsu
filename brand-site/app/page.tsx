import ParticleBackground from '@/components/ParticleBackground';
import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ParticleBackground />

      <main className="relative">
        <Hero />
        <PricingSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </>
  );
}
