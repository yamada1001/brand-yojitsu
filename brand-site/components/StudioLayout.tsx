'use client';

import StudioHeader from './StudioHeader';
import StudioHero from './StudioHero';
import LogoCloud from './LogoCloud';
import FeaturesGrid from './FeaturesGrid';
import PortfolioCarousel from './PortfolioCarousel';
import StudioPricing from './StudioPricing';
import StudioFooter from './StudioFooter';

export default function StudioLayout() {
  return (
    <div className="min-h-screen bg-white">
      <StudioHeader />
      <main>
        <StudioHero />
        <LogoCloud />
        <FeaturesGrid />
        <PortfolioCarousel />
        <StudioPricing />
      </main>
      <StudioFooter />
    </div>
  );
}
