import { motion } from "motion/react";

const testimonials = [
  {
    quote: "TaskLoom saved me 15 hours every week. I finally have time to focus on strategy instead of drowning in repetitive tasks.",
    author: "Sarah Chen",
    role: "Founder & CEO, GrowthLabs",
    image: "https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
  },
  {
    quote: "The automation workflows are incredibly intuitive. We deployed company-wide in under a week. Game-changing for our operations.",
    author: "Marcus Rodriguez",
    role: "VP of Operations, TechFlow Inc",
    image: "https://images.unsplash.com/photo-1589458223095-03eee50f0054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400&fit=crop",
  },
  {
    quote: "I was skeptical about automation tools, but TaskLoom proved me wrong. The ROI was visible within the first month.",
    author: "Emily Johnson",
    role: "Product Manager, Innovate Labs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
];

export function TestimonialsSection() {
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
            Trusted by professionals
          </h2>
          <p className="text-xl text-[#CCCCCC] max-w-2xl mx-auto">
            See what our users have to say about TaskLoom
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 hover:border-[#00FFC2]/30 transition-all duration-300">
                {/* Quote */}
                <p className="text-[#CCCCCC] mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[#CCCCCC]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
