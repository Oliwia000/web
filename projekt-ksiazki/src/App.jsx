import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nawigacja from "./components/Nawigacja";
import KategoriaBoczna from "./components/KategoriaBoczna";
import ListaKsiazek from "./components/ListaKsiazek";
import SzczegolyKsiazki from "./components/SzczegolyKsiazki";
import { wszystkieKsiazki } from "./data/daneKsiazek";

function App() {
  const [wybranaKategoria, setWybranaKategoria] = useState(null);
  const [query, setQuery] = useState("");
  const [ksiazkiLosowe, setKsiazkiLosowe] = useState([]);

  useEffect(() => {
    const shuffled = [...wszystkieKsiazki].sort(() => 0.5 - Math.random());
    setKsiazkiLosowe(shuffled.slice(0, 10));
  }, []);

  const handleWyszukaj = (searchQuery) => {
    setQuery(searchQuery);
  };

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
            <Route path="/" element={<ListaKsiazek ksiazki={ksiazkiLosowe} />} />
            <Route path="/ksiazka/:id" element={<SzczegolyKsiazki />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
