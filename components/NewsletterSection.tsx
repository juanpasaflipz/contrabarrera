import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-red-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
        <p className="mb-8">Recibe las últimas noticias y actualizaciones directamente en tu correo.</p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow px-4 py-2 rounded-l-full focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-red-800 px-6 py-2 rounded-r-full font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
