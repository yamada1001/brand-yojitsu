import CustomCursor from '@/components/CustomCursor';
import HeroDesigner from '@/components/HeroDesigner';
import PricingDesigner from '@/components/PricingDesigner';
import PortfolioDesigner from '@/components/PortfolioDesigner';
import ContactDesigner from '@/components/ContactDesigner';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main>
        <HeroDesigner />
        <PricingDesigner />
        <PortfolioDesigner />
        <ContactDesigner />
      </main>
    </>
  );
}
