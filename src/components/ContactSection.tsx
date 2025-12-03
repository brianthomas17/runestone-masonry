import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24">
      {/* Overlay - 80% dark for content readability */}
      <div className="absolute inset-0 bg-background/80 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl text-foreground mb-4 font-semibold">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your masonry project? Give us a call for a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-card border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground font-semibold">
                Call Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="tel:2624423544"
                className="text-2xl font-semibold text-slate-accent hover:text-slate-glow transition-colors"
              >
                (262) 442-3544
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground font-semibold">
                Service Area
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-base">
                Durango, Bayfield, Hesperus, Hermosa & Oxford, CO
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-foreground font-semibold">
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-base">
                Mon - Sat: 7AM - 6PM<br />
                Sunday: Closed
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
