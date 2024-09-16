import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contrabarrera</h3>
            <p className="text-sm">Tu fuente de información taurina</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Inicio</a></li>
              <li><a href="#" className="hover:underline">Noticias</a></li>
              <li><a href="#" className="hover:underline">Toreros</a></li>
              <li><a href="#" className="hover:underline">Ganaderías</a></li>
              <li><a href="#" className="hover:underline">Plazas</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-sm mb-2">Email: info@contrabarrera.com</p>
            <p className="text-sm">Teléfono: +34 123 456 789</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Contrabarrera. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
