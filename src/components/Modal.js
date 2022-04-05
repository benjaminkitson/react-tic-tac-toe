import React, { useState } from 'react';

function Modal(props) {

  const [formSelection, setFormSelection] = useState(undefined)

  const handleChange = (e) => {
    setFormSelection(e.target.value);
  };

  const selectPlayers = (e) => {
    e.preventDefault();
    props.setPlayers(formSelection);
  }

  return (
    <div className={`modal ${props.players ? '' : 'modal--visible'}`}>
      <div className="modal__content">
        <h1>Select number of players:</h1>
        <form onSubmit={selectPlayers} className="modal__players-form">
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
