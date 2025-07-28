import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Shield, Zap, Brain, Home, Wifi } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Our devices learn from your habits and automatically adjust to optimize your comfort and energy efficiency."
    },
    {
      icon: Smartphone,
      title: "Seamless App Control",
      description: "Control everything from one intuitive app. Monitor, adjust, and automate your entire smart home ecosystem."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "End-to-end encryption and advanced security protocols keep your home data safe and private."
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Reduce energy consumption by up to 30% with intelligent automation and usage analytics."
    },
    {
      icon: Home,
      title: "Easy Installation",
      description: "Professional installation included with every purchase. Get your smart home running in under 2 hours."
    },
    {
      icon: Wifi,
      title: "Always Connected",
      description: "Reliable connectivity with automatic updates and 99.9% uptime guarantee for peace of mind."
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Why Choose NURAHOMES?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-in-up">
            Experience the next generation of home automation with features designed 
            around your lifestyle and priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;