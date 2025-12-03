import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
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
          <div className="mb-6 animate-fade-in -mt-16">
            <img 
              src="/images/logo.png" 
              alt="Runestone Masonry Logo" 
              className="w-56 h-56 md:w-72 md:h-72 mx-auto object-contain"
            />
          </div>

          <h1 
            className="font-nordic text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block">Runestone</span>
            <span className="block mt-2 md:mt-4">Masonry</span>
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

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
