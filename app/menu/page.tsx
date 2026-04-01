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
  // Array delle immagini del tuo menù (caricate in /public/menu/)
  const pagineMenu = [
    { id: 1, src: "/menu/pagina1.jpg", alt: "Antipasti e Fritti" },
    { id: 2, src: "/menu/pagina2.jpg", alt: "Pizze Classiche" },
    { id: 3, src: "/menu/pagina3.jpg", alt: "Pizze Gourmet" },
    { id: 4, src: "/menu/pagina4.jpg", alt: "Pizze Speciali" },
    { id: 5, src: "/menu/pagina5.jpg", alt: "Dolci e Bevande" },
    { id: 6, src: "/menu/pagina6.jpg", alt: "Carta dei Vini" },
  ];

  return (
    <div className="bg-[#455970] min-h-screen pt-24 pb-12 flex flex-col justify-center">
      <div className="max-w-[1600px] mx-auto w-full px-4 md:px-12">
        
        {/* INTESTAZIONE SOFT */}
        <div className="text-center mb-10">
          <h1 className="text-[#ffefcc] text-4xl md:text-6xl font-bold tracking-tighter mb-2">
            Il Menù
          </h1>
          <p className="text-white/60 uppercase tracking-[0.3em] text-xs">
            Sfoglia le nostre proposte
          </p>
        </div>

        {/* CAROSELLO MENU */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={20}
            slidesPerView={1} // Default Mobile
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            breakpoints={{
              // Tablet e Desktop: 2 pagine alla volta
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
            }}
            className="menu-swiper rounded-2xl overflow-hidden shadow-2xl bg-white"
          >
            {pagineMenu.map((pagina) => (
              <SwiperSlide key={pagina.id} className="bg-white">
                <div className="relative aspect-[1/1.414] w-full border-x border-gray-100">
                  <Image
                    src={pagina.src}
                    alt={pagina.alt}
                    fill
                    className="object-contain"
                    priority={pagina.id <= 2}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM STYLES PER SWIPER (Da inserire nel tuo globals.css o qui con style tag) */}
          <style jsx global>{`
            .menu-swiper .swiper-button-next,
            .menu-swiper .swiper-button-prev {
              color: #455970 !important;
              background: rgba(255, 255, 255, 0.8);
              width: 50px;
              height: 50px;
              border-radius: 50%;
              backdrop-filter: blur(4px);
            }
            .menu-swiper .swiper-button-next:after,
            .menu-swiper .swiper-button-prev:after {
              font-size: 20px;
              font-weight: bold;
            }
            .menu-swiper .swiper-pagination-bullet-active {
              background: #ffefcc !important;
            }
          `}</style>
        </div>

        {/* CTA DOWNLOAD PDF */}
        <div className="mt-16 text-center">
          <a 
            href="/menu-completo-civico2.pdf" 
            download
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full transition-all backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Scarica il Menù PDF
          </a>
        </div>
      </div>
    </div>
  );
}