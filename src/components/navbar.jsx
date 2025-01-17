import React, { useState } from 'react';
import logoname from '../assets/logoname.png';
import searchicon from '../assets/searchicon.png';
import profileicon from '../assets/profileicon.png';
import carticon from '../assets/carticon.png';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {


  return (

  <div class="bg-pink-50">
  <div className='flex items-center justify-start py-4 font-medium w-full '>
    <img src={logoname} className="w-36 mr-80" alt="Logo "/>
    
    <ul className='hidden sm:flex gap-5 text-sm text-pink-300 activeClassName="active" '>
      <NavLink to="/" className='flex flex-col items-center gap-1 ml-64'>
        <p>HOME</p>
        <hr className='w-2 border-none h-[1.5px] bg-gray-700' />
      </NavLink>

      <NavLink to="/collection" className='flex flex-col items-center gap-1 activeClassName="active"'>
        <p>COLLECTION</p>
        <hr className='w-2 border-none h-[1.5px] bg-gray-700' />
      </NavLink>

      <NavLink to="/about" className='flex flex-col items-center gap-1 activeClassName="active" mr-96'>
        <p>ABOUT</p>
        <hr className='w-2 border-none h-[1.5px] bg-gray-700' />
      </NavLink>

    </ul>

  <div className='flex items-center gap-6'>
    <img src={searchicon} alt='' className='w-5 cursor-pointer ml-64'/>

    <div className='group relative'>
    <img src={profileicon} alt='' className='w-5 cursor-pointer '/>
    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
      <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
            <p className='cursor-pointer hover:text-pink-500'>My Profile</p>
            <p className='cursor-pointer hover:text-pink-500'>Orders</p>
            <p className='cursor-pointer hover:text-pink-500'>Logout</p>

      </div>

    </div>
 
    </div>

  </div>
    <Link to="/cart" className='relative'>
    <img src={carticon} className="w-5 cursor-pointer ml-5" alt=""/>
    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-pink-600 text-white aspect-square rounded-full text-[8px] '>10</p>
    </Link>

</div>
</div>


  )
}

export default Navbar
