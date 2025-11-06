import { motion } from 'framer-motion';
import { Headphones, LifeBuoy } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900"
        >
          Speak with a clinical specialist
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-slate-600 max-w-2xl mx-auto"
        >
          Get tailored recommendations for your practice, quotes, and demo scheduling.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <motion.a
            href="mailto:sales@sonocommerce.example"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-5 py-3 rounded-full shadow-sm hover:shadow-md"
          >
            <Headphones className="w-4 h-4" /> Talk to sales
          </motion.a>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-700 bg-white">
            <LifeBuoy className="w-4 h-4 text-sky-600" /> Customer support
          </a>
        </div>
      </div>
    </section>
  );
}
