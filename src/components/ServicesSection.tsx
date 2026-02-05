import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Home, Mountain, Wrench } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Stone Veneer',
    description: 'Transform your home with beautiful, durable stone veneer that combines timeless aesthetics with modern performance.',
  },
  {
    icon: Mountain,
    title: 'Block Walls',
    description: 'Custom block wall construction for retaining walls, garden borders, and architectural features that stand the test of time.',
  },
  {
    icon: Home,
    title: 'Landscape Stonework',
    description: 'Expert craftsmanship in natural stone installation for patios, walkways, fire pits, and outdoor living spaces.',
  },
  {
    icon: Wrench,
    title: 'Repairs and Remodels',
    description: 'Professional repair and restoration services to bring aging masonry back to its original beauty and structural integrity.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24">
      {/* Overlay - 80% dark for content readability */}
      <div className="absolute inset-0 bg-background/80 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
         <h2 className="font-norsebold text-5xl md:text-7xl text-foreground mb-4 uppercase tracking-wide">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quality masonry and stonework crafted with precision and built to last for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need a custom solution?{' '}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-primary hover:text-slate-glow underline underline-offset-4 transition-colors"
            >
              Contact us to discuss your project
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
