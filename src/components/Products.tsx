import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "Teak Wood",
    description:
      "Premium quality teak wood known for its durability, natural oils, and beautiful golden-brown color. Perfect for furniture and outdoor applications.",
    image:
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=800&auto=format&fit=crop",
    badge: "Best Seller",
    features: ["Termite Resistant", "Weather Proof", "Premium Grade"],
  },
  {
    name: "Marine Plywood",
    description:
      "High-quality marine grade plywood with excellent water resistance. Ideal for bathrooms, kitchens, and humid environments.",
    image:
      "https://images.unsplash.com/photo-1597003708986-cd9cf1e0a7d5?q=80&w=800&auto=format&fit=crop",
    badge: "Popular",
    features: ["Water Resistant", "BWP Grade", "Long Lasting"],
  },
  {
    name: "Hardwood",
    description:
      "Strong and dense hardwood perfect for flooring, structural work, and heavy-duty furniture. Available in various species.",
    image:
      "https://images.unsplash.com/photo-1541123603104-512919d6a96c?q=80&w=800&auto=format&fit=crop",
    badge: null,
    features: ["High Density", "Durable", "Multiple Species"],
  },
  {
    name: "Sal Wood",
    description:
      "Traditional Indian hardwood with exceptional strength. Widely used in construction, doors, and window frames.",
    image:
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800&auto=format&fit=crop",
    badge: null,
    features: ["Extra Strong", "Construction Grade", "Affordable"],
  },
  {
    name: "Commercial Plywood",
    description:
      "Cost-effective plywood solution for interior applications. Perfect for furniture, partitions, and decorative purposes.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
    badge: "Value Pick",
    features: ["Budget Friendly", "MR Grade", "Versatile"],
  },
  {
    name: "Pine Wood",
    description:
      "Softwood with beautiful grain patterns. Easy to work with and ideal for decorative items, ceilings, and light furniture.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    badge: null,
    features: ["Easy to Work", "Light Weight", "Natural Beauty"],
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-wood-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-wood-500 font-semibold text-sm tracking-widest uppercase mb-4">
            Our Products
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-wood-900 mb-6">
            Premium Wood Collection
          </h2>
          <p className="text-lg text-wood-600 max-w-2xl mx-auto">
            Discover our extensive range of high-quality timber and plywood
            products, sourced from trusted suppliers and delivered to your doorstep.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-900/60 via-transparent to-transparent" />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-amber-gold text-wood-900 font-semibold">
                    {product.badge}
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-wood-600 mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-wood-100 text-wood-700 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  className="w-full bg-wood-800 hover:bg-wood-700 text-wood-50 font-semibold group-hover:bg-amber-gold group-hover:text-wood-900 transition-all duration-300"
                >
                  <a
                    href={`https://wa.me/1234567890?text=Hi,%20I%20need%20a%20quote%20for%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Get Quote</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-wood-600 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-wood-600 text-wood-700 hover:bg-wood-100"
          >
            <a
              href="https://wa.me/1234567890?text=Hi,%20I%20need%20custom%20wood%20requirements"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Custom Order
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
