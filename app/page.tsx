"use client";
import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#455970]">
      
      {/* 1. HERO SECTION - CINEMATIC EXPERIENCE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/internovideo.mp4" type="video/mp4" />
        </video>

        {/* Overlay con gradiente dinamico per profondità */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#455970]/40" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="text-[#ffefcc] uppercase tracking-[0.5em] text-xs md:text-sm mb-6 block font-black animate-fade-in">
            Eccellenza Contemporanea a Carpi
          </span>
          <h1 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter leading-none mb-10 drop-shadow-2xl">
            CIVICO <span className="text-[#ffefcc] italic tracking-tight">2</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="/menu" 
              className="bg-[#ffefcc] text-[#455970] px-12 py-5 rounded-full font-black tracking-widest text-sm hover:bg-white transition-all w-full md:w-auto shadow-2xl uppercase"
            >
              Esplora il Gusto
            </a>
            <a 
              href="tel:0598752431" 
              className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-5 rounded-full font-black tracking-widest text-sm hover:bg-white hover:text-[#455970] transition-all w-full md:w-auto uppercase"
            >
              Prenota un Tavolo
            </a>
          </div>
        </div>

        {/* Scroll indicator raffinato */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* 2. FILOSOFIA - MINIMALISMO E SPAZIO */}
      <section className="py-32 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-[#455970]/30 text-sm font-black uppercase tracking-[0.4em]">La Filosofia</h2>
              <h3 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                L'equilibrio tra <br />
                <span className="text-[#ffefcc] bg-[#455970] px-4 py-1 inline-block">tempo</span> e sapore.
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed max-w-md">
                Ogni impasto matura per 48 ore in ambiente controllato. È il nostro segreto per una digeribilità superiore e una struttura alveolata senza pari.
              </p>
              <div className="pt-6">
                <a href="/informazioni" className="text-[#455970] font-black border-b-2 border-[#ffefcc] pb-2 hover:border-[#455970] transition-all uppercase text-xs tracking-widest">
                  La nostra storia →
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[600px] rounded-[60px] overflow-hidden group shadow-2xl">
              <Image src="/pizza01sfondo.jpg" alt="L'impasto" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE - FULL WIDTH FOCUS */}
      <section className="bg-[#455970] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="relative h-[700px] rounded-full overflow-hidden border-[15px] border-white/10 shadow-2xl">
              <Image src="/esterno02.jpg" alt="Atmosfera" fill className="object-cover" />
           </div>
           <div className="text-white space-y-8">
              <h3 className="text-5xl md:text-8xl font-bold tracking-tighter">Design <br/> & Comfort.</h3>
              <p className="text-white/70 text-xl leading-relaxed">
                Situato nel cuore di Carpi, Civico 2 accoglie i suoi ospiti in un ambiente dove il design industriale incontra l'eleganza classica.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <p className="text-[#ffefcc] text-3xl font-bold">50+</p>
                  <p className="text-xs uppercase tracking-widest opacity-60">Posti a sedere</p>
                </div>
                <div>
                  <p className="text-[#ffefcc] text-3xl font-bold">Gourmet</p>
                  <p className="text-xs uppercase tracking-widest opacity-60">Selezione Ingredienti</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. SEZIONE INGREDIENTI - FLOATING CARDS */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Solo il meglio della <span className="italic font-serif">terra.</span></h2>
          <p className="text-gray-500 text-lg">Selezioniamo Presidi Slow Food e prodotti DOP per trasformare ogni morso in un viaggio.</p>
        </div>
        
        <div className="relative h-[60vh] mx-6 rounded-[80px] overflow-hidden group">
          <Image src="/sfondo-pizza-close-up.jpg" alt="Ingredienti" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <a href="/ingredienti" className="bg-white text-[#455970] px-16 py-6 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:bg-[#ffefcc] transition-colors">
              I Nostri Fornitori
            </a>
          </div>
        </div>
      </section>

      {/* 5. RECENSIONI - PREMIUM SLIDER */}
<section className="py-32 bg-gray-50 overflow-hidden">
  <div className="max-w-5xl mx-auto px-6">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="reviews-swiper !pb-16"
    >
      {[
        {
          text: "Civico 2 ha cambiato il concetto di pizza a Carpi. Un'esperienza che coinvolge tutti i sensi.",
          author: "Marco Rossi",
          role: "Local Guide"
        },
        {
          text: "Impasto leggerissimo e ingredienti di una qualità introvabile altrove. La margherita gourmet è un capolavoro.",
          author: "Elena Bianchi",
          role: "Food Blogger"
        },
        {
          text: "Atmosfera incredibile, servizio veloce e attento. È diventato il mio posto preferito per il sabato sera.",
          author: "Luca Verri",
          role: "Cliente affezionato"
        },
        {
          text: "Non è solo una pizza, è ricerca. Si sente la passione in ogni morso. Carta dei vini eccellente.",
          author: "Giulia Ferrari",
          role: "Sommelier"
        },
        {
          text: "Finalmente una vera pizza napoletana a Carpi, ma con un tocco moderno che stupisce. Bravi!",
          author: "Riccardo Gatti",
          role: "Critico Gastronomico"
        }
      ].map((review, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Stelle */}
            <div className="text-[#ffefcc] flex gap-1">
              {[...Array(5)].map((_, star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testo Recensione */}
            <blockquote className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight italic text-[#455970] max-w-4xl">
              "{review.text}"
            </blockquote>

            {/* Firma */}
            <div className="pt-4">
              <p className="text-[#455970] font-black uppercase tracking-[0.4em] text-xs">
                {review.author}
              </p>
              <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-1">
                {review.role}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Style personalizzato per i pallini della paginazione */}
  <style jsx global>{`
    .reviews-swiper .swiper-pagination-bullet {
      background: #455970;
      opacity: 0.2;
    }
    .reviews-swiper .swiper-pagination-bullet-active {
      background: #ffefcc !important;
      opacity: 1;
      width: 20px;
      border-radius: 10px;
      transition: all 0.3s;
    }
  `}</style>
</section>

      {/* 6. FINAL CTA - BENTO STYLE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-[#455970] rounded-[100px] p-12 md:p-32 text-center relative overflow-hidden group">
          {/* Cerchio decorativo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-[6rem] font-bold text-white tracking-tighter leading-none">
              Vieni a <br/> trovarci.
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="/menu" className="bg-[#ffefcc] text-[#455970] px-16 py-6 rounded-full font-black uppercase text-sm tracking-widest shadow-2xl hover:scale-105 transition-transform inline-block">
                Sfoglia il Menù
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}