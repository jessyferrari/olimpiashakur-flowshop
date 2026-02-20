import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olimpia Shakur • Flow Shop",
  description: "Mini-app de links afiliados 2026, organizado por plataforma.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
