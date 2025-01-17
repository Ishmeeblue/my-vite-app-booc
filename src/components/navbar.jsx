import React from 'react';
import logoname from '../assets/logoname.jpeg';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='float-container'>

        <img src={logo} className="w-20 " alt="Logo" /> 
        <img src={logoname} className="w-36 " alt="Logoname"/>
      
    </div>
  )
}

export default Navbar
