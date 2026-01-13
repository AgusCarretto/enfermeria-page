import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <span className="text-2xl">🩺</span> Cecilia Machado
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
        <a href="#inicio" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Inicio</a>
          <a href="#servicios" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Servicios</a>
          <a href="#sobre-mi" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Sobre Mí</a>
          <a href="#contacto" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all font-semibold">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;