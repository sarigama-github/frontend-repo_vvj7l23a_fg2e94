import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534337644001-68e89a93e1f0?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549921296-3cc26d9a67af?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1887&auto=format&fit=crop",
];

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="galeria" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Galería</h2>
          <p className="mt-2 text-slate-300">Antes y después de nuestros trabajos en Tarragona.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="grid gap-4">
          {images.map((src, i) => (
            <button key={i} onClick={() => setActive(src)} className="group block w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={src} alt="Detalle" className="w-full object-cover group-hover:scale-[1.02] transition-transform" />
            </button>
          ))}
        </div></div>
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setActive(null)}>
          <img src={active} alt="Detalle" className="max-h-[80vh] w-auto rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
