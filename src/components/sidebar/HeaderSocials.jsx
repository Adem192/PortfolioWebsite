import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://uk.linkedin.com/in/adem-kanca-2a0a74140" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Adem192" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials