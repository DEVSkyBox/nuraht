import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BackgroundVideo from '@/components/BackgroundVideo';
import  Video  from '/assets/videos/background.mp4';



const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <video src={Video} autoPlay loop muted style={{opacity: 0.25, top: 920, position: 'absolute', }} id='bg-video' className={`video-bg-container ${BackgroundVideo} `} / >
      <ProductsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
