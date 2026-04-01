"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCucinaOpen, setIsCucinaOpen] = useState(false); // Stato per il dropdown desktop
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
        setIsCucinaOpen(false); // Chiude il dropdown se si scende
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 w-full z-[100] bg-white border-b border-gray-100 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO "EXTRA LARGE" */}
        <a href="/" className="relative w-64 h-20 flex items-center">
          <Image 
            src="/logo.png" 
            alt="Civico 2 Logo" 
            fill 
            className="object-contain object-left scale-110" 
            priority 
          />
        </a>

        {/* NAVBAR DESKTOP */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-bold text-[#455970]">
          <a href="/informazioni" className="hover:opacity-60 transition h-20 flex items-center">Informazioni</a>
          
          {/* SOTTOMENU CUCINA DESKTOP */}
          <div 
            className="relative h-20 flex items-center cursor-pointer group"
            onMouseEnter={() => setIsCucinaOpen(true)}
            onMouseLeave={() => setIsCucinaOpen(false)}
          >
            <span className="flex items-center gap-1 hover:opacity-60 transition">
              Cucina
              <svg className={`w-4 h-4 transition-transform ${isCucinaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            {/* Dropdown Menu */}
            <div className={`absolute top-20 left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-b-2xl py-4 transition-all duration-200 ${isCucinaOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <a href="/menu" className="px-6 py-3 block hover:bg-[#455970]/5 hover:text-[#455970] transition">Il Menù</a>
              <a href="/ingredienti" className="px-6 py-3 block hover:bg-[#455970]/5 hover:text-[#455970] transition">Ingredienti</a>
            </div>
          </div>

          <a href="/contatti" className="hover:opacity-60 transition h-20 flex items-center">Contatti</a>
        </nav>

        {/* BOTTONE CHIAMATA DESKTOP */}
        <div className="hidden md:block">
          <a 
            href="tel:0598752431" 
            className="bg-[#455970] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform inline-block"
          >
            CHIAMA ORA
          </a>
        </div>

        {/* HAMBURGER MENU */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-[#455970] p-2 focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* OVERLAY MENU MOBILE */}
      <div className={`fixed inset-0 bg-white z-[200] transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full overflow-y-auto">
          
          <div className="flex justify-between items-center px-6 h-20 border-b border-gray-50 flex-shrink-0">
            <div className="relative w-32 h-12">
              <Image src="/logo.png" alt="Civico 2 Logo" fill className="object-contain object-left" />
            </div>
            <button onClick={toggleMenu} className="text-[#455970] p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Voci Menu Mobile */}
          <nav className="flex flex-col items-center justify-center flex-grow py-12 space-y-8">
            <a href="/informazioni" onClick={toggleMenu} className="text-xl font-bold text-[#455970] uppercase tracking-widest">Informazioni</a>
            
            {/* Sottosezione Cucina Mobile */}
            <div className="w-full bg-gray-50 py-8 flex flex-col items-center space-y-6">
               <span className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase">Cucina</span>
               <a href="/menu" onClick={toggleMenu} className="text-3xl font-bold text-[#455970] uppercase">Il Menù</a>
               <a href="/ingredienti" onClick={toggleMenu} className="text-3xl font-bold text-[#455970] uppercase">Ingredienti</a>
            </div>

            <a href="/contatti" onClick={toggleMenu} className="text-xl font-bold text-[#455970] uppercase tracking-widest">Contatti</a>
            
            <a 
              href="tel:0598752431" 
              className="mt-4 bg-[#455970] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl active:scale-95 transition-transform"
            >
              PRENOTA UN TAVOLO
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}