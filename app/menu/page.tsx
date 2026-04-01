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
  // Generiamo l'array delle pagine (01.png, 02.png, ecc.)
  const pagineMenu = Array.from({ length: 20 }, (_, i) => {
    const numeroPagina = (i + 1).toString().padStart(2, '0');
    return {
      id: i + 1,
      src: `/${numeroPagina}.png`,
      alt: `Pagina Menù ${i + 1}`
    };
  });

  return (
    <div className="bg-[#455970] min-h-screen pt-24 md:pt-32 pb-10 md:pb-20 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full px-4 md:px-12">
        
        {/* Header Sezione */}
        <div className="text-center mb-8 md:mb-16 space-y-2">
          <span className="text-[#ffefcc] uppercase tracking-[0.4em] text-[10px] font-black block opacity-80">
            Civico 2 Gourmet
          </span>
          <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
            Il <span className="text-[#ffefcc]">Menù</span>
          </h1>
          <div className="w-12 md:w-20 h-1 bg-[#ffefcc]/30 mx-auto rounded-full"></div>
        </div>

        {/* Container Swiper */}
        <div className="relative group max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={0}
            slidesPerView={1} 
            // Navigation attiva, ma la nascondiamo via CSS su mobile
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            mousewheel={{ forceToAxis: true }}
            keyboard={true}
            breakpoints={{
              1024: { 
                slidesPerView: 2,
                spaceBetween: 0
              },
            }}
            className="menu-swiper rounded-[30px] md:rounded-[60px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] bg-white"
          >
            {pagineMenu.map((pagina) => (
              <SwiperSlide key={pagina.id} className="bg-white">
                <div className="relative aspect-[1/1.414] w-full border-x border-gray-50">
                  <Image
                    src={pagina.src}
                    alt={pagina.alt}
                    fill
                    className="object-contain p-4 md:p-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={pagina.id <= 4}
                  />
                  {/* Numero pagina discreto */}
                  <div className="absolute bottom-6 right-8 text-[10px] text-gray-300 font-black tracking-widest opacity-50">
                    {pagina.id.toString().padStart(2, '0')}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Frecce Custom - Nascoste su mobile (hidden), visibili su desktop (md:flex) */}
            <div className="swiper-button-prev !hidden md:!flex after:!text-xl shadow-xl transition-all hover:scale-110 active:scale-95" />
            <div className="swiper-button-next !hidden md:!flex after:!text-xl shadow-xl transition-all hover:scale-110 active:scale-95" />
          </Swiper>

          {/* Stili Custom per Swiper */}
          <style jsx global>{`
            .menu-swiper {
              padding-bottom: 0px !important;
            }
            /* Pulsanti di navigazione Desktop */
            .menu-swiper .swiper-button-next,
            .menu-swiper .swiper-button-prev {
              color: #455970 !important;
              background: #ffefcc;
              width: 54px;
              height: 54px;
              border-radius: 50%;
              border: 4px solid #455970;
            }
            .menu-swiper .swiper-button-disabled {
              opacity: 0 !important;
              pointer-events: none;
            }
            /* Paginazione Dots */
            .menu-swiper .swiper-pagination-bullet {
              background: #455970 !important;
              opacity: 0.2;
            }
            .menu-swiper .swiper-pagination-bullet-active {
              background: #ffefcc !important;
              opacity: 1;
              width: 20px;
              border-radius: 5px;
            }
            /* Nascondi frecce su Mobile */
            @media (max-width: 768px) {
              .swiper-button-next, .swiper-button-prev {
                display: none !important;
              }
            }
          `}</style>
        </div>

        {/* Info aggiuntiva Mobile */}
        <p className="text-center text-white/40 text-[10px] uppercase tracking-[0.2em] mt-8 md:hidden">
          Scorri lateralmente per sfogliare
        </p>
      </div>
    </div>
  );
}