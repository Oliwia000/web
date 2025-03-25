import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { wszystkieKsiazki } from "../data/daneKsiazek";
import "../styles/style.css";

const SzczegolyKsiazki = () => {
  const { id } = useParams();
  const [ksiazka, setKsiazka] = useState(null);
  const location = useLocation();
  const { kategoria } = location.state || {};

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
      <div className="category-links">
        {kategoria && (
          <Link to="/" onClick={() => console.log("Filtracja po kategorii", kategoria)}>
            Zobacz książki w kategorii {kategoria}
          </Link>
        )}
      </div>
    </div>
  );
};

export default SzczegolyKsiazki;
