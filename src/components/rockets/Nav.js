import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Nav.css';

function Nav() {
  const addLine = (e) => {
    e.target.classList.toggle('click');
  };
  return (
    <section className="header-navigation">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="proj-name">Space Traveler`s Hub</h1>
      </div>
      <ul className="navigation">
        <li className="navigation-item"><button className="navigation-item rockets" type="button" onClick={addLine}>Rockets</button></li>
        <li className="navigation-item"><button className="navigation-item missions" type="button" onClick={addLine}>Missions</button></li>
        <line className="border" />
        <li className="navigation-item"><button className="navigation-item profile" type="button" onClick={addLine}>My Profile</button></li>
      </ul>
    </section>
  );
}

export default Nav;
