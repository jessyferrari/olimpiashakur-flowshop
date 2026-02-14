"use client";

import Image from "next/image";
import links from "../data/links.json";
import { useMemo, useState } from "react";

type Item = { title: string; url: string };

type TabKey = "copa" | "amazon" | "hotmart" | "kiwify";

function safeOpen(url: string) {
  // Evita “tela em branco” em alguns navegadores móveis:
  // 1) tenta abrir em nova aba; 2) se bloquear, abre na mesma aba.
  try {
    const w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w) window.location.href = url;
  } catch {
    window.location.href = url;
  }
}

export default function Page() {
  const [tab, setTab] = useState<TabKey>("copa");
  const [subtab, setSubtab] = useState<string>(() => Object.keys((links as any)[tab].subtabs)[0] ?? "");
  const [q, setQ] = useState("");
  const [scale, setScale] = useState(0.95);

  // Quando trocar a tab principal, sempre posiciona no 1º subtópico
  const tabs = useMemo(() => ([
    { key: "copa" as const, label: "Destaque · Copa 2026" },
    { key: "amazon" as const, label: "Amazon · Tech" },
    { key: "hotmart" as const, label: "Hotmart · Tech" },
    { key: "kiwify" as const, label: "Kiwify · Tech" },
  ]), []);

  const active = (links as any)[tab] as { subtabs: Record<string, Item[]>; title: string };
  const subtabs = Object.keys(active.subtabs);

  const items = active.subtabs[subtab] ?? [];

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter((it) => it.title.toLowerCase().includes(term) || it.url.toLowerCase().includes(term));
  }, [items, q]);

  // Garantia de subtab válida ao trocar tab
  useMemo(() => {
    if (!subtabs.includes(subtab)) setSubtab(subtabs[0] ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <main className="container" style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>
      <header className="header">
        <Image className="logo" src="/logo.png" alt="Olimpia Shakur Logo" width={240} height={240} priority />

        <div className="titleRow">
          <h1 className="h1">Olimpia Shakur · Flow Shop</h1>
        </div>

        <p className="subtitle">{(links as any).ui?.subtitle ?? "Copa do Mundo 2026 + Tech"}</p>

        <div className="controls">
          <input
            className="search"
            placeholder="Buscar por título ou link"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Buscar"
          />
          <button className="pill" onClick={() => setScale((s) => Math.max(0.85, +(s - 0.05).toFixed(2)))}>A-</button>
          <button className="pill" onClick={() => setScale((s) => Math.min(1.05, +(s + 0.05).toFixed(2)))}>A+</button>
          <span className="count">{filtered.length} itens</span>
        </div>

        <section className="notice" aria-label="Avisos">
          <div className="noticeInner">
            <div className="noticeTitle">{(links as any).ui?.noticeTitle ?? "Avisos"}</div>
            <div className="noticeText">{(links as any).ui?.noticeText ?? "Avisos serão atualizados aqui."}</div>
          </div>
        </section>

        <nav className="tabsRow" aria-label="Seções">
          {tabs.map((t) => (
            <button
              key={t.key}
              className={"pill " + (tab === t.key ? "pillActive" : "")}
              onClick={() => {
                setTab(t.key);
                const first = Object.keys((links as any)[t.key].subtabs)[0] ?? "";
                setSubtab(first);
                setQ("");
              }}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <div className="tabsRow" aria-label="Categorias">
          {subtabs.map((st) => (
            <button
              key={st}
              className={"pill " + (st === subtab ? "pillActive" : "")}
              onClick={() => {
                setSubtab(st);
                setQ("");
              }}
            >
              {st}
            </button>
          ))}
        </div>
      </header>

      <section className="list" aria-label="Lista de itens">
        {filtered.map((it) => (
          <article className="card" key={it.url}>
            <div>
              <div className="cardTitle">{it.title}</div>
              <div className="cardUrl">{new URL(it.url).hostname}</div>
            </div>
            <button className="openBtn" onClick={() => safeOpen(it.url)}>Abrir</button>
          </article>
        ))}
      </section>

      <div className="footerHint">
        Dica: para atualizar os avisos, edite <b>data/links.json</b> (campos <b>ui.noticeTitle</b> e <b>ui.noticeText</b>).
      </div>
    </main>
  );
}
