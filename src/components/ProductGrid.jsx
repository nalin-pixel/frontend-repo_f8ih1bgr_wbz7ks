import { motion } from 'framer-motion';
import { BadgeCheck, Cpu, Gauge, Waves } from 'lucide-react';

const products = [
  {
    id: 'ultra-lite',
    name: 'UltraLite Portable',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop',
    tags: ['Portable', 'Point-of-care'],
    features: ['High-resolution imaging', '1.2 kg lightweight', 'Wi-Fi & DICOM support'],
  },
  {
    id: 'sono-pro',
    name: 'SonoPro Cart',
    price: 18990,
    image: 'https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=1400&auto=format&fit=crop',
    tags: ['Cart-based', 'General imaging'],
    features: ['4D Doppler', '23" medical display', 'Dual probe ports'],
  },
  {
    id: 'vascular-x',
    name: 'Vascular X',
    price: 13990,
    image: 'https://images.unsplash.com/photo-1649364703890-d47a5f2482f2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWYXNjdWxhciUyMFh8ZW58MHwwfHx8MTc2MjQxODc5M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Vascular', 'Cardio'],
    features: ['Pulse wave Doppler', 'AI measurements', 'Battery up to 8h'],
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Featured systems</h2>
            <p className="text-slate-600 mt-1">Curated ultrasound machines for every workflow.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wide bg-white/90 backdrop-blur px-2 py-1 rounded-full border border-slate-200 text-slate-700">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{p.name}</h3>
                <div className="text-sky-700 font-semibold mt-1">${'{'}p.price.toLocaleString(){'}'}</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-sky-600" />{f}</li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-3">
                  <button className="px-4 py-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors">Add to cart</button>
                  <button className="px-4 py-2 rounded-full border border-slate-300 hover:border-sky-600 hover:text-sky-700 transition-colors">View details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="benefits" className="mt-20 grid md:grid-cols-3 gap-6">
          <Feature icon={<Cpu className="w-5 h-5" />} title="AI-enhanced imaging" desc="Sharper scans and faster workflows with on-device analysis." />
          <Feature icon={<Waves className="w-5 h-5" />} title="Advanced Doppler" desc="Color, power, and pulse-wave Doppler across modalities." />
          <Feature icon={<Gauge className="w-5 h-5" />} title="Ready out-of-the-box" desc="Factory-calibrated systems delivered with training." />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="p-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/40"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-sky-100 text-sky-700">{icon}</div>
        <div>
          <div className="font-semibold text-slate-900">{title}</div>
          <div className="text-sm text-slate-600">{desc}</div>
        </div>
      </div>
    </motion.div>
  );
}
