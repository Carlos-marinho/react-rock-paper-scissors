import React from 'react';

const Play = () => {
  return ( 
      <div className="flex flex-wrap justify-evenly border h-80 mt-2 pt-16 max-w-64 mx-auto">
          <button>
            <div className='flex bg-green-400 border rounded-full justify-center items-center text-center w-20 h-20 mx-5'>
              <h5>Pedra</h5>
            </div>
          </button>
          <div className='flex bg-yellow-400 border rounded-full justify-center items-center text-center w-20 h-20 mx-5'>
            <h5>Papel</h5>
          </div>
          <div className='flex bg-blue-400 border rounded-full justify-center items-center text-center w-20 h-20 mx-5'>
            <h5>Tesoura</h5>
          </div>
        </div>  
    );
}

export default Play;