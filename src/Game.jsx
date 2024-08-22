import React from 'react';
import { useEffect } from 'react';

export default function Game({player1, player2, playerWin, Result, setShowPlay, incrementScore, setPlayerWin}) {
  useEffect(() => {
    Result();
    if (playerWin === 'win') {
      incrementScore();
    };
  }, [player1, playerWin])

  function handlePlayAgain() {
    setPlayerWin('')
    setShowPlay(true);
  }

  return (
    <div className="flex items-center justify-evenly border h-80 mt-2 w-auto mx-auto">
        
      <div className="flex flex-col text-center">
        <h2 className='text-white text-xl'>Player 1</h2>
        <div className='flex capitalize bg-green-400 border rounded-full justify-center items-center text-center w-20 h-20 mx-5 my-5'>
          <h5>{player1}</h5>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-10">
        <p className='text-white strong text-2xl'>{'You '+playerWin}</p>
          <button onClick={() => handlePlayAgain()}>
            <div className="bg-blue-300 border rounded-lg text-center text-wrap px-3 py-2">
              Play Again
            </div>
          </button>
      </div>

      <div className="flex flex-col text-center">
        <h2 className='text-white text-xl'>Player 2</h2>
        <div className='flex capitalize bg-yellow-400 border rounded-full justify-center items-center text-center w-20 h-20 mx-5 my-5'>
          <h5>{player2}</h5>
        </div>
      </div>

    </div>
  )
};