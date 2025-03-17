import React from "react";
import { Link } from "react-router-dom";

const ListaKsiazek = ({ ksiazki, wybranaKategoria }) => {
  const ksiazkiDoWyswietlenia = wybranaKategoria
    ? ksiazki.filter((ksiazka) => ksiazka.kategorie.includes(wybranaKategoria))
    : ksiazki;

  const randomBooks = [...ksiazki].sort(() => Math.random() - Math.random()).slice(0, 10);

  return (
    <div className="lista-ksiazek">
      <h2>Losowe książki</h2>
      {randomBooks.map((ksiazka) => (
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
