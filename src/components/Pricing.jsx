import React from "react";

const tiers = [
  {
    name: "Básico",
    price: "Desde €49",
    features: [
      "Lavado exterior a mano",
      "Aspirado interior",
      "Limpieza de cristales",
    ],
  },
  {
    name: "Premium",
    price: "Desde €159",
    features: [
      "Pulido ligero",
      "Interior profundo",
      "Sellado sintético",
    ],
    highlight: true,
  },
  {
    name: "Ceramic Ultra",
    price: "Desde €499",
    features: [
      "Coating cerámico",
      "Protección completa",
      "Mantenimiento básico",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Paquetes</h2>
          <p className="mt-2 text-slate-300">Elige el nivel de detalle que mejor se adapta a tu coche</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border p-6 shadow-xl bg-white/5 ${t.highlight ? 'border-blue-400/30 bg-gradient-to-b from-blue-500/10 to-white/5' : 'border-white/10'}`}>
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-blue-600 text-white border border-white/20 shadow">Más Popular</span>
              )}
              <h3 className="text-white font-semibold text-xl mb-2">{t.name}</h3>
              <div className="text-blue-300 font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 font-semibold hover:opacity-95 transition">Reservar</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
