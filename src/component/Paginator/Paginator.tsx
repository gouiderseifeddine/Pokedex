import React from "react";
import Button from "../Button/button";
type PaginatorProps = {
  page: number;
  handleNext: () => void;
  handlePrev: () => void;
};
function Paginator({ page, handleNext, handlePrev }: PaginatorProps) {
  return (
    <div className="flex justify-between p-4">
      <Button onClick={handlePrev}>Previous</Button>
      <span>Page : {page}</span>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}

export default Paginator;
