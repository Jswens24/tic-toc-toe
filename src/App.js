import React, { useState } from 'react';
import './App.css';
import Square from './Components/Square';

function App() {

  const [gameBoard, setGameBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [playerTurn, setPlayerTurn] = useState(true);

  const clickHandler = () => {
    setGameBoard(['', '', '', '', '', '', '', '', '']);
    setPlayerTurn(true);
  }

  return (
    <div className="App">
      <div className='container'>
        {gameBoard.map((element, index) =>
          <Square gameBoard={gameBoard} setGameBoard={setGameBoard} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} squareValue={element} index={index} />
        )}

        <button onClick={clickHandler}>Reset</button>
      </div>
    </div>
  );
}

export default App;
