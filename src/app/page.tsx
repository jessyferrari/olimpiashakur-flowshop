import Image from "next/image";
import { PLATFORMS } from "@/data/affiliateLinks";

function formatIndex(i: number) {
  const n = i + 1;
  return n < 10 ? `0${n}` : `${n}`;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="px-6 pt-10 pb-6">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="Olimpia Shakur" width={56} height={56} priority />
          <div>
            <h1 className="text-2xl font-semibold tracking-wide">
              Olimpia Shakur • Afiliados Tech
            </h1>
            <p className="text-sm opacity-80">
              Curadoria 2026 • Amazon • Mercado Livre • Hotmart • Kiwify
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {PLATFORMS.map((p) => (
            <a
              key={p.platform}
              href={`#${p.platform.replace(/\s+/g, "-").toLowerCase()}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
            >
              {p.platform}
            </a>
          ))}
        </div>
      </header>

      <section className="px-6 pb-14 space-y-10">
        {PLATFORMS.map((p) => (
          <div
            key={p.platform}
            id={p.platform.replace(/\s+/g, "-").toLowerCase()}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={p.brandLogo}
                  alt={p.platform}
                  width={44}
                  height={44}
                  className="rounded-xl"
                />
                <div>
                  <h2 className="text-xl font-semibold">{p.platform}</h2>
                  {p.subtitle ? (
                    <p className="text-sm opacity-80">{p.subtitle}</p>
                  ) : null}
                </div>
              </div>

              {/* Dourado neon */}
              <div className="h-3 w-3 rounded-full bg-[#D4AF37]/80 shadow-[0_0_18px_rgba(212,175,55,0.9)]" />
            </div>

            <div className="mt-5 space-y-6">
              {p.categories.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl bg-black/40 p-4 border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold tracking-wide">
                      {c.title}
                    </h3>

                    {/* Lilás neon + Verde neon */}
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-fuchsia-400/80 shadow-[0_0_14px_rgba(217,70,239,0.9)]" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {c.items.map((it, i) => (
                      <a
                        key={`${it.url}-${i}`}
                        href={it.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold">
                            {formatIndex(i)}
                          </span>

                          {/* Lilás neon */}
                          <span className="h-2 w-2 rounded-full bg-fuchsia-400/80 shadow-[0_0_14px_rgba(217,70,239,0.9)]" />
                        </div>

                        <div className="mt-2 text-xs opacity-80 break-all">
                          {it.url}
                        </div>

                        <div className="mt-3 text-sm font-medium">
                          Abrir link →
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="px-6 pb-10 text-xs opacity-70">
        <p>
          Aviso: Este mini-app exibe links de afiliado fornecidos por você. Logos aqui são placeholders em SVG para evitar
          qualquer inconsistência. Você pode substituir por imagens oficiais em <span className="opacity-90">/public/brands</span>.
        </p>
      </footer>
    </main>
  );
}
