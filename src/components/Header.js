import React from 'react';
import Status from './Status';

function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'>Tic-Tac-Toe!</h1>
      <Status />
    </div>
  );
};

export default Header
