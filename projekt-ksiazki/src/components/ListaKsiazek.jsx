import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const ListaKsiazek = ({ ksiazki }) => {
  return (
    <div className="lista-ksiazek">
      {ksiazki.map((k) => (
        <div key={k.id} className="ksiazka">
          <img src={k.okladka} alt={k.tytul} />
          <h4>{k.tytul}</h4>
          <p className="opis">{k.opis}</p>
          <Link to={`/ksiazka/${k.id}`}>
            Zobacz więcej
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListaKsiazek;
