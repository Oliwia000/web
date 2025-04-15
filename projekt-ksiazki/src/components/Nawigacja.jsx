import React from "react";
import { Link } from "react-router-dom";
import Wyszukiwarka from "./Wyszukiwarka";
import "../styles/style.css";

const Nawigacja = ({ onWyszukaj }) => {
  return (
    <nav className="nawigacja">
      <ul>
        <li><Link to="/">Strona Główna</Link></li>
        <li><Link to="/o-nas">O Nas</Link></li>
      </ul>
      <Wyszukiwarka onWyszukaj={onWyszukaj} />
    </nav>
  );
};

export default Nawigacja;
