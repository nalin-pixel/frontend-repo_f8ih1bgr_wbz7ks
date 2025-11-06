import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-200 bg-white">
        © {new Date().getFullYear()} SonoCommerce • Precision ultrasound systems
      </footer>
    </div>
  );
}

export default App;
