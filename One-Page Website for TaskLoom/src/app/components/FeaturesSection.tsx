import { motion } from "motion/react";
import { Bot, TrendingUp, Mail, Calendar } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Auto-posting Content",
    description: "Schedule and publish content across all platforms. Set it once, forget it forever.",
  },
  {
    icon: TrendingUp,
    title: "Competitor Tracking",
    description: "Real-time monitoring of your competition. Stay ahead with AI-powered insights.",
  },
  {
    icon: Mail,
    title: "Email Summarization",
    description: "AI digests your inbox into actionable insights. Never miss what matters.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Intelligent task scheduling that adapts to your workflow and priorities.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-[#0D0D0D] relative">
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
            Everything you need
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto">
            Powerful automation features designed for modern teams
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 hover:border-[#00FFC2]/30 transition-all duration-300 hover:bg-[#1F1F1F]">
                {/* Icon */}
                <div className="w-14 h-14 bg-[#00FFC2]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00FFC2]/20 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#00FFC2]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-[#CCCCCC] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
