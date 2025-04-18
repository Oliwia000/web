import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { wszystkieKsiazki } from "../data/daneKsiazek";
import "../styles/style.css";

const SzczegolyKsiazki = () => {
  const { id } = useParams();
  const [ksiazka, setKsiazka] = useState(null);

  useEffect(() => {
    const ksiazkaData = wszystkieKsiazki.find(
      (ks) => ks.id === parseInt(id, 10)
    );
    setKsiazka(ksiazkaData);
  }, [id]);

  if (!ksiazka) return <div>Ładowanie...</div>;

  return (
    <div className="szczegoly-ksiazki">
      <div className="info">
        <h2>{ksiazka.tytul}</h2>
        <p><strong>Autor:</strong> {ksiazka.autor}</p>
        <p><strong>Wydawnictwo:</strong> {ksiazka.wydawnictwo}</p>
        <p><strong>Cykl:</strong> {ksiazka.cykl || "Jednotomówka"}</p>
        {ksiazka.opis.split("=").map((fragment, idx) => (
          <p key={idx}>{fragment.trim()}</p>
        ))}
      </div>
      <img src={ksiazka.okladka} alt={ksiazka.tytul} />
    </div>
  );
};

export default SzczegolyKsiazki;
