// src/components/TargiKsiążek.jsx
import React from 'react';

function TargiKsiążek({ rok, wydarzenia }) {
  return (
    <div className="wydarzenia-lista">
      {wydarzenia.targi[rok]?.map((wydarzenie, index) => (
        <div key={index} className="wydarzenie">
          <div className="data">{wydarzenie.data}</div>
          <div className="nazwa">{wydarzenie.nazwa}</div>
          <div className="miejsce">{wydarzenie.miejsce}</div>
          <div className="godziny">{wydarzenie.godziny}</div>
          <p>{wydarzenie.opis}</p>
        </div>
      ))}
    </div>
  );
}

export default TargiKsiążek;
