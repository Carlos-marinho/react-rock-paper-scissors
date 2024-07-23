import { useState } from 'react';

const Header = () => {

    return ( 
        <div className="flex justify-between py-2 px-3 w-100 border rounded-xl items-center">
              <div>
                <h1 className="text-2xl font-bold text-white text-left">Pedra</h1>
                <h1 className="text-2xl font-bold text-white text-left">Papel</h1>
                <h1 className="text-2xl font-bold text-white text-left">Tesoura</h1>
              </div>

              <div className="flex flex-col border bg-green-100 rounded-xl w-40 py-2 px-auto my-2 justify-center items-center text-center">
                <h1 className='text-xl'>Score</h1>
                <h2 className='text-3xl'>0</h2>
                <button className='text-sm'>Adicionar Score Manualmente</button>
              </div>
        </div>
     );
}
 
export default Header;