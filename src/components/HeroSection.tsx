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
         <div className="mb-6 animate-fade-in -mt-16 flex justify-center">
           <img 
             src="/images/Runestone_Masonry_5x5in_3.png" 
             alt="Runestone Masonry Logo" 
             className="h-40 md:h-56 w-auto object-contain"
           />
          </div>

         {/* Text Title */}
          <div 
           className="mb-6 animate-fade-in flex justify-center"
            style={{ animationDelay: '0.2s' }}
          >
           <img 
             src="/images/Runestone_Masonry_Text_1.png" 
             alt="Runestone Masonry"
             className="h-auto w-full max-w-2xl object-contain"
           />
          </div>

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
            Serving Durango, Bayfield, and the Animas Valley Colorado
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
