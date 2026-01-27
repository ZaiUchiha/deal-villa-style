import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Velvet Matte Lipstick",
      price: 32,
      imageUrl: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
      category: "Cosmetics",
      isNew: true,
    },
    {
      name: "Silk Wrap Blouse",
      price: 128,
      originalPrice: 168,
      imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      category: "Apparel",
    },
    {
      name: "Structured Leather Tote",
      price: 298,
      imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      category: "Bags",
      isNew: true,
    },
    {
      name: "Luminous Foundation",
      price: 48,
      imageUrl: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=800&q=80",
      category: "Cosmetics",
    },
    {
      name: "Cashmere Cardigan",
      price: 195,
      originalPrice: 245,
      imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      category: "Apparel",
    },
    {
      name: "Quilted Crossbody",
      price: 168,
      imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
      category: "Bags",
    },
    {
      name: "Rose Petal Blush",
      price: 36,
      imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
      category: "Cosmetics",
      isNew: true,
    },
    {
      name: "Pleated Midi Skirt",
      price: 145,
      imageUrl: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj1z?w=800&q=80",
      category: "Apparel",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Curated Selection
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary mb-6">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Handpicked pieces that embody sophistication and timeless style
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-sm uppercase tracking-wider"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
