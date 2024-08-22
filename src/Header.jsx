import { useState } from 'react';

export default function Header({score}) {
  return (
    <div className="flex justify-between py-2 px-3 w-100 border rounded-xl items-center">
      <div>
        <h1 className="text-2xl font-bold text-white text-left">Rock</h1>
        <h1 className="text-2xl font-bold text-white text-left">Paper</h1>
        <h1 className="text-2xl font-bold text-white text-left">Scissors</h1>
      </div>

      <div className="flex flex-col border bg-green-300 rounded-xl w-40 py-2 px-auto my-2 justify-center items-center text-center">
        <h1 className='text-xl'>Score</h1>
        <h2 className='text-3xl'>{score}</h2>
      </div>
    </div>
  )
};