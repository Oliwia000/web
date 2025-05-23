import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import Nawigacja from "./components/Nawigacja";
import KategoriaBoczna from "./components/KategoriaBoczna";
import ListaKsiazek from "./components/ListaKsiazek";
import StronaGlowna from "./components/StronaGlowna";
import SzczegolyKsiazki from "./components/SzczegolyKsiazki";
import ONas from "./components/ONas";
import { wszystkieKsiazki } from "./data/daneKsiazek";
import "./styles/style.css";

function AppContent() {
  const [searchParams] = useSearchParams();
  const [wybranaKategoria, setWybranaKategoria] = useState(
    searchParams.get("kategoria") || null
  );
  const [query, setQuery] = useState(searchParams.get("search") || "");
  const [ksiazkiLosowe, setKsiazkiLosowe] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const shuffled = [...wszystkieKsiazki].sort(() => 0.5 - Math.random());
      setKsiazkiLosowe(shuffled.slice(0, 12));
    }
  }, [location.pathname]);

  useEffect(() => {
    const params = {};
    if (wybranaKategoria) params.kategoria = wybranaKategoria;
    if (query) params.search = query;
    const sp = new URLSearchParams(params);
    window.history.replaceState({}, "", `?${sp.toString()}`);
  }, [wybranaKategoria, query]);

  const handleWyszukaj = (searchQuery) => {
    setQuery(searchQuery);
  };

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
        <KategoriaBoczna wybierzKategorie={setWybranaKategoria} />

        <Routes>
          <Route
            path="/"
            element={<StronaGlowna ksiazki={wszystkieKsiazki} />}
          />
          <Route
            path="/lista"
            element={<ListaKsiazek ksiazki={ksiazkiDoWyswietlenia} />}
          />
          <Route path="/ksiazka/:id" element={<SzczegolyKsiazki />} />
          <Route path="/o-nas" element={<ONas />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
