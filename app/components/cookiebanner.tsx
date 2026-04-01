"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function cookiebanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già fatto una scelta
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] max-w-[380px] w-[calc(100vw-48px)]">
      <div className="bg-[#455970] text-white p-8 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-md">
        <div className="space-y-6">
          {/* ICONA E TITOLO */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#ffefcc] rounded-full animate-pulse" />
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-[#ffefcc]">
              Cookie Policy
            </h4>
          </div>

          <p className="text-[13px] leading-relaxed text-gray-200">
            Utilizziamo i cookie per rendere la tua esperienza su <span className="font-bold text-white tracking-tight">Civico 2</span> il più gourmet possibile. 
            Puoi scegliere di accettarli o continuare con i soli tecnici.
          </p>

          <div className="flex flex-col gap-3">
            {/* PULSANTE ACCETTA */}
            <button
              onClick={() => handleChoice('accepted')}
              className="w-full bg-[#ffefcc] text-[#455970] py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-lg"
            >
              Accetta Tutto
            </button>
            
            {/* PULSANTE RIFIUTA E INFO */}
            <div className="flex items-center justify-between px-2">
              <button
                onClick={() => handleChoice('declined')}
                className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
              >
                Rifiuta
              </button>
              <Link 
                href="/cookie-policy" 
                className="text-[10px] text-[#ffefcc]/60 uppercase tracking-widest hover:text-[#ffefcc] transition-colors border-b border-[#ffefcc]/30"
              >
                Dettagli
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}