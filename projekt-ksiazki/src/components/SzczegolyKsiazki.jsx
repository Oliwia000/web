import React from "react";
import { useParams } from "react-router-dom";
import { wszystkieKsiazki } from "../data/daneKsiazek";

const SzczegolyKsiazki = () => {
  const { id } = useParams();
  const ksiazka = wszystkieKsiazki.find((k) => k.id === parseInt(id));

  if (!ksiazka) {
    return <h2>Nie znaleziono książki.</h2>;
  }

  return (
    <div className="szczegoly-ksiazki">
      <img src={ksiazka.okladka} alt={ksiazka.tytul} />
      <div className="info">
        <h2>{ksiazka.tytul}</h2>
        <p><strong>Autor:</strong> {ksiazka.autor}</p>
        <p><strong>Wydawnictwo:</strong> {ksiazka.wydawnictwo}</p>
        <p><strong>Cykl:</strong> {ksiazka.cykl || "Brak"}</p>
        <p>{ksiazka.opis}</p>
      </div>
    </div>
  );
};

export default SzczegolyKsiazki;
