if (SITO_IN_MANUTENZIONE) {
  return (
    <html lang="it">
      <body
        style={{
          margin: 0,
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          color: "#111111",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <h1
          style={{
            margin: 0,
            padding: "24px",
            textAlign: "center",
            fontSize: "clamp(32px, 6vw, 64px)",
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Sito in manutenzione
        </h1>
      </body>
    </html>
  );
}