import React from 'react';

function Row(props) {
  return (
    <div className="info">
      <h1 className="status">{props.statusText()}</h1>
      <button className="reset" onClick={props.resetGame}>Reset</button>
    </div>
  );
};

export default Row
