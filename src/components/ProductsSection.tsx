import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import smartThermostat from '@/assets/smart-thermostat.jpg';
import smartSecurity from '@/assets/smart-security.jpg';
import smartLighting from '@/assets/smart-lighting.jpg';

const ProductsSection = () => {
  const products = [
    {
      title: "Smart Thermostat Pro",
      description: "Intelligent climate control that learns your preferences and optimizes energy usage automatically.",
      image: smartThermostat,
      features: [
        "AI-powered temperature learning",
        "Energy usage analytics",
        "Remote control via app",
        "Voice assistant integration"
      ],
      price: "$299"
    },
    {
      title: "Security System Elite",
      description: "Advanced home security with AI-powered threat detection and 24/7 monitoring capabilities.",
      image: smartSecurity,
      features: [
        "AI threat detection",
        "4K night vision cameras",
        "Motion tracking alerts",
        "Cloud storage included"
      ],
      price: "$599"
    },
    {
      title: "Adaptive Lighting Hub",
      description: "Create the perfect ambiance with color-changing smart lights that sync with your daily routine.",
      image: smartLighting,
      features: [
        "16 million color options",
        "Circadian rhythm sync",
        "Music synchronization",
        "Scene automation"
      ],
      price: "$199"
    }
  ];

  return (
    <section id="products" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Smart Devices That Think Ahead
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-in-up">
            Discover our range of intelligent home devices designed to make your life 
            more comfortable, secure, and energy-efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;