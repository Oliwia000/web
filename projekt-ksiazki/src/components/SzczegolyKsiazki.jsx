import React from "react";
import { useParams } from "react-router-dom";
import { wszystkieKsiazki } from "../data/daneKsiazek";

function SzczegolyKsiazki() {
  const { id } = useParams();
  const ksiazka = wszystkieKsiazki.find((ksiazka) => ksiazka.id === parseInt(id));

  if (!ksiazka) {
    return <div>Nie znaleziono książki</div>;
  }

  return (
    <div className="szczegoly-ksiazki">
      <h2>{ksiazka.tytul}</h2>
      <img src={ksiazka.okladka} alt={ksiazka.tytul} />
      <div className="opis">
        <p>{ksiazka.opis}</p>
        <a href="#" className="zobacz-wiecej-btn">
          Zobacz więcej
        </a>
      </div>
    </div>
  );
}

export default SzczegolyKsiazki;
