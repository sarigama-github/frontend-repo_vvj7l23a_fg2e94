import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700" />
            <div className="text-sm text-slate-300">© 2025 Detailing Tarragona. Todos los derechos reservados.</div>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Política de Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
