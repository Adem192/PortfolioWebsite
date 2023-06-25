import React from 'react'
import './portfolio.css'
import SubcategoryImages from '../../assets/SubCategoryImgs.png'
import BritishBirdFood from '../../assets/britishbirdfood.jpg'

const EcommerceGallery = () => {
  return (
    <div className='gallery__container'>
      <div className="gallery__row">
        <p>Here you can find a range of different projects I have undertaken as part of my eCommerce website development.</p>
        <a href="https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=43446" target="_blank" rel="noreferrer">
          <img src={SubcategoryImages} alt="Subcategory Images OpenCart Extension" loading="lazy"/>
          <label>Subcategory<br/>Images<br/>Extension</label>
        </a>
        <a href="https://www.nostalgicmomentsphotography.co.uk/" target="_blank" rel="noreferrer">
          <img src={BritishBirdFood} alt="British Bird Food OpenCart Site" loading="lazy"/>
          <label>British<br/>Bird<br/>Food</label>
        </a>
      </div>
    </div>
  )
}

export default EcommerceGallery