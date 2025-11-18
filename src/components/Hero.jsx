import React from "react";

const Sparkle = ({ className = "", delay = 0, size = 18, color = "#E5F0FF", style = {} }) => {
  const mergedStyle = { animationDelay: `${delay}ms`, ...style };
  return (
    <svg
      className={`absolute opacity-90 [filter:drop-shadow(0_0_8px_rgba(59,130,246,0.6))] animate-[twinkle_2.8s_ease-in-out_infinite] ${className}`}
      style={mergedStyle}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
   >
      <path d="M12 0l2.1 5.3L19 7.1l-4.2 3.6.9 5.8-4.7-2.8-4.7 2.8.9-5.8L5 7.1l4.9-1.8L12 0z" fill={color} />
    </svg>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center py-28 overflow-hidden">
      {/* Background video with glossy overlays */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf6?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/856201/856201-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Dark + brand gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.28),transparent_35%)]" />
        {/* Subtle reflective sweep on top edge */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
      </div>

      {/* Content card */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <p className="inline-flex items-center text-xs uppercase tracking-wider text-blue-200/80 bg-blue-500/10 border border-blue-400/20 rounded-full px-3 py-1 mb-4">
            Premium Detailing • Tarragona
          </p>
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Car Detailing Profesional en Tarragona
            {/* Sparkles around the title */}
            <Sparkle className="-top-3 -left-4" size={14} delay={0} />
            <Sparkle className="-top-5 right-6" size={18} delay={600} />
            <Sparkle className="bottom-1 -right-3" size={12} delay={1200} />
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200">
            Brillo, protección y perfección — cuidamos tu coche como si fuera nuestro.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_20px_30px_-12px_rgba(59,130,246,0.9)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_26px_36px_-12px_rgba(59,130,246,1)] transition-all overflow-hidden"
            >
              <span className="relative z-10">Reservar Ahora</span>
              {/* Shine sweep */}
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] opacity-0 group-hover:opacity-100 [animation:shineSweep_1.2s_ease-in-out]" />
              {/* Extra sparkles */}
              <Sparkle className="-top-2 -right-2" size={12} delay={300} />
              <Sparkle className="-bottom-2 left-3" size={10} delay={900} />
            </a>
            <a
              href="#servicios"
              className="group relative inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-6 py-3 font-semibold border border-white/15 transition overflow-hidden"
            >
              <span className="relative z-10">Ver Servicios</span>
              <span className="pointer-events-none absolute -inset-1 bg-[radial-gradient(circle_at_30%_-20%,rgba(255,255,255,0.28),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <Sparkle className="-top-1 -right-1" size={10} delay={500} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-300/80 text-sm">
            <div className="relative inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
              <span>Resultados Garantizados</span>
              <Sparkle className="-top-3 left-6" size={10} delay={200} />
            </div>
            <div className="relative inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
              <span>Ceramic Pro Certified</span>
              <Sparkle className="-top-2 right-0" size={10} delay={800} />
            </div>
            <div className="relative inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
              <span>Clientes 5 Estrellas</span>
              <Sparkle className="-top-3 left-3" size={10} delay={1200} />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/34600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="WhatsApp"
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition" />
          <div className="relative w-14 h-14 rounded-full bg-green-500 shadow-[0_10px_25px_-10px_rgba(34,197,94,1)] flex items-center justify-center overflow-hidden">
            {/* subtle shine */}
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] [animation:shineSweep_2.2s_ease-in-out_infinite]" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white relative z-10">
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.54 4.1 1.56 5.9L0 24l6.3-1.62A11.92 11.92 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.9 0-3.73-.5-5.34-1.44l-.38-.22-3.74.96 1-3.64-.25-.38A9.95 9.95 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.69-6.85c-.31-.16-1.84-.91-2.13-1.02-.29-.11-.5-.16-.72.16-.21.31-.83 1.02-1.02 1.23-.19.21-.38.23-.69.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.38.47-.57.16-.19.21-.33.31-.54.1-.21.05-.4-.02-.56-.08-.16-.72-1.73-.98-2.38-.26-.62-.53-.54-.72-.55l-.62-.01c-.21 0-.56.08-.85.4-.29.31-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.27 3.46 5.5 4.86.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37z"/>
            </svg>
            {/* sparkle */}
            <Sparkle className="-top-1 -right-1" size={10} delay={400} />
          </div>
        </div>
      </a>

      {/* Keyframes for twinkles and shine sweep */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { transform: scale(0.6) rotate(0deg); opacity: 0; }
          15% { opacity: 1; }
          50% { transform: scale(1) rotate(35deg); opacity: 0.9; }
          85% { opacity: 0; }
        }
        @keyframes shineSweep {
          0% { transform: translateX(-120%) skewX(-12deg); }
          100% { transform: translateX(220%) skewX(-12deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
