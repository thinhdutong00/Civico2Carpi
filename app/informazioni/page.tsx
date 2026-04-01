"use client";
import React from 'react';
import Image from 'next/image';

export default function Informazioni() {
  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SEZIONE 1: Titolo e Testo allineati a sinistra */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#455970] mb-6">
            Civico 2 - Pizzeria Gourmet
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Ciao, benvenuti al Civico 2 di Carpi. Situato proprio nel cuore del centro di Carpi, 
            il nostro locale nasce per offrirti un'esperienza gourmet unica. Vieni a trovarci 
            per scoprire il vero gusto della tradizione rivisitata.
          </p>
        </section>

        {/* SEZIONE 2: Griglia di due foto */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <Image 
              src="/foto-interni-1.webp" 
              alt="Interni Civico 2" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <Image 
              src="/foto-pizza-1.webp" 
              alt="Pizzeria Gourmet Carpi" 
              fill 
              className="object-cover"
            />
          </div>
        </section>

        {/* SEZIONE 3: Di nuovo Titolo e Testo */}
        <section className="mb-16 text-left">
          <h2 className="text-3xl font-bold text-[#455970] mb-4">
            La nostra Filosofia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Utilizziamo solo farine selezionate e ingredienti a KM 0 per garantirti una pizza 
            che non è solo un pasto, ma un viaggio nei sapori del nostro territorio. 
            Ogni dettaglio, dall'impasto alla scelta dei topping, è curato con passione.
          </p>
        </section>

        {/* SEZIONE 4: Foto larga ma non alta (Panoramic) */}
        <section className="relative w-full h-[300px] mb-20 overflow-hidden rounded-3xl">
          <Image 
            src="/foto-panoramica.webp" 
            alt="Ambiente Civico 2" 
            fill 
            className="object-cover"
          />
        </section>

        {/* SEZIONE 5: Riquadro centrale testo + bottone CTA */}
        <section className="flex justify-center">
          <div className="bg-[#455970]/5 border border-[#455970]/10 p-10 md:p-16 rounded-[40px] text-center max-w-4xl w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-[#455970] mb-4">
              Pronto a provare la nostra cucina?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Siamo aperti tutti i giorni per pranzo e cena. Consulta il nostro menù online.
            </p>
            <button className="bg-[#455970] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-[#455970]/20">
              Scopri il Menù
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}