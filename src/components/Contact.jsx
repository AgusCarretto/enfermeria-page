import React, { useState } from "react"; // Importamos el Hook
import { Phone, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    servicio: "",
    mensaje: "",
  });

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para generar el link de WhatsApp
  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const numeroTelefono = "598092881105"; // Reemplaza con el número de tu suegra (sin el +)
    const texto = `Hola, mi nombre es ${formData.nombre}. Estoy interesado en el servicio de: ${formData.servicio}. \nConsulta: ${formData.mensaje}`;

    // Codificamos el texto para que sea válido en una URL
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(
      texto
    )}`;

    // Abrimos en una pestaña nueva
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Info de contacto */}
          <div className="space-y-6">
            {" "}
            {/* Agregamos espacio entre elementos internos */}
            <h2 className="text-4xl font-bold">Contactanos</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Completá el formulario y nos comunicaremos con vos a la brevedad
              vía WhatsApp para coordinar una visita o brindarte un presupuesto.
            </p>
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700 w-fit">
                <div className="text-blue-400">
                  <Phone size={20} />
                </div>
                <span className="font-medium">+598 092 114 480</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700 w-fit">
                <div className="text-green-400">
                  <MessageCircle size={20} />
                </div>
                <span className="font-medium">Atención por WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-3xl p-8 text-slate-900">
            <form onSubmit={enviarWhatsApp} className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Servicio que necesita
                </label>
                <select
                  name="servicio"
                  required
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="Inyectables">Inyectables</option>
                  <option value="Curaciones">Curaciones</option>
                  <option value="Control de Signos">Control de Signos</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Mensaje o consulta
                </label>
                <textarea
                  name="mensaje"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
                  placeholder="Contanos brevemente qué necesitás..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Enviar a WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
