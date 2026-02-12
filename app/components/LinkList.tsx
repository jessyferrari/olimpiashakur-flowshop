"use client";

import React from "react";
import type { LinkItem } from "./types";

function safeHost(url: string) {
  try {
    const u = new URL(url);
    return u.host.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function LinkList({
  items,
  query,
  accent = "gold",
}: {
  items: LinkItem[];
  query: string;
  accent?: "gold" | "green" | "lilac";
}) {
  const q = query.trim().toLowerCase();
  const filtered = q
    ? items.filter((it) => it.title.toLowerCase().includes(q) || it.url.toLowerCase().includes(q))
    : items;

  const focusClass =
    accent === "green" ? "focusRingGreen" : accent === "lilac" ? "focusRingLilac" : "";

  return (
    <>
      <div className="kpi">
        <span>
          Itens: <b style={{ color: "var(--text)" }}>{filtered.length}</b>
          {filtered.length !== items.length ? (
            <span style={{ color: "var(--muted2)" }}> (de {items.length})</span>
          ) : null}
        </span>
      </div>

      <div className="divider" />

      <div className="grid">
        {filtered.map((it, idx) => (
          <div key={it.url + idx} className="item">
            <div style={{ minWidth: 0 }}>
              <div className="itemTitle">{it.title}</div>
              <div className="itemMeta">{safeHost(it.url)}</div>
            </div>
            <a
              className={"primaryBtn " + focusClass}
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${it.title} em nova aba`}
            >
              Abrir
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
