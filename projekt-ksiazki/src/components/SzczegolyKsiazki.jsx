import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { wszystkieKsiazki } from "../data/daneKsiazek";

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
        <p>{ksiazka.opis}</p>
      </div>
      <img src={ksiazka.okladka} alt={ksiazka.tytul} />
    </div>
  );
};

export default SzczegolyKsiazki;
