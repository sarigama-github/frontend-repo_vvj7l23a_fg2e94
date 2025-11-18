import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#inicio" className="inline-flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-[0_0_20px_rgba(59,130,246,0.6)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">Detailing Tarragona</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#servicios", label: "Servicios" },
              { href: "#galeria", label: "Galería" },
              { href: "#opiniones", label: "Opiniones" },
              { href: "#contacto", label: "Contacto" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contacto" className="hidden sm:inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_20px_-10px_rgba(59,130,246,0.9)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_14px_24px_-10px_rgba(59,130,246,1)] transition-shadow">
            Reservar Ahora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
