import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/e6sh9x7VdX8WgR1w/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/80 via-white/60 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-slate-200 text-slate-700 text-xs mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-sky-600" />
          Trusted ultrasound equipment for clinics & hospitals
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
        >
          Precision Ultrasound Systems
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">designed for modern care</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 text-slate-600 max-w-2xl mx-auto"
        >
          Shop portable and cart-based ultrasound machines with advanced imaging, intuitive workflows, and industry-leading warranties.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <motion.a
            href="#products"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-5 py-3 rounded-full shadow-sm hover:shadow-md"
          >
            Explore products
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-700 bg-white/70 backdrop-blur">
            <Truck className="w-4 h-4 text-sky-600" />Fast delivery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
