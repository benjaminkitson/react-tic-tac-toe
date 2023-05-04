import React, { useContext } from "react";
import AppContext from "../utilities/appcontext";

function Header() {
  const { statusText, resetGame } = useContext(AppContext);

  return (
    <div className="relative w-full h-28 z-0">
      <h1 className="header__title">Tic-Tac-Toe!</h1>
      <div className="header__info">
        <h1 className="header__status">{statusText()}</h1>
        <button className="reset" onClick={resetGame}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Header;
