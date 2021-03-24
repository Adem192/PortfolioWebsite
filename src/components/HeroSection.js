import React from 'react';
import '../App.css';
import '../css/HeroSection.css';

function HeroSection(){
  return(
    <div className='hero-container'>
      <video src="/CircuitBoards.mp4" autoPlay loop muted />
      <h1> ADEM KANCA </h1>
      <p> Computer Science Bsc Graduate from Loughborough University </p>
    </div>
  )
}

export default HeroSection
