import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olimpia Shakur • Afiliados Tech",
  description: "Curadoria 2026 de links afiliados (Amazon, Mercado Livre, Hotmart, Kiwify).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
