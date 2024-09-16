import React from 'react';
import Image from 'next/image';

const NewsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Últimas Noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image src={`/news${i}.jpg`} alt={`Noticia ${i}`} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Título de la Noticia</h3>
                <p className="text-gray-600 mb-4">Breve resumen de la noticia...</p>
                <a href="#" className="text-red-800 font-medium hover:underline">Leer más</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
