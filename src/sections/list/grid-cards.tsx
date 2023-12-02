import React from "react";
import { PokeItems } from "../../mocks/pokemon";
import PokeCard from "../../component/PokeCard/poke-card";
import { Pokemon } from "../../types/pokemon";
function GridCards() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {PokeItems?.map((item: Pokemon) => {
          return (
            <></>
            // <PokeCard
            //   key={item.id}
            //   id={item.id}
            //   image={item.image}
            //   name={item.name}
            //   types={item.types}
            //   onClick={() => {}}
            // />
          );
        })}
      </div>
    </>
  );
}

export default GridCards;
