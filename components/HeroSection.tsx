import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)] bg-red-800">
      <Image src="/hero-image.jpg" alt="Torero en acción" layout="fill" objectFit="cover" className="opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a Contrabarrera</h2>
          <p className="text-xl md:text-2xl mb-8">Tu portal taurino de confianza</p>
          <button className="bg-white text-red-800 px-6 py-3 rounded-full font-semibold hover:bg-red-100 transition duration-300">
            Explorar Noticias
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
