"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MenuPage() {
  // Generiamo l'array di 20 immagini automaticamente
  // Assicurati che le immagini siano in /public/menu/01.png, /public/menu/02.png, ecc.
  const pagineMenu = Array.from({ length: 20 }, (_, i) => {
    const numeroPagina = (i + 1).toString().padStart(2, '0'); // Trasforma 1 in "01", 2 in "02"...
    return {
      id: i + 1,
      src: `/menu/${numeroPagina}.png`,
      alt: `Pagina Menù ${i + 1}`
    };
  });

  return (
    <div className="bg-[#455970] min-h-screen pt-32 pb-20 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-12">
        
        {/* INTESTAZIONE PREMIUM */}
        <div className="text-center mb-16">
          <span className="text-[#ffefcc] uppercase tracking-[0.4em] text-[10px] font-black mb-4 block opacity-80">
            Civico 2 Gourmet
          </span>
          <h1 className="text-white text-5xl md:text-8xl font-bold tracking-tighter mb-4">
            Il Menù
          </h1>
          <div className="w-20 h-1 bg-[#ffefcc] mx-auto rounded-full opacity-50"></div>
        </div>

        {/* CONTENITORE CAROSELLO - Effetto Libro */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={0}
            slidesPerView={1} 
            navigation={true}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            mousewheel={true}
            keyboard={true}
            breakpoints={{
              // Su Desktop mostriamo 2 pagine affiancate (come un libro aperto)
              1024: {
                slidesPerView: 2,
              },
            }}
            className="menu-swiper rounded-[20px] md:rounded-[40px] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] bg-white"
          >
            {pagineMenu.map((pagina) => (
              <SwiperSlide key={pagina.id} className="bg-white">
                <div className="relative aspect-[1/1.414] w-full border-r border-gray-100/50">
                  <Image
                    src={pagina.src}
                    alt={pagina.alt}
                    fill
                    className="object-contain p-2 md:p-4"
                    priority={pagina.id <= 4} // Carica subito le prime 4 pagine
                  />
                  {/* Numero di pagina discreto in basso */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-300 font-mono">
                    {pagina.id} / 20
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM STYLES PER SWIPER */}
          <style jsx global>{`
            /* Frecce di navigazione Premium */
            .menu-swiper .swiper-button-next,
            .menu-swiper .swiper-button-prev {
              color: #455970 !important;
              background: white;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              box-shadow: 0 10px 20px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }
            .menu-swiper .swiper-button-next:hover,
            .menu-swiper .swiper-button-prev:hover {
              transform: scale(1.1);
              background: #ffefcc;
            }
            .menu-swiper .swiper-button-next:after,
            .menu-swiper .swiper-button-prev:after {
              font-size: 18px;
              font-weight: 900;
            }
            
            /* Paginazione a pallini */
            .menu-swiper .swiper-pagination-bullet {
              background: white !important;
              opacity: 0.5;
            }
            .menu-swiper .swiper-pagination-bullet-active {
              background: #ffefcc !important;
              opacity: 1;
              width: 25px;
              border-radius: 5px;
            }

            /* Nascondi frecce su mobile per pulizia, appaiono al passaggio su desktop */
            @media (max-width: 768px) {
              .menu-swiper .swiper-button-next,
              .menu-swiper .swiper-button-prev {
                display: none;
              }
            }
          `}</style>
        </div>

        {/* CTA DOWNLOAD O INFO */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm italic">
            * I prezzi e la disponibilità degli ingredienti stagionali possono variare.
          </p>
        </div>
        
      </div>
    </div>
  );
}