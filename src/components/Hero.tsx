import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-background to-rose/20 pt-16 lg:pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in">
            Elevate Your Style
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Discover
            <span className="block italic font-normal text-gold">Timeless Elegance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Curated collections of premium cosmetics, sophisticated apparel, and artisan bags for the modern woman.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm uppercase tracking-wider"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-sm uppercase tracking-wider"
            >
              View Lookbook
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>
    </section>
  );
};

export default Hero;
