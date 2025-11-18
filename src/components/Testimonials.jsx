import React from "react";

const testimonials = [
  {
    name: "Carlos G.",
    car: "BMW Serie 3",
    rating: 5,
    text: "Servicio excelente, el coche quedó como nuevo. 100% recomendados!",
  },
  {
    name: "María L.",
    car: "Audi A3",
    rating: 5,
    text: "El pulido eliminó todos los swirls. Brillo espectacular.",
  },
  {
    name: "Jordi P.",
    car: "Seat León",
    rating: 5,
    text: "Puntuales y muy profesionales. La protección cerámica es otro nivel.",
  },
];

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.404 8.181L12 18.896l-7.338 3.881 1.404-8.181L.132 9.21l8.2-1.192L12 .587z"/>
  </svg>
);

const Testimonials = () => {
  return (
    <section id="opiniones" className="relative py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Opiniones</h2>
            <p className="mt-2 text-slate-300">Lo que dicen nuestros clientes en Google</p>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-blue-200 text-sm font-semibold">Ver todas en Google →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-600" />
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.car}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-slate-300 text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
