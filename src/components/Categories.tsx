import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {
      title: "Cosmetics",
      description: "Luxurious beauty essentials for your daily glow",
      imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      href: "#cosmetics",
    },
    {
      title: "Apparel",
      description: "Timeless pieces crafted for the modern woman",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      href: "#apparel",
    },
    {
      title: "Bags",
      description: "Elegant accessories to complete every look",
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      href: "#bags",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our Collections
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-primary">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
