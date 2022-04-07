import React, { useContext } from 'react';
import AppContext from '../utilities/appcontext';

function Header() {

  const { statusText, resetGame } = useContext(AppContext);

  return (
    <div className='header'>
      <h1 className='header__title'>Tic-Tac-Toe!</h1>
      <div className='info'>
        <h1 className="status">{statusText()}</h1>
        <button className="reset" onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
};

export default Header;
