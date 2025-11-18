import React from "react";

const points = [
  "Profesionales Certificados",
  "Productos y Técnicas de Alta Gama",
  "Servicio a Domicilio en Tarragona",
  "Resultados Garantizados",
  "Clientes 5 Estrellas",
];

const WhyUs = () => {
  return (
    <section className="relative py-24 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl">
              Nos enfocamos en la excelencia, utilizando productos certificados como Ceramic Pro y Meguiar’s, con procesos meticulosos y atención al detalle.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-slate-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-6 inline-flex items-center gap-3 text-slate-300 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Ceramic Pro Certified</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Meguiar’s Detailer</span>
            </div>
          </div>

          {/* Before/after simple slider mock */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="grid grid-cols-2">
              <img src="https://images.unsplash.com/photo-1729603071346-414faa13f102?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbnRlc3xlbnwwfDB8fHwxNzYzNDYxNjU3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Antes" className="h-72 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1887&auto=format&fit=crop" alt="Después" className="h-72 w-full object-cover" />
            </div>
            <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Antes</div>
            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Después</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
