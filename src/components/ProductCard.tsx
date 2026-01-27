import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ name, price, originalPrice, imageUrl, category, isNew }: ProductCardProps) => {
  return (
    <div className="group">
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-gold text-primary-foreground border-0 uppercase text-xs tracking-wider">
              New
            </Badge>
          )}
          {originalPrice && (
            <Badge variant="secondary" className="uppercase text-xs tracking-wider">
              Sale
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-xs tracking-wider"
          >
            Add to Bag
          </Button>
        </div>
      </div>

      {/* Product info */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
          {category}
        </p>
        <h3 className="font-serif text-lg text-primary mb-2 group-hover:text-gold transition-colors">
          {name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <span className="font-medium text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
