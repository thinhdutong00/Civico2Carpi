"use client";
import React from 'react';
import Image from 'next/image';

export default function Informazioni() {
  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* SEZIONE 1: Titolo e Testo */}
        <section className="mb-12 md:mb-20 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#455970] mb-6 leading-tight">
            Civico 2 - Pizzeria Gourmet
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Situato nei pressi del centro storico di Carpi, offriamo una vasta gamma di opzioni per soddisfare i tuoi gusti culinari. Il nostro ambiente accogliente e moderno è perfetto per famiglie, amici e compleanni; il nostro personale giovane e dinamico è sempre pronto a offrirti un'esperienza di qualità.
          </p>
        </section>

        {/* SEZIONE 2: Griglia Foto (Sinistra) e Video (Destra) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-20">
          
          {/* Foto a sinistra - Altezza ridotta su mobile, verticale su desktop */}
          <div className="relative h-[450px] md:h-[650px] overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
            <Image 
              src="/interno01.jpg" 
              alt="Interni Civico 2" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Video a destra */}
          <div className="relative h-[450px] md:h-[650px] overflow-hidden rounded-2xl md:rounded-3xl shadow-sm bg-gray-100">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/pizza01.mp4" type="video/mp4" />
              Il tuo browser non supporta il formato video.
            </video>
          </div>
        </section>

        {/* SEZIONE 3: Titolo e Testo Secondario */}
        <section className="mb-12 md:mb-16 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#455970] mb-4 leading-snug">
            Gusta le migliori pizze gourmet napoletane?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Da noi hai la possibilità di provare le specialità tipiche della regione campana, dagli antipasti alla pizza napoletana per concludere con i nostri dolci preparati in casa.
          </p>
        </section>

        {/* SEZIONE 4: Foto panoramica */}
        <section className="relative w-full h-[350px] md:h-[550px] mb-16 md:mb-20 overflow-hidden rounded-2xl md:rounded-[40px] shadow-lg">
          <Image 
            src="/pizza-salsiccia.jpg" 
            alt="Dettaglio Pizza Gourmet Civico 2" 
            fill 
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/5" />
        </section>

        {/* SEZIONE 5: Riquadro CTA - Ottimizzato per Mobile */}
        <section className="flex justify-center">
          <div className="bg-[#455970]/5 border border-[#455970]/10 p-8 sm:p-12 md:p-24 rounded-[30px] md:rounded-[50px] text-center max-w-7xl w-full shadow-sm">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#455970] mb-6 leading-tight">
              Pronto a provare la nostra cucina?
            </h3>
            <p className="text-gray-600 mb-8 md:mb-12 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Siamo aperti tutti i giorni per pranzo e cena. 
              Consulta il nostro menù online o prenota un tavolo direttamente per telefono.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center">
              {/* Link alla Pagina Menu */}
              <a 
                href="/menu" 
                className="bg-[#455970] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-lg shadow-[#455970]/20 text-center"
              >
                Scopri il Menù
              </a>
              
              {/* Link alla Chiamata per Prenotazione */}
              <a 
                href="tel:0598752431" 
                className="bg-white text-[#455970] border-2 border-[#455970] px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-[#455970] hover:text-white transition-all text-center"
              >
                Prenota un tavolo
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}