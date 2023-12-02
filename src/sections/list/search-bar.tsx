import React from "react";
import Button from "../../component/Button/button";

function SearchBar() {
  const [search, setSearch] = React.useState<string>("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter pokemon name or index"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value || "");
        }}
        value={search}
      />
      <Button>SEARCH</Button>
    </div>
  );
}

export default SearchBar;
