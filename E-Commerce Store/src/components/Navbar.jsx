import React, { useState } from 'react';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.png';
import profile_icon from '../assets/profile_icon.png';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';
import cart_icon from '../assets/cart_icon.png';
import menu_icon from '../assets/menu_icon.png';
import dropdown_icon from '../assets/dropdown_icon.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode); 
  };

  return (
    <div className={`flex items-center justify-between py-5 font-medium ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}>
      <Link to='/'>
        <img src={logo} className="w-36" alt="Logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm">
        {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className="flex flex-col items-center gap-1"
          >
            <p className="text-xl">{item}</p>
            <hr className="w-2/4 border-none h-[1.25px] hidden" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        {/* Use light or dark search icon */}
        <img
          src={darkMode ? search_icon_light : search_icon_dark}
          className="w-5 cursor-pointer"
          alt="Search Icon"
        />

        <div className='group relative'>
          <Link to='/login'><img className='w-5 cursor-pointer' src={profile_icon} alt="Profile Icon"/>
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={cart_icon} className='w-5 min-w-5' alt='Cart Icon' />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            5
          </p>
        </Link>

        {/* Toggle light/dark mode */}
        <img
          src={darkMode ? toggle_dark : toggle_light}
          className="w-6 cursor-pointer"
          onClick={toggleDarkMode}
          alt="Toggle Theme"
        />

        <img
          onClick={() => setVisible(true)}
          src={menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt=''
        />
      </div>

      {/* Slidebar Menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all ${visible ? 'w-full' : 'w-0'} ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-600'}`}>
        <div className='flex flex-col'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item) => (
            <NavLink
              key={item}
              onClick={() => setVisible(false)}
              className='py-2 pl-6 border'
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
