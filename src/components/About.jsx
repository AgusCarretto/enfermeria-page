import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Trayectoria Profesional
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Con más de 15 años en el sistema de salud, mi enfoque combina la
            excelencia técnica de la licenciatura con un trato humano y cercano.
            Entiendo que cada paciente es único y merece un cuidado respetuoso
            en su hogar.
          </p>
        </div>

        {/* Grid de pilares o méritos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          
            <div className="p-8 bg-blue-50 rounded-3xl text-center hover:bg-blue-100 transition-colors">
              <GraduationCap className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Formación</h3>
              <p className="text-sm text-gray-600">
                Licenciada en Enfermería con título habilitado.
              </p>
            </div>

            <div className="p-8 bg-blue-50 rounded-3xl text-center hover:bg-blue-100 transition-colors">
              <Heart className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Vocación</h3>
              <p className="text-sm text-gray-600">
                Pasión por el cuidado y bienestar del paciente.
              </p>
            </div>

            <div className="p-8 bg-blue-50 rounded-3xl text-center hover:bg-blue-100 transition-colors">
              <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Seguridad</h3>
              <p className="text-sm text-gray-600">
                Protocolos estrictos de higiene y bioseguridad.
              </p>
            </div>

            <div className="p-8 bg-blue-50 rounded-3xl text-center hover:bg-blue-100 transition-colors">
              <Award className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Experiencia</h3>
              <p className="text-sm text-gray-600">
                Años de servicio en instituciones de salud críticas.
              </p>
            </div>
         
        </motion.div>
      </div>
    </section>
  );
};

export default About;
