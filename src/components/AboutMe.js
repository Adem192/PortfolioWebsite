import React from 'react';
import '../App.css';
import '../css/AboutMe.css';

function AboutMe(){
  return(
    <div className='AM'>
      <div className='AM__container'>
        <div className='AM__wrapper'>
            <p>
              <h1>About Me</h1>
              <img className="ProfileStyle" src="/logo192.png" text=""/>
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
