
import "./globals.css";

export default function Home() {
  const links = [
    { title: "Acessório 001", url: "https://amzn.to/example1" },
    { title: "Acessório 002", url: "https://amzn.to/example2" }
  ];

  return (
    <div className="container">
      <div className="logo">
        <img src="/logo.png" alt="Olimpia Shakur Logo" />
      </div>

      <div className="banner">
        <span className="neon-lilac">Aviso editável</span>
        <p className="neon-green">Você pode alterar este texto direto no código.</p>
      </div>

      <div className="tabs">
        <button className="tab-btn">Acessórios</button>
        <button className="tab-btn">Vestuário</button>
      </div>

      {links.map((item, index) => (
        <div key={index} className="card">
          <span>{item.title}</span>
          <a href={item.url} target="_blank">
            <button className="open-btn">Abrir</button>
          </a>
        </div>
      ))}
    </div>
  );
}
