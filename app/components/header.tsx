"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCucinaOpen, setIsCucinaOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        if (!isOpen) setIsVisible(false); // Nascondi solo se il menu è chiuso
        setIsCucinaOpen(false);
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
      document.body.style.overflow = 'unset';
    };
  }, [lastScrollY, isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out border-b border-gray-100 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled ? 'py-2 shadow-md bg-white/95 backdrop-blur-md' : 'py-4 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <a href="/" className={`relative transition-all duration-500 ${isScrolled ? 'w-48 h-14' : 'w-64 h-20'} flex items-center z-[210]`}>
            <Image 
              src="/logo.png" 
              alt="Civico 2 Logo" 
              fill 
              className={`object-contain object-left transition-all duration-500 ${isOpen ? 'brightness-0 invert' : ''}`} 
              priority 
            />
          </a>

          {/* NAVBAR DESKTOP */}
          <nav className="hidden md:flex items-center space-x-10 text-[13px] uppercase tracking-[0.2em] font-bold text-[#455970]">
            <a href="/" className="group relative py-2">Civico2 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#455970] transition-all duration-300 group-hover:w-full"></span></a>
            <a href="/informazioni" className="group relative py-2">Informazioni <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#455970] transition-all duration-300 group-hover:w-full"></span></a>
            
            <div className="relative cursor-pointer group" onMouseEnter={() => setIsCucinaOpen(true)} onMouseLeave={() => setIsCucinaOpen(false)}>
              <span className="flex items-center gap-1.5 py-2 group-hover:opacity-70 transition-all">
                Cucina
                <svg className={`w-3 h-3 transition-transform duration-300 ${isCucinaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
              </span>
              <div className={`absolute top-full left-[-20px] w-56 bg-white border border-gray-100 shadow-2xl rounded-2xl py-5 transition-all duration-300 ${isCucinaOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}>
                <a href="/menu" className="px-8 py-3 block text-[#455970] hover:bg-[#455970]/5 transition-colors">Il Menù</a>
                <a href="/ingredienti" className="px-8 py-3 block text-[#455970] hover:bg-[#455970]/5 transition-colors">Ingredienti</a>
              </div>
            </div>
            <a href="/contatti" className="group relative py-2">Contatti <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#455970] transition-all duration-300 group-hover:w-full"></span></a>
          </nav>

          {/* BOTTONE DESKTOP */}
          <div className="hidden md:block">
            <a href="tel:0598752431" className="bg-[#455970] text-white px-8 py-3 rounded-full text-xs font-black tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#455970]/20">PRENOTA ORA</a>
          </div>

          {/* HAMBURGER BUTTON */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden p-2 z-[210] transition-colors duration-300 focus:outline-none ${isOpen ? 'text-white' : 'text-[#455970]'}`}
          >
            <div className="w-8 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* OVERLAY MOBILE */}
      <div className={`fixed inset-0 z-[150] transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
      }`} style={{ backgroundColor: '#455970' }}>
        
        {/* TASTO CHIUDI (X) - Posizionato in alto a destra */}
        <button 
          onClick={toggleMenu}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-[220]"
          aria-label="Chiudi menu"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Cerchi decorativi */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ffefcc]/5 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="flex flex-col h-full px-12 justify-center space-y-10 relative z-10">
          <nav className="flex flex-col space-y-8 text-left">
            <a href="/" onClick={toggleMenu} className="text-5xl font-black text-white tracking-tighter">Civico 2</a>
            <a href="/informazioni" onClick={toggleMenu} className="text-4xl font-bold text-white/90 tracking-tighter">Storia</a>
            
            <div className="space-y-4">
               <p className="text-[#ffefcc] text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Esplora la cucina</p>
               <div className="flex flex-col space-y-5 pl-6 border-l-2 border-white/10">
                 <a href="/menu" onClick={toggleMenu} className="text-3xl font-bold text-white tracking-tight hover:text-[#ffefcc] transition-colors">Il Menù</a>
                 <a href="/ingredienti" onClick={toggleMenu} className="text-3xl font-bold text-white tracking-tight hover:text-[#ffefcc] transition-colors">Ingredienti</a>
               </div>
            </div>

            <a href="/contatti" onClick={toggleMenu} className="text-4xl font-bold text-white tracking-tighter">Contatti</a>
            
            <div className="pt-6">
              <a 
                href="tel:0598752431" 
                className="inline-block w-full bg-[#ffefcc] text-[#455970] px-10 py-5 rounded-full text-center text-sm font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-all"
              >
                PRENOTA UN TAVOLO
              </a>
            </div>
          </nav>

          <div className="absolute bottom-12 left-12 space-y-1">
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Via L. Ariosto, 2,</p>
            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">41012 Carpi MO</p>
          </div>
        </div>
      </div>
    </>
  );
}