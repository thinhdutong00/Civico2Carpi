"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

// Import stili base
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MenuPage() {
  // CORREZIONE PERCORSO: Dallo screenshot vedo che le immagini 
  // sono direttamente in public/ (es. 01.png) e NON in public/menu/
  const pagineMenu = Array.from({ length: 20 }, (_, i) => {
    const numero = (i + 1).toString().padStart(2, '0');
    return {
      id: i + 1,
      // Se le hai spostate in una cartella menu, rimetti `/menu/${numero}.png`
      // Ma dallo screenshot sembra siano nella root di public
      src: `/${numero}.png`, 
      alt: `Pagina ${i + 1}`
    };
  });

  return (
    <div className="bg-[#455970] min-h-screen pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        
        <div className="text-center mb-12">
          <span className="text-[#ffefcc] uppercase tracking-[0.4em] text-[10px] font-black mb-4 block">
            Civico 2 Gourmet
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter">
            Il Menù
          </h1>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={{ forceToAxis: true }}
            keyboard={true}
            breakpoints={{
              1024: { slidesPerView: 2 }
            }}
            className="menu-swiper rounded-2xl md:rounded-[40px] shadow-2xl bg-white overflow-hidden"
          >
            {pagineMenu.map((pagina) => (
              <SwiperSlide key={pagina.id}>
                <div className="relative aspect-[1/1.414] w-full bg-white flex items-center justify-center">
                  <Image
                    src={pagina.src}
                    alt={pagina.alt}
                    fill
                    className="object-contain p-4"
                    priority={pagina.id <= 4}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-400">
                    {pagina.id} / 20
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12 text-center text-white/40 text-xs italic">
          * Scorri lateralmente o usa le frecce per sfogliare il menù
        </div>
      </div>

      {/* CSS di emergenza se lo style jsx dà noia */}
      <style jsx global>{`
        .menu-swiper .swiper-button-next, .menu-swiper .swiper-button-prev {
          color: #455970 !important;
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .menu-swiper .swiper-pagination-bullet-active {
          background: #ffefcc !important;
        }
      `}</style>
    </div>
  );
}