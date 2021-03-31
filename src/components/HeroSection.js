import React from 'react';
import '../App.css';
import '../css/HeroSection.css';
import li from '../images/linked.jpg'
import git from '../images/github.png'
import ol from '../images/outlook.png'
import CardItem from './CardItem.js'

function HeroSection(){
  return(
    <div className='hero-container'>
      <video src="/CircuitBoards.mp4" autoPlay loop muted />
      <h1> ADEM KANCA </h1>
      <p>
        <CardItem src={li} href="//www.linkedin.com/in/adem-kanca-2a0a74140"/>
        <CardItem src={git} href="//github.com/Adem192"/>
        <CardItem src={ol} href="mailto:adem_kanca@live.co.uk"/>
      </p>
    </div>
  )
}

export default HeroSection
