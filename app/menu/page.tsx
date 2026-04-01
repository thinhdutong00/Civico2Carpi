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
  // Generiamo l'array puntando direttamente alla root di public/ come si vede nello screenshot
  const pagineMenu = Array.from({ length: 20 }, (_, i) => {
    const numeroPagina = (i + 1).toString().padStart(2, '0'); // Trasforma 1 in "01"
    return {
      id: i + 1,
      src: `/${numeroPagina}.png`, // PERCORSO CORRETTO: punta a public/01.png
      alt: `Pagina Menù ${i + 1}`
    };
  });

  return (
    <div className="bg-[#455970] min-h-screen pt-32 pb-20 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-12">
        
        <div className="text-center mb-16">
          <span className="text-[#ffefcc] uppercase tracking-[0.4em] text-[10px] font-black mb-4 block opacity-80">
            Civico 2 Gourmet
          </span>
          <h1 className="text-white text-5xl md:text-8xl font-bold tracking-tighter mb-4">
            Il Menù
          </h1>
          <div className="w-20 h-1 bg-[#ffefcc] mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={0}
            slidesPerView={1} 
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            breakpoints={{
              1024: { slidesPerView: 2 }, // Effetto libro su desktop
            }}
            className="menu-swiper rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl bg-white"
          >
            {pagineMenu.map((pagina) => (
              <SwiperSlide key={pagina.id} className="bg-white">
                <div className="relative aspect-[1/1.414] w-full border-r border-gray-100">
                  <Image
                    src={pagina.src}
                    alt={pagina.alt}
                    fill
                    className="object-contain p-2 md:p-6"
                    priority={pagina.id <= 4}
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-300 font-mono">
                    {pagina.id} / 20
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .menu-swiper .swiper-button-next,
            .menu-swiper .swiper-button-prev {
              color: #455970 !important;
              background: white;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            }
            .menu-swiper .swiper-pagination-bullet-active {
              background: #ffefcc !important;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}