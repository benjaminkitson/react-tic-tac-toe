import React, { useContext } from "react";
import { useAppContext } from "../utilities/useGame";

function Header() {
  const { statusText } = useAppContext();

  return (
    <div className="relative w-full flex flex-col items-center justify-center h-48">
      <h1 className="text-5xl mb-5">Tic-Tac-Toe!</h1>
      <div className="flex flex-col items-center justify-center">
        {
          // TODO: change this statusText thing
        }
        <h1 className="text-3xl">{statusText()}</h1>
      </div>
    </div>
  );
}

export default Header;
