import React from 'react'
import CardItem from './CardItem.js'
import '../css/Cards.css';
import li from '../images/linked.jpg'
import git from '../images/github.png'
import ol from '../images/outlook.png'

function Cards(){
  return(
    <div className='cards'>
      <h1>My Contact Links</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src={li} href="//www.linkedin.com/in/adem-kanca-2a0a74140"/>
            <CardItem src={git} href="//github.com/Adem192"/>
        </ul>
          <ul className="cards__items">
            <CardItem src={ol} href=""/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
