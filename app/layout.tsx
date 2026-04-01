import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import CookieBanner from "./components/CookieBanner"; // Assicurati che il percorso sia corretto (es. se è in /components/CookieBanner.tsx)

export const metadata = {
  title: "Civico 2 | Ristorante",
  description: "Tradizione e innovazione",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Header />
        <main className="pt-20"> 
          {/* pt-20 serve per non coprire il contenuto con l'header fisso */}
          {children}
        </main>
        <Footer />
        
        {/* Il Cookie Banner viene caricato qui per essere globale */}
        <CookieBanner />
      </body>
    </html>
  );
}