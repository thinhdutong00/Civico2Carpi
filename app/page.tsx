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
                Una cucina<br />
                <span className="text-[#ffefcc] bg-[#455970] px-4 py-1 inline-block">Gourmet.</span>
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed max-w-md">
                Qui, offriamo le migliori pizze e pinse, preparate con ingredienti di alta qualità e originalità. Il nostro menu è stato progettato per soddisfare le esigenze di ogni palato, dai più tradizionali ai più avventurosi. Se sei alla ricerca di un ristorante che offra un'esperienza gastronomica unica, allora non perderti la nostra.
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
<section className="bg-[#455970] py-20 md:py-32 overflow-hidden px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
    
    {/* Immagine: Da ovale su desktop a rettangolo morbido su mobile */}
    <div className="relative h-[450px] md:h-[700px] w-full rounded-[60px] md:rounded-full overflow-hidden border-[10px] md:border-[15px] border-white/10 shadow-2xl order-2 lg:order-1">
      <Image 
        src="/interno01.jpg" 
        alt="Atmosfera Civico 2" 
        fill 
        className="object-cover transition-transform duration-700 hover:scale-105" 
      />
    </div>

    {/* Contenuto Testuale */}
    <div className="text-white space-y-6 md:space-y-8 order-1 lg:order-2">
      <div className="space-y-4">
        <span className="text-[#ffefcc] uppercase tracking-[0.3em] text-[10px] font-black opacity-80">
          La Location
        </span>
        <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic">
          A pochi passi <br className="hidden md:block"/> dal <span className="text-[#ffefcc]">centro.</span>
        </h3>
      </div>
      
      <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
        Un ambiente dal design moderno e accogliente, situato nei pressi del centro storico di Carpi. 
        Disponiamo di una sala interna da <span className="text-white">60 coperti</span> e di un ampio dehor estivo per le tue serate all'aperto.
      </p>

      {/* Grid Statistiche */}
      <div className="grid grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-10 border-t border-white/10">
        <div className="space-y-1">
          <p className="text-[#ffefcc] text-4xl md:text-5xl font-black tracking-tighter">60</p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">Coperti Interni</p>
        </div>
        <div className="space-y-1">
          <p className="text-[#ffefcc] text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Gourmet</p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">Selezione Materie Prime</p>
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
          <Image src="/burratapistacchio.webp" alt="Ingredienti" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <a href="/ingredienti" className="bg-white text-[#455970] px-16 py-6 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:bg-[#ffefcc] transition-colors">
              I Nostri Ingredienti
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
          author: "Tommaso Pareggi",
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
<section className="py-24 px-6 max-w-7xl mx-auto">
  <div className="bg-[#455970] rounded-[60px] md:rounded-[100px] p-16 md:p-32 text-center relative overflow-hidden group">
    
    {/* Elementi decorativi Premium */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffefcc]/5 rounded-full -mr-48 -mt-48 blur-[100px] transition-opacity group-hover:opacity-100 opacity-50" />
    <div className="absolute bottom-0 left-0 w-64 h-64 border border-white/5 rounded-full -ml-20 -mb-20" />
    
    <div className="relative z-10 max-w-3xl mx-auto space-y-12">
      {/* Label sottile sopra il titolo */}
      <span className="text-[#ffefcc] uppercase tracking-[0.4em] text-[10px] font-bold opacity-80 block mb-4">
        Un'esperienza autentica
      </span>
      
      <h2 className="text-6xl md:text-[7.5rem] font-black text-white tracking-tighter leading-[0.85] uppercase italic drop-shadow-sm">
        Oltre la <br/>
        <span className="text-[#ffefcc]">Tradizione.</span>
      </h2>
      
      <p className="text-white/60 text-sm md:text-base font-medium max-w-md mx-auto leading-relaxed tracking-wide">
        Ti aspettiamo a Carpi per farti scoprire <br className="hidden md:block"/> 
        il vero gusto della pizza contemporanea.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-6">
        <a 
          href="/menu" 
          className="bg-[#ffefcc] text-[#455970] px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-white hover:scale-105 transition-all duration-300 inline-block active:scale-95"
        >
          Sfoglia il Menù
        </a>
        
        <a 
          href="tel:0598752431" 
          className="text-white border-b-2 border-white/20 pb-1 font-bold uppercase text-[10px] tracking-[0.3em] hover:border-[#ffefcc] hover:text-[#ffefcc] transition-all"
        >
          Prenota un tavolo
        </a>
      </div>
    </div>

    {/* Numero civico decorativo sullo sfondo */}
    <span className="absolute -bottom-10 right-10 text-white/5 font-black text-[15rem] select-none pointer-events-none">
      02
    </span>
  </div>
</section>

    </div>
  );
}