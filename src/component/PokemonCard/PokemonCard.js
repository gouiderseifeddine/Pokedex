// PokemonCard.js
import React, { useState } from "react";
import "./PokemonCard.scss"; // Import the SCSS file

const PokemonCard = ({ pokemon }) => {
  const basedStat = Object.fromEntries(
    pokemon?.stats.map((stat) => [stat?.stat?.name, stat?.base_stat])
  );

  const imageUrl = pokemon?.sprites?.front_default;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`pokemon-card ${isExpanded ? "expanded" : ""}`}
      onClick={handleCardClick}
    >
      <div className="details">
        {!isExpanded && (
          <>
            <img src={imageUrl} alt={pokemon?.name} />
            <h3>{pokemon?.name}</h3>
            <p>ID: {pokemon?.id}</p>
            <div className="types">
              {(pokemon?.types || []).map((type) => (
                <span key={type?.type?.name}>{type?.type?.name}</span>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="details">
        {isExpanded && (
          <>
            <p>HP: {basedStat?.hp ?? 0} </p>
            <p>Attack: {basedStat?.attack ?? 0}</p>
            <p>Defense: {basedStat?.defense ?? 0 ?? 0}</p>
            <p>Special Attack: {basedStat["special-attack"] ?? 0}</p>
            <p>Special Defense: {basedStat["special-defense"] ?? 0}</p>
            <p>Speed: {basedStat?.speed ?? 0}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
