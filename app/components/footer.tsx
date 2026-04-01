import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNA 1: BRAND */}
          <div className="space-y-6">
            <h3 className="font-black text-[#455970] text-2xl tracking-tighter uppercase">CIVICO 2</h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest leading-loose">
              L'arte della pizza gourmet <br /> nel cuore di Carpi.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#ffefcc] transition-colors cursor-pointer group">
                <span className="text-[10px] font-bold text-[#455970]">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#ffefcc] transition-colors cursor-pointer group">
                <span className="text-[10px] font-bold text-[#455970]">FB</span>
              </div>
            </div>
          </div>

          {/* COLONNA 2: NAVIGAZIONE */}
          <div>
            <h4 className="font-bold text-[#455970] mb-6 text-sm uppercase tracking-[0.2em]">Esplora</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link href="/" className="hover:text-[#455970] hover:pl-2 transition-all">Home</Link></li>
              <li><Link href="/menu" className="hover:text-[#455970] hover:pl-2 transition-all">Il Menù</Link></li>
              <li><Link href="/ingredienti" className="hover:text-[#455970] hover:pl-2 transition-all">Ingredienti</Link></li>
              <li><Link href="/contatti" className="hover:text-[#455970] hover:pl-2 transition-all">Prenota</Link></li>
            </ul>
          </div>

          {/* COLONNA 3: ORARI */}
          <div>
            <h4 className="font-bold text-[#455970] mb-6 text-sm uppercase tracking-[0.2em]">Orari d'Apertura</h4>
            <div className="space-y-2 text-[13px] text-gray-500">
              <div className="flex justify-between border-b border-gray-50 pb-1">
                <span>Lunedì</span> <span className="font-bold opacity-30">Chiuso</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-1">
                <span>Mar - Mer</span> <span>12–14, 19–23</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-1">
                <span>Giovedì</span> <span>12–14, 19–23</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-1">
                <span>Ven - Sab</span> <span>12–14, 19–23:30</span>
              </div>
              <div className="flex justify-between pb-1">
                <span>Domenica</span> <span>19–23</span>
              </div>
            </div>
          </div>

          {/* COLONNA 4: CONTATTI */}
          <div className="space-y-6">
            <h4 className="font-bold text-[#455970] mb-6 text-sm uppercase tracking-[0.2em]">Contatti</h4>
            <div className="text-sm text-gray-500 space-y-4">
              <p className="leading-relaxed">
                <span className="block font-bold text-[#455970] mb-1">Indirizzo:</span>
                Via L. Ariosto, 2, <br /> 41012 Carpi (MO)
              </p>
              <p>
                <span className="block font-bold text-[#455970] mb-1">Prenotazioni:</span>
                <a href="tel:0598752431" className="text-xl font-bold text-[#455970] hover:text-[#455970] transition-colors border-b-2 border-[#ffefcc]">
                  059 875 2431
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: INFO FISCALI & CREDIT */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                © 2026 Civico 2 - Tutti i diritti riservati
              </p>
              <p className="text-[9px] text-gray-400 leading-relaxed uppercase tracking-tighter">
                Civico Due Carpi (MO) Via L. A. Muratori, 47, CAP 41012 <br className="hidden md:block" />
                P. IVA 03831040369 - REA MO - 421443
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-gray-300 uppercase tracking-[0.2em]">Powered by</span>
              <a 
                href="https://magodigital.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black text-[#455970] hover:text-[#ffefcc] transition-colors tracking-widest"
              >
                MAGO DIGITAL
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}