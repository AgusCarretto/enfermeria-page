import React from "react";
import { motion } from "framer-motion";

import {
  Syringe,
  Activity,
  HeartPulse,
  ClipboardCheck,
  Home,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Inyectables",
    description:
      "Aplicación de medicación intramuscular y subcutánea con orden médica.",
    icon: <Syringe className="w-8 h-8 text-blue-600 group-hover:text-white" />,
  },
  {
    title: "Curaciones",
    description:
      "Tratamiento de heridas, escaras y retiro de puntos con máxima higiene.",
    icon: <Activity className="w-8 h-8 text-blue-600 group-hover:text-white" />,
  },
  {
    title: "Control de Signos Vitales",
    description:
      "Monitoreo de presión arterial, glucemia, oximetría y temperatura.",
    icon: (
      <HeartPulse className="w-8 h-8 text-blue-600 group-hover:text-white" />
    ),
  },
  {
    title: "Cuidados Post-Operatorios",
    description:
      "Acompañamiento y asistencia profesional luego de intervenciones quirúrgicas.",
    icon: (
      <ClipboardCheck className="w-8 h-8 text-blue-600 group-hover:text-white" />
    ),
  },
  {
    title: "Atención Domiciliaria",
    description:
      "Asistencia integral para pacientes con movilidad reducida o adultos mayores.",
    icon: <Home className="w-8 h-8 text-blue-600 group-hover:text-white" />,
  },
  {
    title: "Capacitación a Familiares",
    description:
      "Enseñanza de técnicas básicas de cuidado para el entorno del paciente.",
    icon: <Users className="w-8 h-8 text-blue-600 group-hover:text-white" />,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Servicios Profesionales
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de cuidados de enfermería realizados por
            profesionales licenciados, garantizando seguridad y calidez en cada
            visita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Empieza invisible y abajo
              whileInView={{ opacity: 1, y: 0 }} // Se activa al hacer scroll
              viewport={{ once: true }} // Solo se anima la primera vez
              transition={{ duration: 1, delay: index * 0.1 }} // Efecto cascada
              className="bg-white p-8 rounded-2xl shadow-sm border ..."
            >
              
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
