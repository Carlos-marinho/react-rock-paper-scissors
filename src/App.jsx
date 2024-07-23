import { useState } from 'react'
// import Header from './Header'
// import Play from './Play'
import Game from './Game'

function Header({score}) {
  return (
    <div className="flex justify-between py-2 px-3 w-100 border rounded-xl items-center">
      <div>
        <h1 className="text-2xl font-bold text-white text-left">Pedra</h1>
        <h1 className="text-2xl font-bold text-white text-left">Papel</h1>
        <h1 className="text-2xl font-bold text-white text-left">Tesoura</h1>
      </div>

      <div className="flex flex-col border bg-green-100 rounded-xl w-40 py-2 px-auto my-2 justify-center items-center text-center">
        <h1 className='text-xl'>Score</h1>
        <h2 className='text-3xl'>{score}</h2>
        <button className='text-sm'>Adicionar Score Manualmente</button>
      </div>
    </div>
  )
};

function Play({handleOptionClick}) {
  return (
    <div className="flex flex-wrap justify-evenly border h-80 mt-2 pt-16 max-w-64 mx-auto">
      <button onClick={() => handleOptionClick('rock')}>
        <div className='flex bg-green-400 border rounded-full justify-center items-center text-center w-20 h-20 mx-5'>
          <h5>Pedra</h5>
        </div>
      </button>
      <button onClick={() => handleOptionClick('paper')}>
        <div className='flex bg-yellow-400 border rounded-full justify-center items-center text-center w-20 h-20 mx-5'>
          <h5>Papel</h5>
        </div>
      </button>
      <button onClick={() => handleOptionClick('scissors')}>
        <OptionButton option={'scissors'}/>
      </button>
    </div>

  )
};

function OptionButton({option}) {

  return (
    <>
        <div className='flex bg-green-400 border rounded-full justify-center items-center text-center w-20 h-20 mx-5'>
          <h5>{option}</h5>
        </div>
    </>
  )
};

function App() {
  const [score, setScore] = useState(0);
  const [showResult, setshowResult] = useState(false);
  const [playerWin, setPlayerWin] = useState(null);
  const [player1, setPlayer1] = useState(null);
  const options = ['rock', 'paper', 'scissors'];
  const [player2, setPlayer2] = useState(options[Math.floor(Math.random() * options.length)]);

  function handleOptionClick(selectedOption) {
    setPlayer1((prev) => selectedOption);
    const selectedOptionForMachine = options[Math.floor(Math.random() * options.length)];
    setPlayer2(selectedOptionForMachine);
    setshowResult(true);
    Result(player1, player2);
  };

  function Result(player1, player2) {
    if (player1 === 'rock' && player2 === 'scissors') {
      setPlayerWin('win');
      setScore((prevScore) => prevScore + 1);
      
    } else if (player1 === 'rock' && player2 === 'paper') {
      setPlayerWin('lose');
    
    } else if (player1 === 'paper' && player2 === 'rock') {
      setPlayerWin('win');
      setScore((prevScore) => prevScore + 1);
    
    } else if (player1 === 'paper' && player2 === 'scissors') {
      setPlayerWin('lose');
    
    } else if (player1 === 'scissors' && player2 === 'rock') {
      setPlayerWin('lose');

    } else if (player1 === 'scissors' && player2 === 'paper') {
      setPlayerWin('win');
      setScore((prevScore) => prevScore + 1);

    } else {
      setPlayerWin('draw');
    }
  };

  return (
      <>
        <div className="mx-80 my-2 h-auto py-4 px-10 bg-gray-500 rounded-xl">
          <Header score={score}/>
          <Play handleOptionClick={handleOptionClick}/>
          {showResult && <Game/>}
        </div>
      </>
  )
}

export default App;
