"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const controlHeader = () => {
      // Se stiamo scrollando verso il basso e siamo oltre i 100px, nascondi
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        // Se stiamo scrollando verso l'alto, mostra
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlHeader);

    // Pulizia dell'evento
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 w-full z-[100] bg-white border-b border-gray-100 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO "EXTRA LARGE" (Sinistra) */}
        <a href="/" className="relative w-64 h-20 flex items-center">
          <Image 
            src="/logo.png" 
            alt="Civico 2 Logo" 
            fill 
            className="object-contain object-left scale-110" // scale-110 per un ulteriore spinta visiva
            priority 
          />
        </a>

        {/* NAVBAR DESKTOP (Centro) */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-bold text-[#455970]">
          <a href="/informazioni" className="hover:opacity-60 transition">Informazioni</a>
          <a href="/menu" className="hover:opacity-60 transition">Menu</a>
          <a href="/contatti" className="hover:opacity-60 transition">Contatti</a>
        </nav>

        {/* BOTTONE CHIAMATA DESKTOP (Destra) */}
        <div className="hidden md:block">
          <a 
            href="tel:0598752431" 
            className="bg-[#455970] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform inline-block"
          >
            CHIAMA ORA
          </a>
        </div>

        {/* HAMBURGER MENU (Solo Mobile) */}
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
        <div className="flex flex-col h-full">
          
          {/* Header del Menu Mobile */}
          <div className="flex justify-between items-center px-6 h-20 border-b border-gray-50">
            <div className="relative w-32 h-12">
              <Image 
                src="/logo.png" 
                alt="Civico 2 Logo" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <button onClick={toggleMenu} className="text-[#455970] p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Voci del Menu Mobile */}
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
            <a href="/informazioni" onClick={toggleMenu} className="text-2xl font-bold text-[#455970] uppercase tracking-widest">Informazioni</a>
            <a href="/menu" onClick={toggleMenu} className="text-2xl font-bold text-[#455970] uppercase tracking-widest">Menu</a>
            <a href="/galleria" onClick={toggleMenu} className="text-2xl font-bold text-[#455970] uppercase tracking-widest">Galleria</a>
            
            <a 
              href="tel:0598752431" 
              className="mt-4 bg-[#455970] text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl"
            >
              PRENOTA UN TAVOLO
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}