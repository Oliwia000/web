import React from "react";
import { Link } from "react-router-dom";
import Wyszukiwarka from "./Wyszukiwarka";
import "../styles/style.css";

const Nawigacja = () => {
  return (
    <nav className="nawigacja">
      <ul>
        <li><Link to="/">Strona Główna</Link></li>
        <li><Link to="/o-nas">O Nas</Link></li>
        <li className="dropdown">
          <span>Wydarzenia</span>
          <ul className="dropdown-content">
            <li><Link to="/wydarzenia/targi-ksiazki">Targi Książki</Link></li>
            <li><Link to="/wydarzenia/inne">Inne Wydarzenia</Link></li>
            <li><Link to="/wydarzenia/minione">Minione Wydarzenia</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nawigacja;
