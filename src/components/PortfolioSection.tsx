import { Card } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';

const portfolioItems = [
  { id: 1, title: 'Stone Siding Project', category: 'Masonry Siding' },
  { id: 2, title: 'Retaining Wall', category: 'Stone Walls' },
  { id: 3, title: 'Patio Installation', category: 'Stonework' },
  { id: 4, title: 'Fireplace Restoration', category: 'Repairs' },
  { id: 5, title: 'Garden Wall', category: 'Stone Walls' },
  { id: 6, title: 'Exterior Stonework', category: 'Stonework' },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-24">
      {/* Overlay - 90% dark for portfolio cards */}
      <div className="absolute inset-0 bg-background/90 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-nordic text-4xl md:text-5xl text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of our masonry and stonework projects across the Durango area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder image area */}
              <div className="aspect-[4/3] bg-secondary flex items-center justify-center relative overflow-hidden">
                <div className="text-muted-foreground flex flex-col items-center gap-2">
                  <ImageIcon size={48} className="opacity-50" />
                  <span className="text-sm">Project Photo</span>
                </div>
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
