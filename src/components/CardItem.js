import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Cards.css';

function CardItem(props){
  return(
    <li className='cards__item'>
      <Link className="cards__item__link" to={props.href} target="_blank">
        <img src={props.src} alt="" ClassName='cards__item__img'/>
      </Link>
    </li>
  )
}

export default CardItem
