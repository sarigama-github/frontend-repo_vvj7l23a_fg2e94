import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const model = form.get("model");
    const service = form.get("service");
    const message = form.get("message");

    const text = `Hola, soy ${name}. Tel: ${phone}. Modelo: ${model}. Servicio: ${service}. Mensaje: ${message}`;
    const url = `https://wa.me/34600000000?text=${encodeURIComponent(text)}`;
    setStatus("Abriendo WhatsApp...");
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Reserva tu servicio</h2>
            <p className="mt-2 text-slate-300">Responde en menos de 1h por WhatsApp. Atención en Tarragona, Reus, Salou, Vila-seca y Cambrils.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Nombre" className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <input name="phone" required placeholder="Teléfono / WhatsApp" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <input name="model" placeholder="Modelo de coche" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <select name="service" className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Lavado Premium">Lavado Premium</option>
                <option value="Pulido y Corrección">Pulido y Corrección</option>
                <option value="Interior Profundo">Interior Profundo</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
              </select>
              <textarea name="message" rows="4" placeholder="Mensaje" className="col-span-1 sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <button type="submit" className="col-span-1 sm:col-span-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_20px_30px_-12px_rgba(59,130,246,0.9)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_26px_36px_-12px_rgba(59,130,246,1)] transition">Enviar por WhatsApp</button>
              {status && <div className="text-slate-300 text-sm">{status}</div>}
            </form>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              title="Mapa Tarragona"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191233.50441616267!2d0.91925725!3d41.119995299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a1502e22a0c47f%3A0x400fae021bf69e0!2sTarragona!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              height="380"
              className="w-full"
              loading="lazy"
            />
            <div className="p-6 bg-white/5 border-t border-white/10">
              <div className="grid sm:grid-cols-2 gap-4 text-slate-300 text-sm">
                <div>
                  <div className="text-white font-medium mb-1">Contacto</div>
                  <p>WhatsApp: +34 600 00 00 00</p>
                  <p>Teléfono: +34 977 000 000</p>
                  <p>Email: contacto@detailingtarragona.com</p>
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Horario</div>
                  <p>Lun–Vie: 9:00 – 19:00</p>
                  <p>Sáb: 10:00 – 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
