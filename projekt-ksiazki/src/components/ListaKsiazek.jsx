import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const ListaKsiazek = ({ ksiazki, wybranaKategoria }) => {
  return (
    <div className="lista-ksiazek">
      {ksiazki.map((ksiazka) => (
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
