import React, { ReactNode, MouseEventHandler } from "react";

interface BlackButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  others?: any;
}

function Button({
  onClick,
  children,
  ...others
}: BlackButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white border-none p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300 m-1"
      {...others}
    >
      {children}
    </button>
  );
}
export default Button;
