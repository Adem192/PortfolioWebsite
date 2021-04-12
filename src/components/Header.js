import React from 'react'
import '../css/Main.css';

const Header = props => {

  return (

<div className="navbar navbar-color center-outer" id="navbar">
  <div className="center-inner container navbar-inner">
    <div className="navbar-home">
      <a className="navbar-text-home" href="/">Adem Kanca</a>
    </div>
    <div className="navbar-item">
      <a className="navbar-text-item" href="/projects">Projects</a>
    </div>
    <div className="navbar-item">
      <a className="navbar-text-item" href="/algorithms">Algorithms</a>
    </div>
  </div>
</div>

  );
}


export default Header;
