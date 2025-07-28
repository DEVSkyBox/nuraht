import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg"></div>
            <span className="text-2xl font-bold text-foreground">NURAHOMES</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground/80 hover:text-primary transition-colors">Products</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About Us</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Request a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="text-foreground/80 hover:text-primary transition-colors">Products</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About Us</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                Request a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;