import React, { useContext } from 'react';
import AppContext from '../utilities/appcontext';

function Row(props) {

const { statusText, resetGame } = useContext(AppContext);

  return (
    <div className="info">
      <h1 className="status">{statusText()}</h1>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default Row
