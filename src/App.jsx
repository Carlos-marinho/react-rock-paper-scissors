import { useState } from 'react'
import Header from './Header'
import Play from './Play'
import Game from './Game'
import OptionComponent from './OptionComponent'

function App() {
  const [score, setScore] = useState(0);
  const [showPlay, setshowPlay] = useState(true);
  const [playerWin, setPlayerWin] = useState(null);
  const [player1, setPlayer1] = useState(null);
  const options = ['rock', 'paper', 'scissors'];
  const [player2, setPlayer2] = useState(null);

  function handleOptionClick(selectedOption) {
    setPlayer1((opt) => selectedOption);
    const selectedOptionForMachine = options[Math.floor(Math.random() * options.length)];
    setPlayer2((opt) => selectedOptionForMachine);
    Result(player1, player2);
    setshowPlay(false);
  };

  function handlePlayAgain() {
    setshowPlay(true);
  };

  function Result(player1, player2) {
    if (player1 === 'rock' && player2 === 'scissors') {
      setPlayerWin((prev) => 'win');
      setScore((prevScore) => prevScore + 1);
      
    } else if (player1 === 'rock' && player2 === 'paper') {
      setPlayerWin((prev) => 'lose');
    
    } else if (player1 === 'paper' && player2 === 'rock') {
      setPlayerWin((prev) => 'win');
      setScore((prevScore) => prevScore + 1);
    
    } else if (player1 === 'paper' && player2 === 'scissors') {
      setPlayerWin((prev) => 'lose');
    
    } else if (player1 === 'scissors' && player2 === 'rock') {
      setPlayerWin((prev) => 'lose');

    } else if (player1 === 'scissors' && player2 === 'paper') {
      setPlayerWin((prev) => 'win');
      setScore((prevScore) => prevScore + 1);

    } else {
      setPlayerWin((prev) => 'draw');
    }
  };

  return (
      <>
        <div className="sm:w-1/2 min-w-5/6 mx-auto my-2 h-auto py-4 px-10 bg-neutral-800 rounded-xl">
          <Header score={score}/>
            {showPlay ? <Play handleOptionClick={handleOptionClick}/> : <Game player1={player1} player2={player2} playerWin={playerWin} handlePlayAgain={handlePlayAgain}/>}
        </div>
      </>
  )
};

export default App;
