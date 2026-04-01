"use client";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[80vh] w-full">
        <Image
          src="/hero1.webp" // Assicurati che esista in public
          alt="Civico 2 Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            CIVICO 2
          </h1>
        </div>
      </section>
      
      <section className="py-20 text-center px-6">
        <h2 className="text-[#642d3a] text-3xl font-light uppercase tracking-widest">Benvenuti</h2>
        <p className="max-w-2xl mx-auto mt-6 text-gray-600">
          La nostra nuova sede nel cuore di Limidi.
        </p>
      </section>
    </div>
  );
}