import { Card } from '@/components/ui/card';

const portfolioItems = [
  { id: 1, title: 'Natural Stone Siding', category: 'Exterior Stonework', image: '/images/portfolio/runestone4.jpg' },
  { id: 2, title: 'Foundation Stone Work', category: 'Residential', image: '/images/portfolio/runestone2.jpg' },
  { id: 3, title: 'Interior Brick Fireplace', category: 'Fireplace', image: '/images/portfolio/runestone3.jpg' },
  { id: 4, title: 'Stone Wall Cladding', category: 'Exterior Stonework', image: '/images/portfolio/runestone1.jpg' },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24">
      {/* Overlay - 90% dark for portfolio cards */}
      <div className="absolute inset-0 bg-background/90 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl text-foreground mb-4 font-semibold">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of our masonry and stonework projects across the Durango area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-4">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            More project photos coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
