import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative bg-white pt-16 pb-32 overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                Servicio de Salud Domiciliario
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4 leading-tight">
                Cuidado profesional en la{" "}
                <span className="text-blue-600">comodidad de tu hogar</span>
              </h1>
              <p className="text-gray-600 mt-6 text-lg max-w-lg">
                Atención personalizada de enfermería con calidez humana y
                excelencia técnica. Licenciada Cecilia Machado.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#servicios"
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Ver Servicios
                </a>
                <a
                  href="#contacto"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center justify-center"
                >
                  Contactar ahora
                </a>
              </div>
            
          </motion.div>

          {/* Espacio para la foto */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-2xl rotate-3 absolute inset-0"></div>
              {/* Aquí irá la foto de tu suegra cuando la tengas */}
              <div className="w-72 h-72 md:w-96 md:h-96 bg-slate-200 rounded-2xl relative z-10 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden text-gray-400">
                <span className="text-sm italic">Foto Profesional Aquí</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
