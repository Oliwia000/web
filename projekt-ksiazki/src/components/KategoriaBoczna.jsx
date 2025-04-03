import React, { useState } from "react";
import Wyszukiwarka from "./Wyszukiwarka";

function KategoriaBoczna({ wybierzKategorie }) {
  const [aktywnaKategoria, setAktywnaKategoria] = useState(null);

  const zmienKategorie = (kategoria) => {
    setAktywnaKategoria(kategoria);
    wybierzKategorie(kategoria);
  };

  return (
    <aside className="menu-boczne">
      <h2>Kategorie</h2>
      <Wyszukiwarka onWyszukaj={(searchTerm) => wybierzKategorie(searchTerm)} />
      <ul>
        <li 
          className={!aktywnaKategoria ? "active-category" : ""} 
          onClick={() => zmienKategorie(null)}
        >
          🔄 Wszystkie książki
        </li>
        <li 
          className={aktywnaKategoria === "Kryminał" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Kryminał")}
        >
          🔍 Kryminał
        </li>
        <li 
          className={aktywnaKategoria === "Sensacja" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Sensacja")}
        >
          🔥 Sensacja
        </li>
        <li 
          className={aktywnaKategoria === "Thriller" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Thriller")}
        >
          ⚡ Thriller
        </li>
        <li 
          className={aktywnaKategoria === "Horror" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Horror")}
        >
          👻 Horror
        </li>
        <li 
          className={aktywnaKategoria === "Fantasy" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Fantasy")}
        >
          🧙 Fantasy
        </li>
        <li 
          className={aktywnaKategoria === "Science Fiction" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Science Fiction")}
        >
          🚀 Science Fiction
        </li>
        <li 
          className={aktywnaKategoria === "Romans" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Romans")}
        >
          💖 Romans
        </li>
        <li 
          className={aktywnaKategoria === "Literatura obyczajowa" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Literatura obyczajowa")}
        >
          📚 Literatura obyczajowa/Lektury
        </li>
        <li 
          className={aktywnaKategoria === "Biografia" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Biografia")}
        >
          👤 Biografia
        </li>
        <li 
          className={aktywnaKategoria === "Klasyka" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Klasyka")}
        >
          🏛️ Klasyka
        </li>
        <li 
          className={aktywnaKategoria === "18+" ? "active-category" : ""} 
          onClick={() => zmienKategorie("18+")}
        >
          🔞 18+
        </li>
        <li 
          className={aktywnaKategoria === "16+" ? "active-category" : ""} 
          onClick={() => zmienKategorie("16+")}
        >
          🔞 16+
        </li>
        <li 
          className={aktywnaKategoria === "Literatura młodzieżowa" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Literatura młodzieżowa")}
        >
         📖 Literatura młodzieżowa
        </li>
        <li 
          className={aktywnaKategoria === "Literatura dziecięca" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Literatura dziecięca")}
        >
          👶 Literatura dziecięca
        </li>
        <li 
          className={aktywnaKategoria === "Powieść historyczna" ? "active-category" : ""} 
          onClick={() => zmienKategorie("Powieść historyczna")}
        >
          🏰 Powieść historyczna
        </li>
      </ul>
    </aside>
  );
}

export default KategoriaBoczna;
