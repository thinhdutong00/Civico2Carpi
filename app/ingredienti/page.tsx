"use client";
import React from 'react';
import Image from 'next/image';

export default function IngredientiPage() {
  // Testo estratto verbatim dallo screenshot
  const testoIntegrale = `Per le pizze tradizionali viene utilizzata farina di tipo 0 macinata a pietra in purezza con germe di grano vivo o con variante INTEGRALE Fibra 2 con 4 cereali (grano, orzo, avena e farro) e germe di grano vivo. Per le pizze gourmet la farina utilizzata è quella di mais corvino antico affumicato al 20% su farina tipo 0 macinata a pietra con germe di grano vivo. Ma non finisce qui! Civico2 propone un terzo tipo di impasto, quello della pinsa romana: una focaccia salata dalla lievitazione di 48 ore. Un panetto leggero e super digeribile creato con farina di semola rimacinata a pietra al 50% su farina di tipo 0 rimacinata a pietra con germe di grano vivo.`;

  // Suddividiamo il testo per sezioni per renderlo leggibile
  const paragrafi = {
    tradizionali: "Per le pizze tradizionali viene utilizzata farina di tipo 0 macinata a pietra in purezza con germe di grano vivo o con variante INTEGRALE Fibra 2 con 4 cereali (grano, orzo, avena e farro) e germe di grano vivo.",
    gourmet: "Per le pizze gourmet la farina utilizzata è quella di mais corvino antico affumicato al 20% su farina tipo 0 macinata a pietra con germe di grano vivo.",
    pinsa: "Ma non finisce qui! Civico2 propone un terzo tipo di impasto, quello della pinsa romana: una focaccia salata dalla lievitazione di 48 ore. Un panetto leggero e super digeribile creato con farina di semola rimacinata a pietra al 50% su farina di tipo 0 rimacinata a pietra con germe di grano vivo."
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 text-[#455970]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* INTESTAZIONE PAGINA - Premium & Minimal */}
        <section className="mb-24 text-center md:text-left">
          <h2 className="text-[#455970]/40 text-sm font-black uppercase tracking-[0.4em] mb-4">
            La Ricerca dell'Eccellenza
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Civico 2 - <br className="hidden md:block" /> I nostri <span className="text-[#ffefcc] bg-[#455970] px-4 py-1 inline-block rounded-lg">ingredienti</span>
          </h1>
          <div className="w-20 h-1 bg-[#ffefcc] rounded-full mx-auto md:mx-0"></div>
        </section>

        {/* SEZIONE 1: FARINE TRADIZIONALI & INTEGRALI (Testo DX, Foto SX) */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-[50px] overflow-hidden shadow-2xl group">
            <Image 
              src="/foto-impasto.jpg" // Usa una foto macro della farina o dell'impasto bianco
              alt="Mani in pasta" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          <div className="space-y-6 border-l-4 border-[#ffefcc] pl-8">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Le Basi</h3>
            <h4 className="text-4xl font-bold tracking-tight">Tradizione e Integrità</h4>
            <p className="text-lg leading-relaxed text-gray-600">
              {paragrafi.tradizionali}
            </p>
          </div>
        </section>

        {/* SEZIONE INTERMEDIA: VISUAL SPLIT (Solo Foto che si incastrano) */}
        <section className="py-12 grid grid-cols-2 gap-4 auto-rows-[300px]">
          <div className="relative rounded-[30px] overflow-hidden shadow-xl">
            <Image src="/pomodoro-dop.jpg" alt="Pomodoro San Marzano" fill className="object-cover" />
          </div>
          <div className="relative rounded-[30px] overflow-hidden shadow-xl row-span-2">
            <Image src="/mozzarella-agerola.jpg" alt="Fior di Latte" fill className="object-cover" />
          </div>
          <div className="relative rounded-[30px] overflow-hidden shadow-xl">
            <Image src="/olio-evo.jpg" alt="Olio Extravergine" fill className="object-cover" />
          </div>
        </section>

        {/* SEZIONE 2: MAIS CORVINO GOURMET (Testo SX, Foto DX) */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1 border-r-4 border-[#ffefcc] pr-8 text-right">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">L'Innovazione</h3>
            <h4 className="text-4xl font-bold tracking-tight">Il Carattere del Mais Corvino</h4>
            <p className="text-lg leading-relaxed text-gray-600">
              {paragrafi.gourmet}
            </p>
          </div>
          <div className="relative h-[500px] rounded-[50px] overflow-hidden shadow-2xl group order-1 md:order-2">
            <Image 
              src="/mais-corvino.jpg" // Usa una foto dell'impasto scuro o dei chicchi di mais nero
              alt="Mais Corvino Antico" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </section>

        {/* SEZIONE 3: LA PINSA (Full Width Banner) */}
        <section className="py-20 relative rounded-[60px] overflow-hidden min-h-[50vh] flex items-center justify-center text-center p-12 my-12 group">
          <Image 
            src="/pinsa-romana.jpg" // Usa la foto centrale dello screenshot originale (pinsa con broccoletti)
            alt="La Pinsa Romana" 
            fill 
            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#455970]/80 backdrop-blur-sm" />
          <div className="relative z-10 max-w-3xl space-y-6 text-white">
            <h4 className="text-5xl font-bold tracking-tighter text-[#ffefcc]">La Pinsa Romana</h4>
            <p className="text-xl leading-relaxed opacity-90">
              {paragrafi.pinsa}
            </p>
          </div>
        </section>

        {/* SEZIONE CTA FINALE (Incastro con la Home) */}
        <section className="mt-32 border-t border-gray-100 pt-24 text-center bg-gray-50 rounded-[50px] p-16">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Pronto ad assaggiare la differenza?
          </h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/menu" className="bg-[#455970] text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Sfoglia il Menù
            </a>
            <a href="tel:0598752431" className="bg-[#ffefcc] text-[#455970] px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl">
              Prenota un Tavolo
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}