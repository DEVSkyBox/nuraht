import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg"></div>
              <span className="text-2xl font-bold text-foreground">NURAHOMES</span>
            </div>
            <p className="text-foreground/70">
              Transforming homes with intelligent technology that adapts to your lifestyle.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-foreground/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="#products" className="block text-foreground/70 hover:text-primary transition-colors">Products</a>
              <a href="#about" className="block text-foreground/70 hover:text-primary transition-colors">About Us</a>
              <a href="#support" className="block text-foreground/70 hover:text-primary transition-colors">Support</a>
              <a href="#blog" className="block text-foreground/70 hover:text-primary transition-colors">Blog</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <a href="#help" className="block text-foreground/70 hover:text-primary transition-colors">Help Center</a>
              <a href="#installation" className="block text-foreground/70 hover:text-primary transition-colors">Installation Guide</a>
              <a href="#warranty" className="block text-foreground/70 hover:text-primary transition-colors">Warranty</a>
              <a href="#returns" className="block text-foreground/70 hover:text-primary transition-colors">Returns</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground/70">1-800-NURA-HOME</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-foreground/70">hello@nurahomes.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground/70">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © 2024 NURAHOMES. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-foreground/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-foreground/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;