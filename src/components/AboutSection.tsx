const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      {/* Overlay - 80% dark for content readability */}
      <div className="absolute inset-0 bg-background/80 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl text-foreground mb-4 font-medium uppercase tracking-wide">
            About Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafting timeless stonework with dedication and expertise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Runestone Masonry is a family-owned business dedicated to preserving the ancient art of stone craftsmanship. 
            With years of experience in the Durango area, we bring passion and precision to every project—from custom 
            fireplaces and retaining walls to intricate stone facades.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe that quality stonework stands the test of time. That's why we use only the finest materials 
            and time-honored techniques to create structures that are as durable as they are beautiful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
