import React from "react";
import { Link } from "react-router-dom";
import Wyszukiwarka from "./Wyszukiwarka";

const Nawigacja = ({ onWyszukaj }) => {
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
          </ul>
        </li>
      </ul>
      <Wyszukiwarka onWyszukaj={onWyszukaj} />
    </nav>
  );
};

export default Nawigacja;
