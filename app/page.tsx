import HeroSection from '@/components/HeroSection';
import MarqueeBand from '@/components/MarqueeBand';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ClientsStrip from '@/components/ClientsStrip';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeBand />
      <AboutSection />
      <ServicesSection />
      <ClientsStrip />
    </>
  );
}
