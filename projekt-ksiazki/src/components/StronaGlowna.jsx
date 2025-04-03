import React from "react";

const StronaGlowna = ({ ksiazki }) => {
  return (
    <div>
      <h1 className="neon-text">Owocnych Poszukiwań!</h1>
      <div className="lista-ksiazek">
        {ksiazki.map((ksiazka) => (
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
