import React from 'react';
import '../css/Main.css';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <div class="nav-wrapper" style={{height:54+'px'}}>
      <div className="navbar navbar-color center-outer" id="navbar">
        <div className="center-inner container navbar-inner">
          <div className="navbar-home">
            <a className="navbar-text-home" href="/">Adem Kanca</a>
          </div>
          <div className="navbar-item">
            <NavLink className="navbar-text-item" to="/Projects">Projects</NavLink>
          </div>
          <div className="navbar-item">
            <a className="navbar-text-item" href="/Algorithms">Algorithms</a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header;
