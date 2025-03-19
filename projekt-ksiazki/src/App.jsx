import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nawigacja from "./components/Nawigacja";
import KategoriaBoczna from "./components/KategoriaBoczna";
import ListaKsiazek from "./components/ListaKsiazek";
import SzczegolyKsiazki from "./components/SzczegolyKsiazki";
import Wyszukiwarka from "./components/Wyszukiwarka"; // Zaimportuj komponent Wyszukiwarka
import { wszystkieKsiazki } from "./data/daneKsiazek"; // Załaduj dane książek

function App() {
  const [wybranaKategoria, setWybranaKategoria] = useState(null);
  const [query, setQuery] = useState(""); // Dodaj stan do przechowywania zapytania

  // Funkcja do obsługi wyszukiwania
  const handleWyszukaj = (searchQuery) => {
    setQuery(searchQuery);
  };

  // Filtruj książki na podstawie wyszukiwania i wybranej kategorii
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
        <header>
          <h1>Znajdź co dla siebie</h1> {/* Nowy nagłówek */}
        </header>
        <div className="main-content">
          <div className="menu-and-search">
            <Nawigacja />
            {/* Wyszukiwarka na prawej stronie */}
            <Wyszukiwarka onWyszukaj={handleWyszukaj} />
          </div>
          <div className="kategoria-content">
            <KategoriaBoczna wybierzKategorie={setWybranaKategoria} />
            <Routes>
              <Route
                path="/"
                element={<ListaKsiazek ksiazki={ksiazkiDoWyswietlenia} wybranaKategoria={wybranaKategoria} />}
              />
              <Route path="/ksiazka/:id" element={<SzczegolyKsiazki />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
