import React, { useEffect, useState } from "react";

const StronaGlowna = ({ ksiazki }) => {
  const [losoweKsiazki, setLosoweKsiazki] = useState([]);

  useEffect(() => {
    const shuffled = [...ksiazki].sort(() => 0.5 - Math.random());
    const wybrane = shuffled.slice(0, 12); // np. 12 losowych książek
    setLosoweKsiazki(wybrane);
  }, [ksiazki]);

  return (
    <div>
      <h1 className="polecamy-neon">📚 POLECAMY 📚</h1>
      <div className="lista-ksiazek">
        {losoweKsiazki.map((ksiazka) => (
          <div key={ksiazka.id} className="ksiazka">
            <img src={ksiazka.okladka} alt={ksiazka.tytul} />
            <h4>{ksiazka.tytul}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StronaGlowna;
