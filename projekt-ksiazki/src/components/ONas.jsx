import React from "react";

function ONas() {
  return (
    <div className="o-nas">
      <h2>O nas</h2>
      <p>
        Na tej stronie znajdziesz interesujące książki z różnych gatunków i lat. 
        Na stronie znajdziesz wyszukiwarkę, która wyszukuje po autorze, tytule i wydawnictwie. 
        Owocnych poszukiwań książek dla siebie!
      </p>
      <Wyszukiwarka /> {/* Komponent wyszukiwania, jeżeli już go masz */}
    </div>
  );
}

export default ONas;
