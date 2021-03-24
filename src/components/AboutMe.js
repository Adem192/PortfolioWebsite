import React from 'react';
import '../App.css';
import '../css/AboutMe.css';
import headshot from '../images/logo192.png'

function AboutMe(){
  return(
    <div className='aboutme'>
      <div className='AM__container'>
        <img src={ headshot } text="Adem"/>
        <h1>ABOUT ME</h1>
        </div>
    </div>
  )
}

export default AboutMe
