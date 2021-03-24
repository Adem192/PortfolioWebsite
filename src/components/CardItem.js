import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Cards.css';

function CardItem(props){
  return(
      <li className='cards__item'>
        <Link className="cards__item__link" to={props.href} target="_blank">
          <img src={props.src} href={props.href}  alt="" ClassName='cards__item__img'/>
          <div className='cards__item__info'>
            <h1 className='cards__item__text'>{props.text}</h1>
          </div>
        </Link>
      </li>
  )
}

export default CardItem
