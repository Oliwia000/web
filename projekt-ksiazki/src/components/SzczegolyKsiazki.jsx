import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { wszystkieKsiazki } from "../data/daneKsiazek";
import "../styles/style.css";

const SzczegolyKsiazki = () => {
  const { id } = useParams();
  const [ksiazka, setKsiazka] = useState(null);

  useEffect(() => {
    const ksiazkaData = wszystkieKsiazki.find((ks) => ks.id === parseInt(id));
    setKsiazka(ksiazkaData);
  }, [id]);

  if (!ksiazka) return <div>Ładowanie...</div>;

  return (
    <div className="szczegoly-ksiazki">
      <div className="info">
        <h2>{ksiazka.tytul}</h2>
        <p><strong>Autor:</strong> {ksiazka.autor}</p>
        <p><strong>Wydawnictwo:</strong> {ksiazka.wydawnictwo}</p>
        <p><strong>Cykle:</strong> {ksiazka.cykl ? ksiazka.cykl : "Jednotomówka"}</p>
        {ksiazka.opis.split("=") // Dzielimy tekst po symbolu "=" i renderujemy osobne akapity
          .map((fragment, index) => (
            <p key={index}>{fragment.trim()}</p> // Usuwamy nadmiarowe spacje
        ))}
      </div>

      <img src={ksiazka.okladka} alt={ksiazka.tytul} />
    </div>
  );
};

export default SzczegolyKsiazki;
