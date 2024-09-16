import React from 'react';
import { MenuIcon, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <MenuIcon className="h-6 w-6 md:hidden" />
          <h1 className="text-2xl font-bold tracking-tight">Contrabarrera</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline font-medium">Inicio</a>
          <a href="#" className="hover:underline font-medium">Noticias</a>
          <a href="#" className="hover:underline font-medium">Toreros</a>
          <a href="#" className="hover:underline font-medium">Ganaderías</a>
          <a href="#" className="hover:underline font-medium">Plazas</a>
        </nav>
        <Search className="h-6 w-6" />
      </div>
    </header>
  );
};

export default Header;
