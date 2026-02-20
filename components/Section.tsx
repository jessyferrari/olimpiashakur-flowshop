import type { PlatformSection } from "@/lib/links";

function formatNumber(n: number) {
  // 1..9 => 01..09 | 10 => 10 | 100 => 100
  return String(n).padStart(2, "0");
}

export default function Section({ section }: { section: PlatformSection }) {
  const badgeClass = `badge ${section.badgeVariant}`;

  return (
    <div className="card" id={section.key}>
      <div className="sectionTitle">
        <h2>{section.name}</h2>
        <span className={badgeClass}>Instalação + Links</span>
      </div>

      <ol className="steps">
        {section.installSteps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      {section.groups.map((group, gidx) => (
        <div key={gidx} className="group">
          <div className="groupHeader">
            <h3 className="groupTitle">{group.title}</h3>
            <span className="groupCount">{group.links.length} links</span>
          </div>

          <ul className="list">
            {group.links.map((item, idx) => {
              const num = formatNumber(idx + 1);
              const title = item.title?.trim() || `Link ${num}`;

              return (
                <li className="item" key={`${gidx}-${idx}`}>
                  <div className="num">{num}</div>

                  <div className="itemMain">
                    <div className="itemTitle">{title}</div>
                    <div className="itemUrl">{item.url}</div>
                  </div>

                  <a className="button" href={item.url} target="_blank" rel="noreferrer">
                    Abrir
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
