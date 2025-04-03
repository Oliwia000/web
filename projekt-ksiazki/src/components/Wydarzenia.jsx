import React, { useState } from "react";

function Wydarzenia() {
  const [wybranyRok, setWybranyRok] = useState(null);

  const wydarzenia = {
    2025: [
      { data: "28 maja", nazwa: "Targi Vivelo", miejsce: "Warszawa, ul. Kwiatowa 8", godziny: "10:00-18:00", opis: "Bardzo popularne wydarzenie, będą książki z każdej kategorii." },
      // inne wydarzenia na 2025
    ],
    2024: [
      { data: "15 sierpnia", nazwa: "Red Shirt Event", miejsce: "Kraków, ul. Główna 12", godziny: "9:00-17:00", opis: "Festiwal książek o tematyce kryminalnej." },
      // inne wydarzenia na 2024
    ],
    // Dodaj inne lata i wydarzenia
  };

  const wybierzRok = (rok) => {
    setWybranyRok(rok);
  };

  return (
    <div className="wydarzenia">
      <h2>Wydarzenia książkowe</h2>
      <p>Znajdziesz tu wydarzenia związane z książkami, autorami i gatunkami.</p>

      <div className="roki">
        <button onClick={() => wybierzRok(2025)}>2025</button>
        <button onClick={() => wybierzRok(2024)}>2024</button>
        <button onClick={() => wybierzRok(2023)}>2023</button>
        {/* Dodaj więcej przycisków dla lat */}
      </div>

      {wybranyRok && (
        <div className="wydarzenia-lista">
          {wydarzenia[wybranyRok].map((wydarzenie, index) => (
            <div key={index} className="wydarzenie">
              <div className="data">{wydarzenie.data}</div>
              <div className="nazwa">{wydarzenie.nazwa}</div>
              <div className="miejsce">{wydarzenie.miejsce}</div>
              <div className="godziny">{wydarzenie.godziny}</div>
              <div className="opis">{wydarzenie.opis}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wydarzenia;
