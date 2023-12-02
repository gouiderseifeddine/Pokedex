// PaginatedList.js
import React, { useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useQuery } from "@tanstack/react-query";
import { getAllpokemons } from "../../service/pokemon";
import SearchBar from "../SearchBar/SearchBar";
import Paginator from "../Paginator/Paginator";
const PaginatedList = () => {
  // Specify the number of columns you want in a row
  const [filter, setFilter] = useState({
    searchText: "",
    page: 1,
  });

  const columns = 4;
  const { data: pokemons } = useQuery({
    queryKey: ["pokemon", "list", filter],
    queryFn: () => getAllpokemons(filter),
  });

  // Calculate the number of rows needed
  const rows = Math.ceil(pokemons?.length / columns);

  // Create an array to represent each row
  const rowsArray = Array.from({ length: rows }, (_, rowIndex) =>
    pokemons?.slice(rowIndex * columns, (rowIndex + 1) * columns)
  );
  const handleSearch = (searchText) => {
    setFilter({ ...filter, searchText });
  };
  const HandleNext = () => {
    setFilter({ ...filter, page: filter.page + 1 });
  };
  const HandlePrev = () => {
    if (filter.page === 1) return;
    setFilter({ ...filter, page: filter.page - 1 });
  };
  return (
    <div className="app">
      <h1>Welcome to Pokémon</h1>
      <Paginator
        handleNext={HandleNext}
        handlePrev={HandlePrev}
        page={filter?.page}
      />
      <SearchBar onSearch={handleSearch} />
      <div className="pokemon-grid">
        {rowsArray.map((row, rowIndex) => (
          <div key={rowIndex} className="pokemon-row">
            {row.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginatedList;
