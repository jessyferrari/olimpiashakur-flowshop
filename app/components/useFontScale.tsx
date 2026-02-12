"use client";

import React from "react";

const MIN = 0.9;
const MAX = 1.2;
const STEP = 0.1;

function clamp(n: number) {
  return Math.max(MIN, Math.min(MAX, n));
}

export function useFontScale() {
  const [scale, setScale] = React.useState<number>(1);

  React.useEffect(() => {
    const saved = localStorage.getItem("os_font_scale");
    const initial = saved ? clamp(Number(saved)) : 1;
    setScale(initial);
    document.documentElement.style.setProperty("--scale", String(initial));
  }, []);

  const apply = (next: number) => {
    const s = clamp(Math.round(next * 10) / 10);
    setScale(s);
    localStorage.setItem("os_font_scale", String(s));
    document.documentElement.style.setProperty("--scale", String(s));
  };

  return {
    scale,
    inc: () => apply(scale + STEP),
    dec: () => apply(scale - STEP),
    reset: () => apply(1),
  };
}
