"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCucinaOpen, setIsCucinaOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const controlHeader = () => {
      // Gestione Trasparenza vs Sfondo Bianco
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Gestione Scomparsa allo scroll
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setIsVisible(false); // Nascondi quando scendi
        setIsCucinaOpen(false);
      } else {
        setIsVisible(true); // Mostra quando sali
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500">
        
        {/* LOGO DINAMICO */}
        <a href="/" className={`relative transition-all duration-500 ${isScrolled ? 'w-48 h-14' : 'w-64 h-20'} flex items-center`}>
          <Image 
            src="/logo.png" 
            alt="Civico 2 Logo" 
            fill 
            className={`object-contain object-left transition-all duration-500 ${!isScrolled ? 'scale-110' : 'scale-100'}`} 
            priority 
          />
        </a>

        {/* NAVBAR DESKTOP - Premium Styling */}
        <nav className={`hidden md:flex items-center space-x-10 text-[13px] uppercase tracking-[0.2em] font-bold transition-colors duration-500 ${
          isScrolled ? 'text-[#455970]' : 'text-white'
        }`}>
          <a href="/" className="group relative py-2">
            Civico2
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[#455970]' : 'bg-[#ffefcc]'}`}></span>
          </a>
          
          <a href="/informazioni" className="group relative py-2">
            Informazioni
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[#455970]' : 'bg-[#ffefcc]'}`}></span>
          </a>
          
          {/* DROPDOWN CUCINA */}
          <div 
            className="relative cursor-pointer group"
            onMouseEnter={() => setIsCucinaOpen(true)}
            onMouseLeave={() => setIsCucinaOpen(false)}
          >
            <span className="flex items-center gap-1.5 py-2 group-hover:opacity-70 transition-all">
              Cucina
              <svg className={`w-3 h-3 transition-transform duration-300 ${isCucinaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            {/* Menu Dropdown Premium */}
            <div className={`absolute top-full left-[-20px] w-56 bg-white border border-gray-100 shadow-2xl rounded-2xl py-5 transition-all duration-300 ${
              isCucinaOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'
            }`}>
              <a href="/menu" className="px-8 py-3 block text-[#455970] hover:bg-[#455970]/5 transition-colors">Il Menù</a>
              <a href="/ingredienti" className="px-8 py-3 block text-[#455970] hover:bg-[#455970]/5 transition-colors">Ingredienti</a>
            </div>
          </div>

          <a href="/contatti" className="group relative py-2">
            Contatti
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[#455970]' : 'bg-[#ffefcc]'}`}></span>
          </a>
        </nav>

        {/* BOTTONE PREMIUM */}
        <div className="hidden md:block">
          <a 
            href="tel:0598752431" 
            className={`px-8 py-3 rounded-full text-xs font-black tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg ${
              isScrolled 
                ? 'bg-[#455970] text-white shadow-[#455970]/20' 
                : 'bg-white text-[#455970] shadow-white/10'
            }`}
          >
            PRENOTA ORA
          </a>
        </div>

        {/* HAMBURGER - Dinamico */}
        <button 
          onClick={toggleMenu}
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-[#455970]' : 'text-white'}`}
        >
          <div className="w-8 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* OVERLAY MOBILE - Minimal & Chic */}
      <div className={`fixed inset-0 bg-[#455970] z-[200] transition-all duration-700 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } md:hidden`}>
        <div className="flex flex-col h-full px-10 pt-32 space-y-12">
          <button onClick={toggleMenu} className="absolute top-8 right-8 text-white">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <nav className="flex flex-col space-y-8 text-left">
            <a href="/" onClick={toggleMenu} className="text-4xl font-bold text-white tracking-tighter">Civico2</a>
            <a href="/informazioni" onClick={toggleMenu} className="text-4xl font-bold text-white tracking-tighter">Storia</a>
            
            <div className="space-y-4">
               <p className="text-[#ffefcc] text-xs font-bold uppercase tracking-widest opacity-60">La Cucina</p>
               <div className="flex flex-col space-y-4 pl-4 border-l border-white/20">
                 <a href="/menu" onClick={toggleMenu} className="text-3xl font-bold text-white tracking-tight">Il Menù</a>
                 <a href="/ingredienti" onClick={toggleMenu} className="text-3xl font-bold text-white tracking-tight">Ingredienti</a>
               </div>
            </div>

            <a href="/contatti" onClick={toggleMenu} className="text-4xl font-bold text-white tracking-tighter">Contatti</a>
          </nav>
        </div>
      </div>
    </header>
  );
}