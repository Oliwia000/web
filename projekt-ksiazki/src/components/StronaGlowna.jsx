import React, { useEffect, useState } from "react";
import "../styles/style.css";

const StronaGlowna = ({ ksiazki }) => {
  const [losowe, setLosowe] = useState([]);

  useEffect(() => {
    const shuffled = [...ksiazki].sort(() => 0.5 - Math.random());
    setLosowe(shuffled.slice(0, 12));
  }, [ksiazki]);

  return (
    <div>
      <h1 className="neon-text animacja-naglowka polecamy-neon">
        📚 POLECAMY 📚
      </h1>
      <div className="lista-ksiazek">
        {losowe.map((k) => (
          <div key={k.id} className="ksiazka">
            <img src={k.okladka} alt={k.tytul} />
            <h4>{k.tytul}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StronaGlowna;
