import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const SITO_IN_MANUTENZIONE = true;

export const metadata: Metadata = {
  title: SITO_IN_MANUTENZIONE
    ? "Sito in manutenzione"
    : "Civico 2",
  description: SITO_IN_MANUTENZIONE
    ? "Il sito è temporaneamente in manutenzione."
    : "Sito ufficiale Civico 2",
  robots: SITO_IN_MANUTENZIONE
    ? {
        index: false,
        follow: false,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        style={{
          margin: 0,
        }}
      >
        {SITO_IN_MANUTENZIONE ? (
          <main
            style={{
              width: "100%",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              backgroundColor: "#ffffff",
              color: "#111111",
              fontFamily: "Arial, Helvetica, sans-serif",
              boxSizing: "border-box",
            }}
          >
            <h1
              style={{
                margin: 0,
                textAlign: "center",
                fontSize: "clamp(32px, 6vw, 64px)",
                lineHeight: 1.1,
                fontWeight: 700,
              }}
            >
              Sito in manutenzione
            </h1>
          </main>
        ) : (
          children
        )}
      </body>
    </html>
  );
}