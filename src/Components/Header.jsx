import { useState } from 'react'
import Navbar from './Navbar';
import logo from '../assets/Images/Logo.png'

const Header = () => {
    const [mobileDropdown, setMobileDropdown] = useState(false)
    return (
        <header className="relative z-50 bg-white text-[07294D] font-bold py-4">
            <div className={`flex justify-between items-center px-4`}>
                <a href="/" className="logo">
                    <img alt="Logo"
                        className="w-24 h-12" src={logo} />
                </a>
                <div className='hidden md:flex'>
                    <Navbar />
                </div>
                {
                    mobileDropdown ?
                        <button className='flex md:hidden' onClick={() => setMobileDropdown(false)}>closeNav</button>
                        :
                        <button className='flex md:hidden' onClick={() => setMobileDropdown(true)}>openNav</button>
                }
            </div>
            {
                mobileDropdown &&
                <div className='absolute py-4 bg-blue-900 text-white te w-[100%] flex md:hidden'>
                    <Navbar mobileDrop="mobileDrop" />
                </div>
            }
        </header>
    );
};

export default Header