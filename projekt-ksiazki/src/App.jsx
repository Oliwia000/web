import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nawigacja from "./components/Nawigacja";
import KategoriaBoczna from "./components/KategoriaBoczna";
import ListaKsiazek from "./components/ListaKsiazek";
import SzczegolyKsiazki from "./components/SzczegolyKsiazki";
import ONas from "./components/ONas";
import { wszystkieKsiazki } from "./data/daneKsiazek";
import "./styles/style.css";

function App() {
  const [wybranaKategoria, setWybranaKategoria] = useState(null);
  const [query, setQuery] = useState("");
  const [ksiazkiLosowe, setKsiazkiLosowe] = useState([]);

  // Losowy wybór książek (12 sztuk) przy starcie aplikacji
  useEffect(() => {
    const shuffled = [...wszystkieKsiazki].sort(() => 0.5 - Math.random());
    setKsiazkiLosowe(shuffled.slice(0, 12));
  }, []);

  const handleWyszukaj = (searchQuery) => {
    setQuery(searchQuery);
  };

  // Filtrowanie książek wg wyszukiwania i wybranej kategorii
  const ksiazkiDoWyswietlenia = wszystkieKsiazki.filter((ksiazka) => {
    return (
      (ksiazka.tytul.toLowerCase().includes(query.toLowerCase()) ||
        ksiazka.autor.toLowerCase().includes(query.toLowerCase()) ||
        ksiazka.wydawnictwo.toLowerCase().includes(query.toLowerCase())) &&
      (wybranaKategoria ? ksiazka.kategorie.includes(wybranaKategoria) : true)
    );
  });

  return (
    <Router>
      <div className="app-container">
        <div className="header-banner">Znajdź coś dla siebie</div>
        <Nawigacja onWyszukaj={handleWyszukaj} />
        <div className="main-content">
          <KategoriaBoczna wybierzKategorie={setWybranaKategoria} />
          <Routes>
            <Route path="/" element={<ListaKsiazek ksiazki={ksiazkiDoWyswietlenia} />} />
            <Route path="/ksiazka/:id" element={<SzczegolyKsiazki />} />
            <Route path="/o-nas" element={<ONas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
