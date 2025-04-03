// src/components/InneWydarzenia.jsx
import React from 'react';

function InneWydarzenia({ rok, wydarzenia }) {
  return (
    <div className="wydarzenia-lista">
      {wydarzenia.inne[rok]?.map((wydarzenie, index) => (
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

export default InneWydarzenia;
