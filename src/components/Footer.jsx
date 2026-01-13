import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-8"> {/* Reducimos padding global */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Nombre más pequeño */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🩺</span>
            <span className="font-bold text-slate-900">Lic. Cecilia Machado</span>
          </div>

          {/* Enlaces y Copyright en la misma línea en PC */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-500">
            <div className="flex gap-4">
              <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
            </div>
            <p className="hidden md:block">|</p>
            <p>© {currentYear} Todos los derechos reservados.</p>
          </div>

          {/* Tu crédito más discreto */}
          <p className="text-xs text-gray-400">
            Desarrollado por <span className="font-semibold text-slate-500 underline">Agustin Carretto</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;