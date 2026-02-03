import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="stone-texture">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
