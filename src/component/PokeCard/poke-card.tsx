import React from "react";

type CardProps = {
  id: string;
  name: string;
  image: string;
  types: string[];
  onClick: () => void;
};
function PokeCard({ id, image, name, onClick, types }: CardProps) {
  return (
    <>
      {name ? (
        <div className="flex flex-col items-center justify-center w-64 h-64 bg-gray-200 rounded-lg shadow-md">
          <img className="w-32 h-32" src={image} alt={name} />
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="text-xl font-bold">{name}</span>
            <div className="flex flex-row items-center justify-center">
              {types.map((type) => (
                <span
                  key={type}
                  className="px-2 py-1 mx-1 text-xs font-bold text-white uppercase bg-gray-800 rounded-full"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>No data is available</div>
      )}
    </>
  );
}

export default PokeCard;
