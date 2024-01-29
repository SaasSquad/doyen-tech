// NavBar.js
// import Search from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState } from "react";
import HeaderNav from "./HeaderNav";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(true)

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className={`flex justify-between items-center`}>
        <div className={`${openNav ? 'flex' : 'hidden'} justify-between items-center`}>
          <a href="#" className="text-xl font-bold">Your Logo</a>
        </div>
        <div className="hidden md:block">
        <HeaderNav/>
        </div>
        {
          openNav ?
            <div className="block md:hidden"><button onClick={() => setOpenNav(!openNav)}>openNav logo</button></div>
            :
            <div className='flex w-[100%] flex-col'>
              <div className='flex px-4 self-center w-screen justify-between items-center'>
                <div><a href="#" className="text-xl font-bold">Your Logo</a></div>
                <div><button onClick={() => setOpenNav(!openNav)}>openNav logo</button></div>
              </div>
              
              <HeaderNav />
            </div>
        }

      </nav>
    </header>
  );
};

export default NavBar;
