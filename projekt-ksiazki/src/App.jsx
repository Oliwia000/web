import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Nawigacja from "./components/Nawigacja";
import KategoriaBoczna from "./components/KategoriaBoczna";
import ListaKsiazek from "./components/ListaKsiazek";
import SzczegolyKsiazki from "./components/SzczegolyKsiazki";
import ONas from "./components/ONas";
import { wszystkieKsiazki } from "./data/daneKsiazek";
import "./styles/style.css";

function AppContent() {
  const [wybranaKategoria, setWybranaKategoria] = useState(null);
  const [query, setQuery] = useState("");
  const [ksiazkiLosowe, setKsiazkiLosowe] = useState([]);

  const location = useLocation();

  
  useEffect(() => {
    if (location.pathname === "/") {
      const shuffled = [...wszystkieKsiazki].sort(() => 0.5 - Math.random());
      setKsiazkiLosowe(shuffled.slice(0, 12)); 
    }
  }, [location.pathname]);

  const handleWyszukaj = (searchQuery) => {
    setQuery(searchQuery);
  };

  // Jeśli nie ma wyszukiwania ani kategorii – wyświetlamy losowe książki, w przeciwnym razie filtrujemy
 
  const ksiazkiDoWyswietlenia =
    query === "" && !wybranaKategoria
      ? ksiazkiLosowe
      : wszystkieKsiazki.filter((ksiazka) => {
          return (
            (ksiazka.tytul.toLowerCase().includes(query.toLowerCase()) ||
              ksiazka.autor.toLowerCase().includes(query.toLowerCase()) ||
              ksiazka.wydawnictwo.toLowerCase().includes(query.toLowerCase())) &&
            (wybranaKategoria
              ? ksiazka.kategorie.includes(wybranaKategoria)
              : true)
          );
        });

  return (
    <div className="app-container">
      <div className="header-banner">Znajdź coś dla siebie</div>
      <Nawigacja onWyszukaj={handleWyszukaj} />
      <div className="main-content">
        {/* Sidebar z kategoriami – zawsze widoczny */}
        <KategoriaBoczna wybierzKategorie={setWybranaKategoria} />
        <Routes>
          <Route
            path="/"
            element={<ListaKsiazek ksiazki={ksiazkiDoWyswietlenia} />}
          />
          <Route path="/ksiazka/:id" element={<SzczegolyKsiazki />} />
          <Route
            path="/o-nas"
            element={<ONas ksiazki={ksiazkiDoWyswietlenia} />}
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
