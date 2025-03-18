import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nawigacja from "./components/Nawigacja";
import KategoriaBoczna from "./components/KategoriaBoczna";
import ListaKsiazek from "./components/ListaKsiazek";
import SzczegolyKsiazki from "./components/SzczegolyKsiazki";
import { wszystkieKsiazki } from "./data/daneKsiazek"; 

function App() {
  const [wybranaKategoria, setWybranaKategoria] = useState(null);

  return (
    <Router>
      <div className="app-container">
        <Nawigacja />
        <div className="main-content">
          <KategoriaBoczna wybierzKategorie={setWybranaKategoria} />
          <Routes>
            <Route
              path="/"
              element={<ListaKsiazek ksiazki={wszystkieKsiazki} wybranaKategoria={wybranaKategoria} />}
            />
            <Route path="/ksiazka/:id" element={<SzczegolyKsiazki />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
