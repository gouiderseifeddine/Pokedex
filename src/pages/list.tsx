import React from "react";
import Title from "../sections/title";
import Wrapper from "../component/wrapper";
import Paginator from "../sections/list/Paginator";
import SearchBar from "../sections/list/search-bar";
import GridCards from "../sections/list/grid-cards";

export const Pokedex = () => {
  return (
    <>
      <Title />
      <Wrapper>
        <Paginator />
        <SearchBar />
        <GridCards />
      </Wrapper>
    </>
  );
};
