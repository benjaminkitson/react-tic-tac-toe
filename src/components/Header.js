import React, { useContext } from 'react';
import Status from './Status';

function Header() {
  return (
    <div className='header'>
      <h1>Tic-Tac-Toe!</h1>
      <Status />
    </div>
  );
};

export default Header
