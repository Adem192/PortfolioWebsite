import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Cards.css';

function CardItem(props){
  return(
    <li className='cards__item'>
      <a className="cards__item__link" target="_blank" href={props.href}>
        <img src={props.src} alt=""/>
      </a>
    </li>
  )
}

export default CardItem
