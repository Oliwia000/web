import React, { useState } from "react";

function Wydarzenia() {
  const [rodzajWydarzenia, setRodzajWydarzenia] = useState("targi");

  const wydarzeniaTargi = [
    { data: "2025-05-28", nazwa: "Targi Vivelo", miejsce: "Warszawa", godzina: "10-18", opis: "Targi książek w Warszawie, różnorodne gatunki." },
    // Dodaj więcej wydarzeń
  ];

  const wydarzeniaInne = [
    { data: "2025-06-15", nazwa: "Red Shirt Book", miejsce: "Kraków", godzina: "09-17", opis: "Spotkanie autorskie." },
    // Dodaj więcej wydarzeń
  ];

  const wydarzenia = rodzajWydarzenia === "targi" ? wydarzeniaTargi : wydarzeniaInne;

  return (
    <div className="wydarzenia">
      <button onClick={() => setRodzajWydarzenia("targi")}>Targi książek</button>
      <button onClick={() => setRodzajWydarzenia("inne")}>Inne wydarzenia</button>

      <ul>
        {wydarzenia.map((wydarzenie, index) => (
          <li key={index}>
            <strong>{wydarzenie.nazwa}</strong> ({wydarzenie.data}) - {wydarzenie.miejsce} <br />
            {wydarzenie.godzina} <br />
            <em>{wydarzenie.opis}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wydarzenia;
