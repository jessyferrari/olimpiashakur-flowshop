"use client";

import React from "react";
import Image from "next/image";
import links from "../data/links.json";
import type { LinksData } from "./components/types";
import { PillTabs } from "./components/PillTabs";
import { LinkList } from "./components/LinkList";
import { useFontScale } from "./components/useFontScale";

type TopTab = "copa" | "amazon" | "hotmart" | "kiwify";
type CopaTab = "acessorios" | "vestuario";
type AmazonTab = "maisVendidos" | "emAlta";
type HotmartTab = "quentes" | "queridos";

const data = links as unknown as LinksData;

export default function Page() {
  const [top, setTop] = React.useState<TopTab>("copa");
  const [copaTab, setCopaTab] = React.useState<CopaTab>("acessorios");
  const [amazonTab, setAmazonTab] = React.useState<AmazonTab>("maisVendidos");
  const [hotmartTab, setHotmartTab] = React.useState<HotmartTab>("quentes");
  const [query, setQuery] = React.useState<string>("");

  const font = useFontScale();

  // Clear search when switching major sections (prevents confusion)
  React.useEffect(() => {
    setQuery("");
  }, [top, copaTab, amazonTab, hotmartTab]);

  const affiliateDisclosure =
    "Aviso: este site contém links de afiliado. Como afiliada/associada nas plataformas listadas, posso receber comissão sem custo extra para você.";

  return (
    <main className="container">
      <header className="card" style={{ padding: 14 }}>
        <div className="row space-between wrap">
          <div className="logoWrap">
            <Image
              src="/logo.png"
              alt="Olimpia Shakur • Flow Shop"
              width={44}
              height={44}
              className="logo"
              priority
            />
            <div>
              <div className="brandTitle">Olimpia Shakur • Flow Shop</div>
              <div className="brandSubtitle">Copa do Mundo 2026 + Tech</div>
            </div>
          </div>

          <div className="row wrap" style={{ justifyContent: "flex-end", flex: 1 }}>
            <input
              className="input"
              placeholder="Buscar por título ou domínio (ex.: amzn, hotmart, kiwify)…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Buscar"
            />
            <button className="ctrlBtn focusRingLilac" onClick={font.dec} title="Diminuir fonte">
              A-
            </button>
            <button className="ctrlBtn focusRingGreen" onClick={font.inc} title="Aumentar fonte">
              A+
            </button>
            <button className="ctrlBtn" onClick={font.reset} title="Fonte padrão">
              100%
            </button>
          </div>
        </div>

        <div className="divider" />

        <div className="row space-between wrap">
          <span className="badge">
            <span style={{ color: "var(--gold)" }}>●</span> {affiliateDisclosure}
          </span>
          <span className="badge" title="Escala atual de fonte">
            Fonte: <b style={{ color: "var(--text)" }}>{Math.round(font.scale * 100)}%</b>
          </span>
        </div>
      </header>

      <div style={{ marginTop: 14 }}>
        <PillTabs<TopTab>
          value={top}
          onChange={setTop}
          options={[
            { value: "copa", label: "Destaque • Copa 2026" },
            { value: "amazon", label: "Amazon • Tech" },
            { value: "hotmart", label: "Hotmart • Tech" },
            { value: "kiwify", label: "Kiwify • Tech" },
          ]}
        />
      </div>

      {top === "copa" ? (
        <>
          <div className="sectionHeader">
            <div>
              <div className="sectionTitle">{data.featured.copa2026.title}</div>
              <div className="sectionNote">Dois setores — bem destacado, sem bagunça.</div>
            </div>

            <PillTabs<CopaTab>
              value={copaTab}
              onChange={setCopaTab}
              options={[
                { value: "acessorios", label: "Acessórios" },
                { value: "vestuario", label: "Vestuário" },
              ]}
            />
          </div>

          <div className="card" style={{ padding: 14 }}>
            {copaTab === "acessorios" ? (
              <LinkList items={data.featured.copa2026.accessories} query={query} accent="green" />
            ) : (
              <LinkList items={data.featured.copa2026.apparel} query={query} accent="lilac" />
            )}
          </div>
        </>
      ) : null}

      {top === "amazon" ? (
        <>
          <div className="sectionHeader">
            <div>
              <div className="sectionTitle">Amazon • Tech</div>
              <div className="sectionNote">Mais vendidos e Em alta (atualize semanalmente sem dor).</div>
            </div>

            <PillTabs<AmazonTab>
              value={amazonTab}
              onChange={setAmazonTab}
              options={[
                { value: "maisVendidos", label: "Mais vendidos" },
                { value: "emAlta", label: "Em alta" },
              ]}
            />
          </div>

          <div className="card" style={{ padding: 14 }}>
            {amazonTab === "maisVendidos" ? (
              <LinkList items={data.amazon.bestsellers} query={query} accent="gold" />
            ) : (
              <LinkList items={data.amazon.trending} query={query} accent="gold" />
            )}
          </div>
        </>
      ) : null}

      {top === "hotmart" ? (
        <>
          <div className="sectionHeader">
            <div>
              <div className="sectionTitle">Hotmart • Tech</div>
              <div className="sectionNote">Duas listas: +Quentes e +Queridos.</div>
            </div>

            <PillTabs<HotmartTab>
              value={hotmartTab}
              onChange={setHotmartTab}
              options={[
                { value: "quentes", label: "+ Quentes" },
                { value: "queridos", label: "+ Queridos" },
              ]}
            />
          </div>

          <div className="card" style={{ padding: 14 }}>
            {hotmartTab === "quentes" ? (
              <LinkList items={data.hotmart.hot} query={query} accent="green" />
            ) : (
              <LinkList items={data.hotmart.favorites} query={query} accent="lilac" />
            )}
          </div>
        </>
      ) : null}

      {top === "kiwify" ? (
        <>
          <div className="sectionHeader">
            <div>
              <div className="sectionTitle">Kiwify • Tech</div>
              <div className="sectionNote">Lista única de afiliados 2026.</div>
            </div>
          </div>

          <div className="card" style={{ padding: 14 }}>
            <LinkList items={data.kiwify.items} query={query} accent="gold" />
          </div>
        </>
      ) : null}

      <footer className="footer">
        <div className="divider" />
        <div>
          © Olimpia Shakur • Flow Shop — Catálogo Tech e Destaque Copa do Mundo 2026.
          <br />
          {affiliateDisclosure}
        </div>
      </footer>
    </main>
  );
}
