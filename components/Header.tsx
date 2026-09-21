'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Zap, Clock, ShieldCheck, Menu, X, ChevronDown, MessageCircle, MapPin, Building2, Store, Factory, Car, Video, Wrench, FileText } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviciosDropdown, setServiciosDropdown] = useState(false);
  const [zonasDropdown, setZonasDropdown] = useState(false);

  const servicios = [
    { href: '/instalaciones-electricas-barcelona/', label: 'Instalaciones Eléctricas', icon: Zap },
    { href: '/cambio-de-cuadro-electrico/', label: 'Cambio de Cuadro Eléctrico', icon: ShieldCheck },
    { href: '/boletin-electrico-barcelona/', label: 'Boletín Eléctrico (CIE)', icon: FileText },
    { href: '/reforma-instalacion-electrica/', label: 'Reforma de Instalación', icon: Wrench },
    { href: '/electricista-comunidades-de-vecinos/', label: 'Comunidades de Vecinos', icon: Building2 },
    { href: '/electricista-locales-y-oficinas/', label: 'Locales y Oficinas', icon: Store },
    { href: '/electricista-industrial-barcelona/', label: 'Electricistas Industriales', icon: Factory },
    { href: '/punto-de-recarga-coche-electrico/', label: 'Cargadores Coche Eléctrico', icon: Car },
    { href: '/videoporteros-barcelona/', label: 'Videoporteros e Interfonía', icon: Video },
    { href: '/enchufes-e-interruptores/', label: 'Enchufes e Iluminación', icon: Zap },
    { href: '/mantenimiento-electrico/', label: 'Mantenimiento Eléctrico', icon: Clock },
    { href: '/domotica-barcelona/', label: 'Domótica del Hogar', icon: Zap },
  ];

  const zonas = [
    { href: '/electricista-badalona/', label: 'Electricista en Badalona' },
    { href: '/electricista-hospitalet/', label: 'Electricista en L’Hospitalet' },
    { href: '/electricista-terrassa/', label: 'Electricista en Terrassa' },
    { href: '/electricista-sabadell/', label: 'Electricista en Sabadell' },
    { href: '/electricista-sant-cugat/', label: 'Electricista en Sant Cugat' },
    { href: '/electricista-castelldefels/', label: 'Electricista en Castelldefels' },
    { href: '/electricista-cornella/', label: 'Electricista en Cornellà' },
    { href: '/electricista-mataro/', label: 'Electricista en Mataró' },
    { href: '/electricista-granollers/', label: 'Electricista en Granollers' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      {/* Top Announcement Bar (Oculto en móvil para ganar espacio vertical) */}
      <div className="hidden sm:flex bg-amber-500 text-slate-950 px-4 py-1.5 text-xs font-bold justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>Electricistas Autorizados 24h · Barcelona y Área Metropolitana</span>
        </div>
        <div className="flex items-center gap-2 text-slate-900">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>Presupuesto Cerrado Previo · Sin Compromiso</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-amber-500 p-2 rounded-lg text-slate-950 group-hover:bg-amber-400 transition-colors">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white block leading-none">
              ELECTRICISTAS<span className="text-amber-400">BARCELONA</span>
            </span>
            <span className="text-[11px] text-slate-300 uppercase tracking-wider block font-bold mt-0.5">
              Instalaciones & Urgencias 24h
            </span>
          </div>
        </Link>

        {/* Desktop Call CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block font-semibold">Atención Rápida</span>
            <a
              href="tel:+34657144186"
              onClick={trackPhoneClick}
              className="text-xl font-black text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 justify-end"
            >
              <Phone className="w-5 h-5 fill-current" />
              657 144 186
            </a>
          </div>
          <a
            href="tel:+34657144186"
            onClick={trackPhoneClick}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2.5 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2 text-sm uppercase tracking-wide"
          >
            <Phone className="w-4 h-4 fill-current" />
            Llamar Ahora
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Navigation Bar with Dropdowns */}
      <nav className="border-t border-slate-800 bg-slate-950/90 backdrop-blur-md hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 text-sm font-semibold text-slate-200">
          <Link href="/" className="px-3 py-2.5 hover:text-amber-400 transition-colors">
            Inicio
          </Link>

          {/* Servicios Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiciosDropdown(true)}
            onMouseLeave={() => setServiciosDropdown(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2.5 hover:text-amber-400 transition-colors focus:outline-none">
              Servicios <ChevronDown className="w-4 h-4" />
            </button>

            {serviciosDropdown && (
              <div className="absolute top-full left-0 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 grid grid-cols-1 gap-0.5 z-50 animate-fade-in">
                {servicios.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{s.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Zonas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setZonasDropdown(true)}
            onMouseLeave={() => setZonasDropdown(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2.5 hover:text-amber-400 transition-colors focus:outline-none">
              <MapPin className="w-4 h-4 text-amber-400" /> Zonas <ChevronDown className="w-4 h-4" />
            </button>

            {zonasDropdown && (
              <div className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 grid grid-cols-1 gap-0.5 z-50 animate-fade-in">
                <Link href="/" className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-amber-400 hover:bg-slate-800">
                  <MapPin className="w-3.5 h-3.5" /> Barcelona Ciudad
                </Link>
                <div className="border-t border-slate-800 my-1"></div>
                {zonas.map((z) => (
                  <Link
                    key={z.href}
                    href={z.href}
                    className="flex items-center gap-2 px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                  >
                    <span>{z.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/boletin-electrico-barcelona/" className="px-3 py-2.5 hover:text-amber-400 transition-colors">
            Boletín Eléctrico
          </Link>
          <Link href="/cambio-de-cuadro-electrico/" className="px-3 py-2.5 hover:text-amber-400 transition-colors">
            Cuadros Eléctricos
          </Link>
          <Link href="/electricista-comunidades-de-vecinos/" className="px-3 py-2.5 hover:text-amber-400 transition-colors">
            Comunidades
          </Link>
          <Link href="/blog/" className="px-3 py-2.5 hover:text-amber-400 transition-colors">
            Blog
          </Link>
          <Link href="/contacto/" className="px-3 py-2.5 hover:text-amber-400 transition-colors ml-auto text-amber-400 font-bold">
            Contacto
          </Link>
        </div>
      </nav>

      {/* Mobile Slide-down Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Quick Call Box Mobile */}
          <div className="bg-amber-500 text-slate-950 p-3.5 rounded-xl space-y-2">
            <span className="text-xs font-black uppercase tracking-wider block">Atención Telefónica Directa</span>
            <div className="flex gap-2">
              <a
                href="tel:+34657144186"
                onClick={trackPhoneClick}
                className="flex-1 bg-slate-950 text-amber-400 font-black text-center py-2.5 rounded-lg text-sm flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 fill-current" />
                657 144 186
              </a>
              <a
                href="https://wa.me/34657144186?text=Hola,%20necesito%20un%20electricista%20en%20Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="bg-emerald-700 text-white font-bold px-3 py-2.5 rounded-lg text-xs flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-1 text-sm font-semibold text-slate-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              Inicio
            </Link>

            {/* Mobile Servicios Accordion */}
            <div className="border-t border-slate-800 pt-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 block mb-1">
                Servicios Eléctricos
              </span>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {servicios.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-300 hover:text-amber-400"
                  >
                    • {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Zonas Accordion */}
            <div className="border-t border-slate-800 pt-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 block mb-1">
                Zonas de Cobertura
              </span>
              <div className="grid grid-cols-2 gap-1 pl-2">
                {zonas.map((z) => (
                  <Link
                    key={z.href}
                    href={z.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-xs text-slate-300 hover:text-amber-400"
                  >
                    • {z.label.replace('Electricista en ', '')}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-2 space-y-1">
              <Link
                href="/blog/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400 text-amber-400"
              >
                Blog y Guías
              </Link>
              <Link
                href="/contacto/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold text-center"
              >
                Formulario de Contacto
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
