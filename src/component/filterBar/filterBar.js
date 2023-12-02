// FilterBar.js
import React, { useState } from 'react';

const FilterBar = ({ types, onFilter }) => {
  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleFilter = () => {
    onFilter(selectedType);
  };

  return (
    <div>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default FilterBar;
