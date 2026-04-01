"use client";
import React from 'react';
import Image from 'next/image';

export default function SezioneGalleriaCucina() {
  const scatti = [
    { id: 1, src: "/pizza-special.jpg", alt: "La Nostra Regina", span: "md:col-span-2 md:row-span-2" },
    { id: 2, src: "/ingrediente1.jpg", alt: "Pomodoro San Marzano DOP", span: "md:col-span-1 md:row-span-1" },
    { id: 3, src: "/interno-forno.jpg", alt: "Cottura a Legna", span: "md:col-span-1 md:row-span-1" },
    { id: 4, src: "/impasto-bolle.jpg", alt: "Lunga Lievitazione", span: "md:col-span-1 md:row-span-2" },
    { id: 5, src: "/tagliere.jpg", alt: "Selezione Salumi", span: "md:col-span-1 md:row-span-1" },
    { id: 6, src: "/olio-evo.jpg", alt: "Olio Extravergine", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* INTESTAZIONE SEZIONE */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#455970] text-sm font-black uppercase tracking-[0.3em] mb-4">
              Visual Experience
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
              Dalla terra al <span className="text-[#455970]">cornicione.</span>
            </h3>
          </div>
          <p className="text-gray-500 text-lg md:max-w-xs italic border-l-2 border-[#455970] pl-6">
            "La qualità non è un atto, è un'abitudine."
          </p>
        </div>

        {/* GRID GALLERIA DINAMICA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {scatti.map((foto) => (
            <div 
              key={foto.id} 
              className={`relative overflow-hidden rounded-[35px] group bg-gray-100 ${foto.span}`}
            >
              {/* Immagine con zoom al passaggio mouse */}
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              {/* Overlay gradiente che appare all'hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#455970]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#ffefcc] text-xs font-black uppercase tracking-widest mb-2">Civico 2</p>
                  <h4 className="text-white text-xl font-bold">{foto.alt}</h4>
                </div>
              </div>

              {/* Badge angolare opzionale */}
              <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* MINI FOOTER GALLERIA */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-4 text-[#455970] font-bold">
            <span className="h-[1px] w-12 bg-[#455970]/30"></span>
            <p className="uppercase tracking-widest text-xs">Scorri per scoprire i nostri ingredienti</p>
            <span className="h-[1px] w-12 bg-[#455970]/30"></span>
          </div>
        </div>

      </div>
    </section>
  );
}