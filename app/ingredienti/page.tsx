"use client";
import React from 'react';
import Image from 'next/image';

export default function IngredientiPage() {
  // Testo estratto verbatim dai tuoi screenshot
  const paragrafi = {
    tradizionali: "Per le pizze tradizionali viene utilizzata farina di tipo 0 macinata a pietra in purezza con germe di grano vivo o con variante INTEGRALE Fibra 2 con 4 cereali (grano, orzo, avena e farro) e germe di grano vivo.",
    gourmet: "Per le pizze gourmet la farina utilizzata è quella di mais corvino antico affumicato al 20% su farina tipo 0 macinata a pietra con germe di grano vivo.",
    pinsa: "Ma non finisce qui! Civico2 propone un terzo tipo di impasto, quello della pinsa romana: una focaccia salata dalla lievitazione di 48 ore. Un panetto leggero e super digeribile creato con farina di semola rimacinata a pietra al 50% su farina di tipo 0 rimacinata a pietra con germe di grano vivo."
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 text-[#455970]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER MINIMAL */}
        <header className="mb-24 text-center">
          <h2 className="text-[#455970]/40 text-xs font-black uppercase tracking-[0.5em] mb-4">
            Qualità Superiore
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Civico 2 - I nostri <span className="text-[#ffefcc] bg-[#455970] px-3 py-1 rounded-md">ingredienti</span>
          </h1>
          <div className="w-16 h-1 bg-[#ffefcc] mx-auto rounded-full"></div>
        </header>

        {/* SEZIONE 1: FARINE (Focus sul Testo) */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-6 border-l-2 border-[#ffefcc] pl-8">
            <h3 className="text-3xl font-bold tracking-tight text-[#455970]">Tradizione e Integrità</h3>
            <p className="text-lg leading-relaxed text-gray-500">
              {paragrafi.tradizionali}
            </p>
          </div>
          <div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-xl">
            <Image 
              src="/impasto.jpg" // Utilizzo una delle immagini caricate per coerenza
              alt="Mani in pasta" 
              fill 
              className="object-cover opacity-90"
            />
          </div>
        </section>

        {/* SEZIONE 2: MAIS CORVINO (Layout Speculare) */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[400px] rounded-[30px] overflow-hidden shadow-xl order-2 md:order-1">
            <Image 
              src="/pizzapesto.jpg" 
              alt="Ingredienti Gourmet" 
              fill 
              className="object-cover opacity-90"
            />
          </div>
          <div className="space-y-6 border-r-2 border-[#ffefcc] pr-8 text-right order-1 md:order-2">
            <h3 className="text-3xl font-bold tracking-tight text-[#455970]">Mais Corvino</h3>
            <p className="text-lg leading-relaxed text-gray-500">
              {paragrafi.gourmet}
            </p>
          </div>
        </section>

        {/* SEZIONE 3: LA PINSA (Pulizia Estrema) */}
        <section className="py-24 bg-[#455970] rounded-[40px] px-8 md:px-20 text-center my-12 shadow-2xl relative overflow-hidden">
          {/* Cerchio decorativo sottile */}
          <div className="absolute -top-24 -right-24 w-64 h-64 border border-white/5 rounded-full" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h4 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#ffefcc]">La Pinsa Romana</h4>
            <p className="text-xl leading-relaxed text-white/80">
              {paragrafi.pinsa}
            </p>
          </div>
        </section>

        {/* FOOTER DI SEZIONE */}
        <footer className="mt-32 text-center">
          <h3 className="text-3xl font-bold mb-10">Scoprilo nel nostro Menù</h3>
          <a 
            href="/menu" 
            className="inline-block bg-[#455970] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
          >
            VAI AL MENU COMPLETO
          </a>
        </footer>

      </div>
    </div>
  );
}