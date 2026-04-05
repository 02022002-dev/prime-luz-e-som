"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50 p-4 flex justify-between">
      <div>
        PRIME <span style={{ color: "gold" }}>LUZ & SOM</span>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#locacao">Locação</a>
        <a href="#eventos">Eventos</a>
        <a href="#contato">Contato</a>
      </div>
    </header>
  );
}