import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to Deal Villa",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">
            Join Our Community
          </h2>
          <p className="text-primary-foreground/80 mb-10 font-light">
            Subscribe to receive exclusive offers, early access to new arrivals, and styling inspiration delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold"
              required
            />
            <Button 
              type="submit"
              className="bg-gold hover:bg-gold/90 text-primary px-8 uppercase tracking-wider whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
