"use client";

import React from "react";

export function PillTabs<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="tabs" role="tablist" aria-label="Navegação">
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            className={"tab" + (active ? " active" : "")}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
