'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MenuIcon, Search, Facebook, Twitter, Instagram } from "lucide-react"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-100 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
      
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

      <main className="flex-grow">
        <section className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center py-20">
          <div className="container mx-auto px-4">
            <div className="bg-black bg-opacity-50 text-white p-8 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 leading-tight">El arte de la tauromaquia: Tradición y pasión</h2>
              <p className="mb-6 text-lg">Descubre las últimas noticias y análisis del mundo taurino en México y España.</p>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-6 py-3">Leer más</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Últimas Noticias</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <img src={`/placeholder.svg?height=200&width=400`} alt={`Noticia ${i}`} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-xl">Título de la noticia {i}</CardTitle>
                    <CardDescription>Fecha de publicación</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Breve resumen de la noticia. Haga clic para leer más sobre este evento taurino.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Toreros Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <img src={`/placeholder.svg?height=150&width=150`} alt={`Torero ${i}`} className="rounded-full mx-auto mb-4 shadow-lg" />
                  <h3 className="font-bold text-lg mb-1">Nombre del Torero {i}</h3>
                  <p className="text-sm text-gray-600">Breve descripción</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-red-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
            <p className="mb-8 text-lg">Recibe las últimas noticias y actualizaciones del mundo taurino.</p>
            <form className="flex max-w-md mx-auto">
              <Input type="email" placeholder="Tu correo electrónico" className="flex-grow" />
              <Button type="submit" className="ml-2 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">Suscribirse</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contrabarrera</h3>
              <p className="text-sm">Tu portal de noticias taurinas en México y España.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Sobre nosotros</a></li>
                <li><a href="#" className="hover:underline">Contacto</a></li>
                <li><a href="#" className="hover:underline">Política de privacidad</a></li>
                <li><a href="#" className="hover:underline">Términos de uso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Síguenos</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6" />
                <Twitter className="h-6 w-6" />
                <Instagram className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="mt-10 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Contrabarrera. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}