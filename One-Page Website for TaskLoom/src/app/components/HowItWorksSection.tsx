import { motion } from "motion/react";
import { MousePointer, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Connect Your Tools",
    description: "Link your apps in seconds. One-click integration with 1000+ platforms.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Build Workflows",
    description: "Use templates or create custom automations. No code required.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Watch It Scale",
    description: "Your workflows run 24/7. Monitor, optimize, and scale effortlessly.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            How it works
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto">
            Get started in minutes with our simple 3-step process
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#00FFC2]/50 to-transparent -z-10"></div>
              )}

              {/* Card */}
              <div className="relative bg-[#1A1A1A] rounded-2xl p-8 border border-white/5">
                {/* Step number */}
                <div className="text-6xl font-bold text-[#00FFC2]/20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#00FFC2]/10 rounded-lg flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-[#00FFC2]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-[#CCCCCC] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
