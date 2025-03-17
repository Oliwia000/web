import React from "react";
import { useParams } from "react-router-dom";
import { wszystkieKsiazki } from "../data/daneKsiazek"; // Załaduj dane książek
import "../styles/style.css";

const SzczegolyKsiazki = () => {
  const { id } = useParams();
  const ksiazka = wszystkieKsiazki.find((ksiazka) => ksiazka.id === parseInt(id));

  if (!ksiazka) {
    return <h2>Nie znaleziono książki</h2>;
  }

  return (
    <div className="szczegoly-ksiazki">
      <img src={ksiazka.okladka} alt={ksiazka.tytul} />
      <h2>{ksiazka.tytul}</h2>
      <h3>{ksiazka.autor}</h3>
      <p><strong>Wydawnictwo:</strong> {ksiazka.wydawnictwo}</p>
      <p><strong>Kategorie:</strong> {ksiazka.kategorie.join(", ")}</p>
      <p>{ksiazka.opis}</p>
    </div>
  );
};

export default SzczegolyKsiazki;
