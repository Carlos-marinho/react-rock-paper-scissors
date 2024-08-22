import React from 'react';
import OptionComponent from './OptionComponent';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Play({handleClick: handleOptionClick}) {

  return (
    <div className="flex flex-wrap border justify-evenly h-80 mt-2 pt-16 max-w-80 mx-auto">
  
      <button onClick={() => handleOptionClick('rock')}>
        <OptionComponent option={'rock'}/>
      </button>
      <button onClick={() => handleOptionClick('paper')}>
        <OptionComponent option={'paper'}/>
      </button>
      <button onClick={() => handleOptionClick('scissors')}>
        <OptionComponent option={'scissors'}/>
      </button>
    </div>

  )
};