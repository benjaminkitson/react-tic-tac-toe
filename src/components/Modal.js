import React, { useState, useContext } from 'react';
import AppContext from '../utilities/appcontext';

function Modal(props) {

  const [formSelection, setFormSelection] = useState(undefined);
  const { setPlayers, players } = useContext(AppContext);

  return (
    <div className={`modal ${players ? '' : 'modal--visible'}`}>
      <div className="modal__content">
        <h1>Select number of players:</h1>
        <div className="modal__players-form">
          <button onClick={() => setPlayers('1')} className="modal__button">1 player</button>
          <button onClick={() => setPlayers('2')} className="modal__button">2 players</button>
        </div>
      </div>
    </div>
  );
};

export default Modal
