import React from "react";
import Button from "../../component/Button/button";

function Paginator() {
  const [page, setPage] = React.useState(1);
  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => (prev === 1 ? prev : prev - 1));
  return (
    <div className="flex justify-between p-4">
      <Button onClick={handlePrev}>Previous</Button>
      <span>Page : {page}</span>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}

export default Paginator;
