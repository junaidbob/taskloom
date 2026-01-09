import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PricingSection } from "./components/PricingSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#00FFC2]">
              TaskLoom
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-[#CCCCCC] hover:text-white transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-[#CCCCCC] hover:text-white transition-colors"
              >
                Pricing
              </button>
              <a href="#" className="text-[#CCCCCC] hover:text-white transition-colors">
                Docs
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-white transition-colors">
                Blog
              </a>
              <div className="flex items-center gap-4 ml-4">
                <button className="text-[#CCCCCC] hover:text-white transition-colors">
                  Sign In
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#00FFC2] text-black rounded-lg font-semibold hover:bg-[#00E5AE] transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-white/5"
            >
              <div className="px-6 py-4 space-y-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left text-[#CCCCCC] hover:text-white transition-colors py-2"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left text-[#CCCCCC] hover:text-white transition-colors py-2"
                >
                  Pricing
                </button>
                <a href="#" className="block text-[#CCCCCC] hover:text-white transition-colors py-2">
                  Docs
                </a>
                <a href="#" className="block text-[#CCCCCC] hover:text-white transition-colors py-2">
                  Blog
                </a>
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <button className="block w-full text-left text-[#CCCCCC] hover:text-white transition-colors py-2">
                    Sign In
                  </button>
                  <button className="w-full px-6 py-3 bg-[#00FFC2] text-black rounded-lg font-semibold hover:bg-[#00E5AE] transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
      </main>

      <Footer />
    </div>
  );
}
