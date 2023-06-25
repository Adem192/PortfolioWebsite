import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function scrollDown(){ 
  window.scrollBy(0, window.innerHeight); 
}

function scrollUp(){ 
  window.scrollBy(0, -window.innerHeight); 
}

const NavArrows = () => { 
  return (
    <div className='nav__arrows'>
        <a className='btn up' onClick={scrollUp}>⇑</a>
        <a className='btn down' onClick={scrollDown}>⇓</a>
    </div>
  )
}

export default NavArrows