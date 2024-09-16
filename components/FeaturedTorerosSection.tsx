import React from 'react';
import Image from 'next/image';

const FeaturedTorerosSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Toreros Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-stone-100 rounded-lg overflow-hidden shadow-md">
              <Image src={`/torero${i}.jpg`} alt={`Torero ${i}`} width={400} height={300} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Nombre del Torero</h3>
                <p className="text-gray-600">Breve descripción del torero y sus logros.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTorerosSection;
