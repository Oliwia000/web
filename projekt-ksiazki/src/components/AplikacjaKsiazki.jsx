import React, { useState } from "react";
import KategoriaBoczna from "./KategoriaBoczna";
import ListaKsiazek from "./ListaKsiazek";
import Wyszukiwarka from "./Wyszukiwarka";

const AplikacjaKsiazki = () => {
  const [wybranaKategoria, setWybranaKategoria] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleWyszukaj = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="aplikacja-ksiazki">
      <Wyszukiwarka onWyszukaj={handleWyszukaj} />
      <KategoriaBoczna wybierzKategorie={setWybranaKategoria} />
      <ListaKsiazek wybranaKategoria={wybranaKategoria} searchQuery={searchQuery} />
    </div>
  );
};

export default AplikacjaKsiazki;
