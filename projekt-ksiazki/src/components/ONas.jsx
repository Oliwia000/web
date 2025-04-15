import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

function ONas() {
  return (
    <div className="o-nas-full">
      <div className="o-nas-container">
        <h2 className="neon-text animacja-naglowka">O nas</h2>
        <p className="o-nas-text animacja-tekst">
          Na tej stronie znajdziesz interesujące książki z różnych gatunków i lat.
        </p>
        <p className="o-nas-text animacja-tekst">
          Znajdziesz tu również wyszukiwarkę, która przeszukuje książki po autorze, tytule i wydawnictwie.
        </p>
        <p className="o-nas-text animacja-tekst">
          Owocnych poszukiwań książek dla siebie!
        </p>
        <Link to="/" className="home-link">Powrót do Strony Głównej</Link>
      </div>
    </div>
  );
}

export default ONas;
