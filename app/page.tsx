import Image from "next/image";
import Section from "@/components/Section";
import { SECTIONS } from "@/lib/links";

const NAV = [
  { key: "amazon", label: "Amazon" },
  { key: "mercadolivre", label: "Mercado Livre" },
  { key: "hotmart", label: "Hotmart" },
  { key: "kiwify", label: "Kiwify" },
] as const;

export default function Page() {
  return (
    <main className="container">
      <header className="header">
        <Image className="logo" src="/logo.png" alt="Olimpia Shakur Flow Shop" width={44} height={44} priority />

        <div className="brand">
          <h1>Olimpia Shakur • Flow Shop</h1>
          <p>Links em ordem · Afiliados 2026 · sem busca · direto ao ponto</p>
        </div>
      </header>

      <nav className="nav">
        {NAV.map((n) => (
          <a key={n.key} className="navBtn" href={`#${n.key}`}>
            {n.label}
          </a>
        ))}
      </nav>

      <section className="grid">
        {SECTIONS.map((section) => (
          <Section key={section.key} section={section} />
        ))}
      </section>

      <div className="footer">
        © {new Date().getFullYear()} Olimpia Shakur • Mini‑App Vercel
      </div>
    </main>
  );
}
