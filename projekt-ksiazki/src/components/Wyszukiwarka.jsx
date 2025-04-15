import React, { useState } from "react";
import "../styles/style.css";

function Wyszukiwarka({ onWyszukaj }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setQuery(text);
    onWyszukaj(text);
  };

  return (
    <div className="wyszukiwarka">
      <input
        type="text"
        placeholder="Wyszukaj książkę, autora lub wydawnictwo..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Wyszukiwarka;
