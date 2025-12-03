import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark overlay - 50% for hero to showcase background */}
      <div className="absolute inset-0 bg-background/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/images/logo.png" 
              alt="Runestone Masonry Logo" 
              className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-primary/40"
            />
          </div>

          <h1 
            className="font-nordic text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Runestone Masonry
          </h1>

          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Expert Stonework & Masonry Services
          </p>

          <p 
            className="text-lg text-slate-accent mb-10 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Serving Durango, Bayfield, Hesperus, Hermosa & Oxford, CO
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              Request a Quote
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
            >
              Our Services
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll to services"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
