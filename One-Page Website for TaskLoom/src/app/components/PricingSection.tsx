import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "Free forever",
    description: "Perfect for trying out TaskLoom",
    features: [
      "5 automated workflows",
      "Basic integrations",
      "Email support",
      "Community access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "29",
    period: "per month",
    description: "For professionals and teams",
    features: [
      "Unlimited workflows",
      "All integrations",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "API access",
    ],
    cta: "Try Free",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Let's talk",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom SLA",
      "Advanced security",
      "Custom integrations",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-[#0D0D0D] border-t border-white/5">
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
            Simple pricing
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 bg-[#00FFC2] rounded-full text-black text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`
                h-full rounded-2xl p-8 transition-all duration-300
                ${plan.highlighted 
                  ? 'bg-[#1A1A1A] border-2 border-[#00FFC2]' 
                  : 'bg-[#1A1A1A] border border-white/5 hover:border-white/10'
                }
              `}>
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#CCCCCC]">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  {plan.price === "Custom" ? (
                    <div className="text-4xl font-bold text-white mb-1">
                      Custom
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl font-bold text-white">
                        ${plan.price}
                      </span>
                    </div>
                  )}
                  <span className="text-[#CCCCCC] text-sm">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00FFC2]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#00FFC2]" />
                      </div>
                      <span className="text-[#CCCCCC]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2
                    ${plan.highlighted 
                      ? 'bg-[#00FFC2] text-black hover:bg-[#00E5AE] shadow-lg shadow-[#00FFC2]/20' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }
                  `}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-[#CCCCCC]"
        >
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
}
