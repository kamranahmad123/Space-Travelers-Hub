import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Nav.css';

function Nav() {
     const addLine = (e) => {e.target.classList.toggle('click')
    };
  return (
    <section className='header-navigation'>
    <div className='header'> 
      <img src={logo} alt='logo' className='logo' />
      <h1 className='proj-name'>Space Traveler's Hub</h1>
    </div>
    <ul className='navigation'>
        <li className='navigation-item rockets' onClick={addLine}>Rockets</li>
        <li className='navigation-item missions' onClick={addLine}>Missions</li>
        <line className='border' />
        <li className='navigation-item profile' onClick={addLine}>My Profile</li>
    </ul>
    </section>
  )
};

export default Nav
