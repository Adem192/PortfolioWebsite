import React from 'react';
import '../App.css';
import '../css/AboutMe.css';
import git from '../images/github.png';
import link from '../images/linked.jpg';
import out from '../images/outlook.png';

function AboutMe(){
  return(
    <div className='AM'>
      <div className='AM__container'>
        <div className='AM__wrapper'>
              <p className="AM__title">
                <h1>About Me</h1>
                <a href="//www.github.com/Adem192">
                  <img src={git}/>
                </a>
                <a href="//www.linkedin.com/in/adem-kanca-2a0a74140">
                  <img src={link}/>
                </a>
                <a href="mailto:adem_kanca@live.co.uk">
                  <img src={out}/>
                </a>
              </p>
              <img className="ProfileStyle" src="/logo192.png" text=""/>
              <p>
                Hi! I'm Adem, <br/><br/>
                I recently graduated from Loughborough University; where i studied Computer Science.
                I'm looking to get into a software-related role (developer, analyst, technician etc.).
                This website is a means of displaying my software portfolio of personal and group projects. <br/><br/>
                Below are links to my LinkedIn and GitHub profile as well as a way of contacting me via email.
                Recruiters can email me at any time with any possible, software-related roles.<br/><br/>
                My CV is available upon request.
              </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
