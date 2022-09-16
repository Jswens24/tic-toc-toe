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

  const calculateWinner = (arr) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return `${arr[a]} won!`
      }
    }
    return 'Who will win?';
  }

  return (
    <div className="App">
      <span>{calculateWinner(gameBoard)}</span>
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
