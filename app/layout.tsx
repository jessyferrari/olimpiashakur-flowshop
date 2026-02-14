import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olimpia Shakur · Flow Shop",
  description: "Copa do Mundo 2026 + Tech",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
