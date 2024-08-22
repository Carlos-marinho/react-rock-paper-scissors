import Header from './Header'
import Play from './Play';
import Game from './Game';
import { useState } from 'react';


function App() {
  const [score, setScore] = useState(0);
  const [showPlay, setShowPlay] = useState(true);
  const [playerWin, setPlayerWin] = useState(null);
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const options = ['rock', 'paper', 'scissors'];  

  function incrementScore(){
    setScore((prev) => prev + 1);
  };

  function setPlayers(optionP1, optionP2){
    setPlayer1(optionP1);
    setPlayer2(optionP2)
  };

  function handleOptionClick(selectedOptionP1){
    const optionP2 = options[Math.floor(Math.random() * options.length)]
    setPlayers(selectedOptionP1, optionP2);
    setShowPlay(false);
  };
  
  function Result() {
    if (player1 === 'rock' && player2 === 'scissors') {
      setPlayerWin('win');
      
    } else if (player1 === 'scissors' && player2 === 'paper') {
      setPlayerWin('win');
      
    } else if (player1 === 'paper' && player2 === 'rock') {
      setPlayerWin('win');
      
    } else if (player1 === 'rock' && player2 === 'paper') {
      setPlayerWin('lose');
      
    } else if (player1 === 'paper' && player2 === 'scissors') {
      setPlayerWin('lose');
      
    } else if (player1 === 'scissors' && player2 === 'rock') {
      setPlayerWin('lose');
      
    } else {
      setPlayerWin('draw');
    };
  };

  return (
      <>
        <div className="sm:w-1/2 min-w-5/6 mx-auto my-2 h-auto py-4 px-10 bg-neutral-800 rounded-xl">
          <Header score={score}/>
          {showPlay ? <Play handleClick={handleOptionClick} /> : <Game 
          incrementScore={incrementScore} setShowPlay={setShowPlay} Result={Result} 
          player1={player1} player2={player2} playerWin={playerWin} setPlayerWin={setPlayerWin}/>}
          
        </div>
      </>
  )
};

export default App;