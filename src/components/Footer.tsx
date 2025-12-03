const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-stone-dark border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
              <span className="text-primary font-nordic text-sm">R</span>
            </div>
            <span className="font-nordic text-foreground">Runestone Masonry</span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Runestone Masonry. All rights reserved.
          </p>

          <div className="text-muted-foreground text-sm">
            Durango, CO & Surrounding Areas
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
