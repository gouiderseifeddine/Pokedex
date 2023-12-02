import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};
function Wrapper({ children }: WrapperProps) {
  return (
    <div className="bg-f0ecf4 p-4 shadow-xl max-w-400px max-h-600px">
      {children}
    </div>
  );
}

export default Wrapper;
