import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const CategoryCard = ({ title, description, imageUrl, href }: CategoryCardProps) => {
  return (
    <a
      href={href}
      className="group relative overflow-hidden block aspect-[3/4] bg-muted"
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <h3 className="font-serif text-3xl lg:text-4xl text-primary-foreground mb-2">
          {title}
        </h3>
        <p className="text-primary-foreground/80 text-sm mb-4 max-w-xs">
          {description}
        </p>
        <span className="inline-flex items-center text-sm uppercase tracking-wider text-primary-foreground group-hover:text-gold transition-colors">
          Shop Now
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
};

export default CategoryCard;
