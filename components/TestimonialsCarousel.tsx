'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, MapPin } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marc Garriga',
    location: 'Eixample, Barcelona',
    service: 'Avería Urgente 24h',
    rating: 5,
    date: 'Hace 3 días',
    comment: 'Se nos fue la luz un domingo por la noche por un cortocircuito en la cocina. Llamé al 657 144 186 y en 40 minutos estaba el técnico en casa. Localizó la avería rápido y nos dejó todo funcionando. Impecable servicio de urgencia.',
    verified: true
  },
  {
    id: 2,
    name: 'Sonia Rigau',
    location: 'Badalona (Gorg)',
    service: 'Cambio de Cuadro Eléctrico',
    rating: 5,
    date: 'Hace 1 semana',
    comment: 'Teníamos un cuadro muy antiguo con fusibles de plomo y saltaba continuamente. Nos presupuesto el cambio a normativa REBT sin sorpresas. Todo muy limpio, rápido y con certificado. Muy recomendables.',
    verified: true
  },
  {
    id: 3,
    name: 'Joan Padró (Administrador)',
    location: 'Sarrià - Sant Gervasi',
    service: 'Comunidades de Vecinos',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'Gestiono varias fincas en Barcelona y llevamos más de un año contando con su red de instaladores para mantenimientos y videoporteros. La rapidez de respuesta ante incidencias comunitarias es insuperable.',
    verified: true
  },
  {
    id: 4,
    name: 'Carla & David',
    location: 'Terrassa (Centre)',
    service: 'Reforma de Instalación Eléctrica',
    rating: 5,
    date: 'Hace 3 semanas',
    comment: 'Reformamos nuestro piso entero y necesitábamos cableado nuevo, puntos de luz y enchufe para la cocina. Nos asesoraron en todo momento y cumplieron el plazo acordado. Profesionales autorizados de 10.',
    verified: true
  },
  {
    id: 5,
    name: 'Albert Font',
    location: 'L\'Hospitalet (Bellvitge)',
    service: 'Boletín Eléctrico (CIE)',
    rating: 5,
    date: 'Hace 1 mes',
    comment: 'Necesitaba urgente el Certificado de Instalación Eléctrica para dar de alta la luz con la distribuidora. Revisaron la instalación, hicieron las mediciones y en 24h tenía el boletín firmado en mi correo.',
    verified: true
  },
  {
    id: 6,
    name: 'Marta Soler',
    location: 'Gràcia, Barcelona',
    service: 'Instalación de Enchufes e Iluminación',
    rating: 5,
    date: 'Hace 1 mes',
    comment: 'Rápidos, puntuales y con precios transparentes. Cambiaron los mecanismos de toda la casa e instalaron varias líneas adicionales para electrodomésticos. Da gusto encontrar profesionales así.',
    verified: true
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-slate-900 text-white overflow-hidden relative" id="opiniones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Valoración 4.9/5 basada en +180 clientes reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Opiniones de nuestros clientes en Barcelona
          </h2>
          <p className="text-slate-300 text-lg">
            La confianza de nuestros clientes en Barcelona y área metropolitana es nuestra mejor garantía. Descubre lo que opinan sobre la rapidez y calidad de nuestro equipo.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Controls */}
          <div className="flex justify-between items-center absolute -top-16 right-0 gap-2 hidden sm:flex">
            <button
              onClick={prevSlide}
              aria-label="Opinión anterior"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente opinión"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full hover:border-amber-500/40 transition-all shadow-xl">
                    <div>
                      {/* Rating & Quote Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-slate-600/50" />
                      </div>

                      {/* Comment */}
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                        "{item.comment}"
                      </p>
                    </div>

                    {/* Customer Info */}
                    <div className="pt-4 border-t border-slate-700/60">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-white text-base">
                          {item.name}
                        </h3>
                        {item.verified && (
                          <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Verificado
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          {item.location}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-amber-300 font-medium">
                          {item.service}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex justify-center items-center gap-4 mt-8 sm:hidden">
            <button
              onClick={prevSlide}
              aria-label="Opinión anterior"
              className="p-3 rounded-full bg-slate-800 text-white border border-slate-700 active:bg-slate-700"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-slate-400 font-medium">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Siguiente opinión"
              className="p-3 rounded-full bg-slate-800 text-white border border-slate-700 active:bg-slate-700"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Aggregate Badge Footer */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Garantía de satisfacción por escrito en todos los trabajos</span>
          </div>
          <div className="flex items-center gap-3">
            <span>¿Has trabajado con nosotros?</span>
            <a
              href="tel:+34657144186"
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
            >
              Contactar con el equipo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
