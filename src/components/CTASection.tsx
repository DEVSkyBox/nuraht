import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 animate-fade-in-up">
            Join thousands of satisfied customers who have already upgraded to intelligent living. 
            Get started with a free consultation and personalized smart home plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg animate-glow-pulse"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg"
            >
              Download Catalog
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto animate-fade-in-up">
            <p className="text-foreground/60 mb-4">Stay updated with the latest smart home innovations</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email"
                className="bg-background/50 border-border/50 focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;