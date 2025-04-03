// src/components/Wydarzenia.jsx
import React, { useState } from "react";
import TargiKsiążek from './TargiKsiążek';
import InneWydarzenia from './InneWydarzenia';

function Wydarzenia() {
  const [wybranaSekcja, setWybranaSekcja] = useState("targi");
  const [wybranyRok, setWybranyRok] = useState(2025);

  const wydarzenia = {
    targi: {
      2025: [
        {
          data: "28 maja",
          nazwa: "Targi Vivelo",
          miejsce: "Warszawa, ul. Kwiatowa 8",
          godziny: "10:00-18:00",
          opis: "Bardzo popularne wydarzenie, będą książki z każdej kategorii."
        },
        // inne targi na 2025
      ],
      2024: [
        {
          data: "15 sierpnia",
          nazwa: "Red Shirt Event",
          miejsce: "Kraków, ul. Główna 12",
          godziny: "9:00-17:00",
          opis: "Festiwal książek o tematyce kryminalnej."
        },
        // inne targi na 2024
      ],
    },
    inne: {
      2025: [
        {
          data: "5 czerwca",
          nazwa: "Spotkanie z autorem",
          miejsce: "Kraków, ul. Lwowska 7",
          godziny: "18:00-20:00",
          opis: "Spotkanie z popularnym autorem literatury sensacyjnej."
        },
        // inne wydarzenia na 2025
      ],
      2024: [
        {
          data: "22 listopada",
          nazwa: "Warsztaty literackie",
          miejsce: "Wrocław, ul. Kwiatowa 3",
          godziny: "10:00-14:00",
          opis: "Warsztaty twórczego pisania prowadzone przez znanego autora."
        },
        // inne wydarzenia na 2024
      ],
    }
  };

  const wybierzRok = (rok) => {
    setWybranyRok(rok);
  };

  const wybierzSekcje = (sekcja) => {
    setWybranaSekcja(sekcja);
  };

  return (
    <div className="wydarzenia">
      <h2>Wydarzenia książkowe</h2>
      <p>Znajdziesz tu wydarzenia związane z książkami, autorami i gatunkami.</p>

      {/* Przełączanie pomiędzy sekcjami */}
      <div className="sekcje">
        <button onClick={() => wybierzSekcje("targi")} className={wybranaSekcja === "targi" ? "active" : ""}>Targi książek</button>
        <button onClick={() => wybierzSekcje("inne")} className={wybranaSekcja === "inne" ? "active" : ""}>Inne wydarzenia</button>
      </div>

      {/* Przełącznik lat */}
      <div className="roki">
        <button onClick={() => wybierzRok(2025)}>2025</button>
        <button onClick={() => wybierzRok(2024)}>2024</button>
        <button onClick={() => wybierzRok(2023)}>2023</button>
        {/* Dodaj więcej przycisków dla lat */}
      </div>

      {/* Wyświetlanie wydarzeń na podstawie wybranej sekcji i roku */}
      {wybranaSekcja === "targi" && <TargiKsiążek rok={wybranyRok} wydarzenia={wydarzenia} />}
      {wybranaSekcja === "inne" && <InneWydarzenia rok={wybranyRok} wydarzenia={wydarzenia} />}
    </div>
  );
}

export default Wydarzenia;
