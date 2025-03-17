import React, { useState } from "react";
import KategoriaBoczna from "./KategoriaBoczna";
import ListaKsiazek from "./ListaKsiazek";
import "../styles/style.css";

const AplikacjaKsiazki = () => {
  const [wybranaKategoria, setWybranaKategoria] = useState(null);

  return (
    <div className="aplikacja-ksiazki">
      <KategoriaBoczna onSelectCategory={setWybranaKategoria} />
      <ListaKsiazek wybranaKategoria={wybranaKategoria} />
    </div>
  );
};

export default AplikacjaKsiazki;
