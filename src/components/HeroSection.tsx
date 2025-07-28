import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/smart-home-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Smart Home Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6">
            NURAHOMES
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            The Future of Smart Living
          </p>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Transform your home with cutting-edge IoT devices, intelligent automation, 
            and seamless connectivity that adapts to your lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg animate-glow-pulse"
            >
              Explore Products
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[-250px] left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 transform rotate-[-45deg] bg-foreground/30 rounded-full mt-6"></div>
            <div className="w-1 h-5 bg-foreground/30 rounded-full mt-3"></div>
            <div className="w-1 h-3 transform rotate-[45deg] bg-foreground/30 rounded-full mt-6"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;