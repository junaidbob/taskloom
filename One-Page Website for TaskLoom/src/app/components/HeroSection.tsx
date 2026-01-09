import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#00FFC2]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-[#00FFC2]/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight tracking-tight">
            Weave Your Tasks.
            <br />
            Save Hours.
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-[#CCCCCC] mb-12 max-w-3xl mx-auto leading-relaxed">
            TaskLoom automates repetitive workflows so you focus on what matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('pricing')}
              className="group px-8 py-4 bg-[#00FFC2] text-black rounded-lg font-semibold text-lg hover:bg-[#00E5AE] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#00FFC2]/20"
            >
              Try Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('pricing')}
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/5 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-[#CCCCCC] text-sm"
        >
          Trusted by 10,000+ professionals worldwide
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
