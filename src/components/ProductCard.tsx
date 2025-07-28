import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  price?: string;
}

const ProductCard = ({ title, description, image, features, price }: ProductCardProps) => {
  return (
    <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-scale-in">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            {price && (
              <span className="text-primary font-semibold">{price}</span>
            )}
          </div>
          
          <p className="text-foreground/70 mb-4 line-clamp-2">{description}</p>
          
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-foreground/60">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group"
          >
            Learn More
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;