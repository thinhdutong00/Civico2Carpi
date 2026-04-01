"use client";
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION "CHE SPACCA" */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/hero1.webp" 
          alt="Civico 2 Gourmet"
          fill
          className="object-cover scale-105 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <span className="text-[#ffefcc] uppercase tracking-[0.3em] text-sm mb-4 block font-bold">Pizzeria Gourmet Carpi</span>
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-8">
            CIVICO <span className="text-[#ffefcc]">2</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/menu" className="bg-[#455970] text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#455970] transition-all">
              SCOPRI IL MENU
            </a>
            <a href="tel:0598752431" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#455970] transition-all">
              PRENOTA ORA
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* 2. SEZIONE SINISTRA TESTO / DESTRA FOTO - SFONDO SCORREVOLE (PARALLAX) */}
      <section className="relative py-24 md:py-40 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/pattern-bg.jpg')" }}>
        <div className="absolute inset-0 bg-white/90" /> {/* Overlay per leggibilità */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-[#455970] mb-6">L'Arte della Pizza Napoletana</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ogni impasto matura per 48 ore, garantendo una digeribilità superiore e quel cornicione alveolato che contraddistingue la vera pizza napoletana gourmet. Utilizziamo solo pomodoro San Marzano DOP e fior di latte di Agerola.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image src="/foto-impasto.jpg" alt="Il nostro impasto" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEZIONE INVERTITA (FOTO SINISTRA / TESTO DESTRA) - NO PARALLAX */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image src="/interno-civico.jpg" alt="Interni" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#455970] mb-6">Un'atmosfera moderna nel cuore di Carpi</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Situato in centro a Carpi, Civico 2 è il connubio perfetto tra design contemporaneo e calore familiare. Il luogo ideale per le tue serate speciali o per un pranzo veloce ma di alta qualità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEZIONE SFONDO PIZZA + TESTO BIANCO + CTA INGREDIENTI */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image src="/sfondo-pizza-close-up.jpg" alt="Ingredienti" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#455970]/60" />
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Materie Prime d'Eccellenza</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Dall'olio extravergine delle colline toscane ai salumi dei piccoli produttori locali. La qualità non scende a compromessi.
          </p>
          <a href="/ingredienti" className="inline-block bg-white text-[#455970] px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            SCOPRI GLI INGREDIENTI
          </a>
        </div>
      </section>

      {/* 5. CAROSELLO RECENSIONI (Semplice e Pulito) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
          </div>
          <p className="italic text-2xl text-[#455970] mb-8 leading-relaxed">
            "La miglior pizza gourmet che abbia mai mangiato a Carpi. Impasto leggerissimo e ingredienti che esplodono di sapore. Personale gentilissimo!"
          </p>
          <p className="font-bold uppercase tracking-widest text-sm">— Marco Rossi (Google Local Guide)</p>
        </div>
      </section>

      {/* 6. CTA FINALE MENU */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-[#455970] rounded-[40px] p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Vuoi consultare la nostra proposta?</h2>
          <a href="/menu" className="inline-block bg-[#ffefcc] text-[#455970] px-16 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
            VAI AL MENU COMPLETO
          </a>
        </div>
      </section>

    </div>
  );
}