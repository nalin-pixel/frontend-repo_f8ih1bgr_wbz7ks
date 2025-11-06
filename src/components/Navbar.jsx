import { ShoppingCart, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Sparkles className="w-6 h-6 text-sky-600" />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">SonoCommerce</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#products" className="hover:text-sky-700 transition-colors">Products</a>
            <a href="#benefits" className="hover:text-sky-700 transition-colors">Benefits</a>
            <a href="#contact" className="hover:text-sky-700 transition-colors">Contact</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 text-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
            aria-label="View cart"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
          </motion.button>
        </div>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-6 py-2 text-xs text-slate-600 bg-gradient-to-r from-sky-50 via-blue-50 to-sky-50 border-t border-slate-200/60">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-sky-600" />
          <span>2-year warranty</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Premium support</span>
        </div>
      </div>
    </div>
  );
}
