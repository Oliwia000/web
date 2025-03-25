// StronaGlowna.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { wszystkieKsiazki } from "../data/daneKsiazek";
import "../styles/style.css";

const StronaGlowna = () => {
  const [losoweKsiazki, setLosoweKsiazki] = useState([]);

  // Załaduj losowe książki po załadowaniu komponentu
  useEffect(() => {
    const shuffled = [...wszystkieKsiazki].sort(() => 0.5 - Math.random());
    setLosoweKsiazki(shuffled.slice(0, 12)); // 12 losowych książek
  }, []);

  return (
    <div className="strona-glowna">
      <h2>12 Losowych Książek</h2>
      <div className="lista-ksiazek">
        {losoweKsiazki.map((ksiazka) => (
          <div key={ksiazka.id} className="ksiazka">
            <Link to={`/ksiazka/${ksiazka.id}`}>
              <img src={ksiazka.okladka} alt={ksiazka.tytul} />
              <h3>{ksiazka.tytul}</h3>
              <p>{ksiazka.autor}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StronaGlowna;
