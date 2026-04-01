export default function CookiePolicy() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-[#455970]">
        <h1 className="text-4xl font-black mb-10 tracking-tighter uppercase">Cookie Policy</h1>
        <div className="space-y-6 text-sm leading-relaxed text-gray-600">
          <p>Questo sito utilizza i cookie per migliorare l'esperienza dell'utente e garantire il corretto funzionamento delle sezioni interattive (come il carosello del menù).</p>
          
          <h2 className="text-xl font-bold text-[#455970] mt-8">Cosa sono i Cookie?</h2>
          <p>I cookie sono piccoli file di testo salvati sul tuo dispositivo durante la navigazione.</p>

          <h2 className="text-xl font-bold text-[#455970] mt-8">Tipologie di Cookie utilizzati</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookie Tecnici:</strong> Necessari per il funzionamento del sito e la navigazione.</li>
            <li><strong>Cookie Statistici:</strong> Utilizzati in forma anonima per capire come gli utenti interagiscono con il sito.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#455970] mt-8">Gestione dei Cookie</h2>
          <p>Puoi disabilitare i cookie in qualsiasi momento tramite le impostazioni del tuo browser. Tuttavia, alcune funzionalità del sito potrebbero non funzionare correttamente.</p>
        </div>
      </div>
    </main>
  );
}