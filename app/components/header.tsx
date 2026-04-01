import React from 'react';

export default function header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-[#642d3a]">
          CIVICO 2
        </div>
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium text-[#642d3a]">
          <a href="/informazioni" className="hover:opacity-60 transition">informazioni</a>
          <a href="#galleria" className="hover:opacity-60 transition">Galleria</a>
          <a href="#contatti" className="hover:opacity-60 transition">Dove siamo</a>
        </nav>
      </div>
    </header>
  );
}