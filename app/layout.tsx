import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import CookieBanner from "./components/CookieBanner";

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
        <CookieBanner />
      </body>
    </html>
  );
}