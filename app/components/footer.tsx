import React from 'react';

export default function footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold text-[#642d3a] mb-4 text-lg">CIVICO 2</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Cucina emiliana e tradizione.<br />
            Via Esempio 123, Carpi (MO)
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[#642d3a] mb-4">ORARI</h3>
          <p className="text-sm text-gray-500">Lun - Dom: 12:00 - 15:00 / 19:00 - 23:00</p>
        </div>
        <div>
          <h3 className="font-bold text-[#642d3a] mb-4">CONTATTI</h3>
          <p className="text-sm text-gray-500">Tel: +39 059 1234567</p>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-50 text-[10px] text-gray-400 uppercase tracking-widest">
        © 2026 Civico 2 - Tutti i diritti riservati
      </div>
    </footer>
  );
}