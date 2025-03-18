import React from "react";
import { Link } from "react-router-dom";
import Wyszukiwarka from "./Wyszukiwarka";
import "../styles/style.css";

const ListaKsiazek = ({ ksiazki, wybranaKategoria }) => {
  const ksiazkiDoWyswietlenia = wybranaKategoria
    ? ksiazki.filter((ksiazka) => ksiazka.kategorie.includes(wybranaKategoria))
    : ksiazki;

  return (
    <div className="lista-ksiazek">
      {ksiazkiDoWyswietlenia.map((ksiazka) => (
        <div key={ksiazka.id} className="ksiazka">
          <img src={ksiazka.okladka} alt={ksiazka.tytul} />
          <h4>{ksiazka.tytul}</h4>
          <p>{ksiazka.autor}</p>
          <Link to={`/ksiazka/${ksiazka.id}`}>Zobacz więcej</Link>
        </div>
      ))}
    </div>
  );
};

export default ListaKsiazek;
