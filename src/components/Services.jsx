import React from "react";

const services = [
  {
    title: "Lavado Premium",
    desc: "Lavado exterior a mano con técnica de dos cubos, cera rápida y detalles finales.",
    price: "Desde €29",
    img: "https://images.unsplash.com/photo-1571607382887-0e94f05b1f37?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Pulido y Corrección de Pintura",
    desc: "Eliminación de swirls y microarañazos para devolver el brillo profundo.",
    price: "Desde €149",
    img: "https://images.unsplash.com/photo-1565043589221-1e28a2b04805?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Detallado Interior Profundo",
    desc: "Aspirado completo, limpieza de tapicería, plásticos y acondicionamiento.",
    price: "Desde €89",
    img: "https://images.unsplash.com/photo-1549921296-3cc26d9a67af?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Ceramic Coating (1–5 años)",
    desc: "Protección cerámica con hidrofobicidad extrema y brillo espejo.",
    price: "Desde €399",
    img: "https://images.unsplash.com/photo-1631204131162-756bdea6c94c?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Limpieza de Tapicería",
    desc: "Elimina manchas y olores de telas y cuero con equipos profesionales.",
    price: "Desde €69",
    img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Desinfección con Ozono",
    desc: "Tratamiento de choque para eliminar bacterias y malos olores.",
    price: "Desde €39",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1974&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="relative py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            Soluciones profesionales para mantener tu coche impecable por dentro y por fuera.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all">
              <div className="h-44 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                  <span className="text-blue-300 text-sm">{s.price}</span>
                </div>
                <p className="text-slate-300 text-sm mb-4">{s.desc}</p>
                <a href="#contacto" className="inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200">Más información →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
