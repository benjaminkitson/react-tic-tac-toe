import React, { useState, useContext } from 'react';
import AppContext from '../utilities/appcontext';

function Modal(props) {

  const [formSelection, setFormSelection] = useState(undefined);
  const { setPlayers, players } = useContext(AppContext);

  const handleChange = (e) => {
    setFormSelection(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayers(formSelection);
  };

  return (
    <div className={`modal ${players ? '' : 'modal--visible'}`}>
      <div className="modal__content">
        <h1>Select number of players:</h1>
        <form onSubmit={handleSubmit} className="modal__players-form">
          <div>
            <input type="radio" id="1" name="playerNumbers" value="1" onChange={handleChange}/>
            <label for="1">One player</label>
          </div>
          <br />
          <div>
            <input type="radio" id="2" name="playerNumbers" value="2" onChange={handleChange}/>
            <label for="2">Two players</label>
          </div>
          <br />
          <button>Play!</button>
        </form>
      </div>
    </div>
  );
};

export default Modal
