"use client";
import React from 'react';
import Image from 'next/image';

export default function Contatti() {
  const orari = [
    { giorno: "Lunedì", ore: "Chiuso", highlight: false },
    { giorno: "Martedì", ore: "12:00 – 14:00, 19:00 – 23:00", highlight: false },
    { giorno: "Mercoledì", ore: "12:00 – 14:00, 19:00 – 23:00", highlight: false },
    { giorno: "Giovedì", ore: "12:00 – 14:00, 19:00 – 23:00", highlight: false },
    { giorno: "Venerdì", ore: "12:00 – 14:00, 19:00 – 23:30", highlight: false },
    { giorno: "Sabato", ore: "12:00 – 14:00, 19:00 – 23:30", highlight: true },
    { giorno: "Domenica", ore: "19:00 – 23:00", highlight: true },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITOLO PRINCIPALE */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#455970] mb-4 tracking-tighter">
            Vieni a trovarci.
          </h1>
          <p className="text-gray-500 text-lg uppercase tracking-[0.2em]">Civico 2 Pizzeria Gourmet</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLONNA SINISTRA: INFO E ORARI */}
          <div className="space-y-8">
            
            {/* CARD INDIRIZZO E TEL */}
            <div className="bg-[#455970]/5 p-8 rounded-[40px] border border-[#455970]/10">
              <div className="mb-8">
                <h3 className="text-[#455970] font-bold uppercase tracking-widest text-sm mb-2">Indirizzo</h3>
                <p className="text-2xl text-gray-800 font-medium leading-tight">
                  Via L. Ariosto, 2, <br />41012 Carpi (MO)
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Via+L.+Ariosto+2+Carpi" 
                  target="_blank" 
                  className="inline-block mt-4 text-[#455970] font-bold border-b-2 border-[#455970] hover:opacity-60 transition"
                >
                  Apri in Google Maps
                </a>
              </div>

              <div>
                <h3 className="text-[#455970] font-bold uppercase tracking-widest text-sm mb-2">Prenotazioni</h3>
                <a href="tel:0598752431" className="text-3xl text-[#455970] font-bold hover:underline">
                  059 875 2431
                </a>
              </div>
            </div>

            {/* CARD ORARI */}
            <div className="bg-white shadow-xl shadow-gray-100 p-8 md:p-10 rounded-[40px] border border-gray-100">
              <h3 className="text-[#455970] font-bold uppercase tracking-widest text-sm mb-6 flex items-center">
                <span className="w-2 h-2 bg-[#455970] rounded-full mr-3 animate-pulse"></span>
                Orari di apertura
              </h3>
              <div className="space-y-4">
                {orari.map((item, index) => (
                  <div key={index} className={`flex justify-between items-center py-2 border-b border-gray-50 last:border-0 ${item.highlight ? 'text-[#455970] font-bold' : 'text-gray-600'}`}>
                    <span>{item.giorno}</span>
                    <span className="text-right text-sm md:text-base">{item.ore}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: IMMAGINE E MAPPA */}
          <div className="space-y-8 h-full">
            <div className="relative h-[400px] lg:h-[750px] w-full rounded-[40px] overflow-hidden shadow-2xl">
               <Image 
                src="/esterno02.jpg" // Cambia con una foto del locale o dell'ingresso
                alt="Ingresso Civico 2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10">
                <p className="text-white text-xl font-light italic">
                  "Ti aspettiamo nel cuore di Carpi per un'esperienza gourmet indimenticabile."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* SEZIONE FINALE: CTA SOCIAL */}
        <div className="mt-20 text-center">
          <div className="bg-[#455970] py-16 px-6 rounded-[50px] text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ffefcc]">Seguici su Instagram</h2>
            <p className="mb-8 opacity-90 max-w-xl mx-auto">Rimani aggiornato sulle nostre nuove pizze fuori menù e sugli eventi speciali.</p>
            <a 
              href="#" 
              className="bg-white text-[#455970] px-12 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block shadow-xl"
            >
              @civico2pizzeria
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}