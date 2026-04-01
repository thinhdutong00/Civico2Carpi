"use client";
import React from 'react';
import Image from 'next/image';

export default function Ingredienti() {
  const eccellenze = [
    {
      titolo: "Il Pomodoro San Marzano DOP",
      descrizione: "Coltivato nell'agro sarnese-nocerino, è il re dei nostri condimenti. Polpa soda, sapore agrodolce equilibrato e un colore rosso vivo che sprigiona tutta l'energia del sole della Campania.",
      img: "/pomodoro-dop.jpg",
      tag: "Tradizione"
    },
    {
      titolo: "Fior di Latte di Agerola",
      descrizione: "Una lavorazione artigianale che ci permette di avere una mozzarella che non rilascia liquidi in cottura, mantenendo una cremosità unica e un profumo di latte fresco inconfondibile.",
      img: "/mozzarella-agerola.jpg",
      tag: "Qualità"
    },
    {
      titolo: "Farine Macinate a Pietra",
      descrizione: "Utilizziamo solo grani 100% italiani. Il nostro blend segreto permette una maturazione di 48 ore, rendendo la pizza incredibilmente leggera, alveolata e facile da digerire.",
      img: "/farina-pietra.jpg",
      tag: "Ricerca"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER DELLA PAGINA */}
        <section className="mb-24 text-center">
          <h2 className="text-[#455970] text-xs font-black uppercase tracking-[0.4em] mb-6">
            La nostra ossessione
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold text-gray-900 tracking-tighter mb-8">
            Materie <span className="text-[#455970]">Prime.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Non esiste segreto in cucina se non la scelta di chi lavora la terra con amore. 
            Selezioniamo ogni fornitore visitando personalmente le aziende agricole.
          </p>
        </section>

        {/* LISTA DELLE ECCELLENZE */}
        <div className="space-y-32">
          {eccellenze.map((item, index) => (
            <section 
              key={index} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              {/* Immagine con bordo stondato caratteristico */}
              <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] rounded-[60px] overflow-hidden shadow-2xl">
                <Image 
                  src={item.img} 
                  alt={item.titolo} 
                  fill 
                  className="object-cover transition-transform duration-1000 hover:scale-110" 
                />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-sm">
                  <span className="text-[#455970] font-bold text-sm uppercase tracking-widest">{item.tag}</span>
                </div>
              </div>

              {/* Testi */}
              <div className="w-full md:w-1/2 space-y-6 text-left">
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {item.titolo}
                </h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  {item.descrizione}
                </p>
                <div className="pt-4 flex items-center gap-3 text-[#455970] font-black italic">
                  <span className="w-10 h-[2px] bg-[#455970]"></span>
                  Selezionato da Civico 2
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA FINALE PER IL MENU */}
        <section className="mt-40 text-center">
          <div className="bg-[#455970] rounded-[60px] p-12 md:p-24 relative overflow-hidden group">
            {/* Elemento decorativo sullo sfondo */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl transition-all group-hover:bg-white/10" />
            
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-6xl font-bold mb-8 tracking-tighter">
                Vuoi assaporare queste <br className="hidden md:block" /> eccellenze nel piatto?
              </h2>
              <p className="text-[#ffefcc] mb-12 text-lg md:text-xl opacity-90 max-w-xl mx-auto">
                Tutti i nostri ingredienti si fondono nelle nostre pizze gourmet. 
                Scoprili ora nel menù aggiornato.
              </p>
              <a 
                href="/menu" 
                className="inline-block bg-[#ffefcc] text-[#455970] px-16 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
              >
                Vedi il Menù Completo
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}