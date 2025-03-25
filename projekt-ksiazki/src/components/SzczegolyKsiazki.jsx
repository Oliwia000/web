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
        <h4>{ksiazka.autor}</h4>
        <p>{ksiazka.wydawnictwo}</p>
        <p>{ksiazka.opis}</p>
      </div>
      <img src={ksiazka.okladka} alt={ksiazka.tytul} />
    </div>
  );
};

export default SzczegolyKsiazki;
