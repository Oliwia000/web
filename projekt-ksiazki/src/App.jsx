import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nawigacja from "./components/Nawigacja";
import KategoriaBoczna from "./components/KategoriaBoczna";
import ListaKsiazek from "./components/ListaKsiazek";
import SzczegolyKsiazki from "./components/SzczegolyKsiazki";
import Wyszukiwarka from "./components/Wyszukiwarka"; 
import { wszystkieKsiazki } from "./data/daneKsiazek"; 

function App() {
  const [wybranaKategoria, setWybranaKategoria] = useState(null);
  const [query, setQuery] = useState(""); // Dodaj stan do przechowywania zapytania


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
        <Nawigacja />
        <div className="main-content">
          <KategoriaBoczna wybierzKategorie={setWybranaKategoria} />
          {}
          <Wyszukiwarka onWyszukaj={handleWyszukaj} />
          <Routes>
            <Route
              path="/"
              element={<ListaKsiazek ksiazki={ksiazkiDoWyswietlenia} wybranaKategoria={wybranaKategoria} />}
            />
            <Route path="/ksiazka/:id" element={<SzczegolyKsiazki />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
