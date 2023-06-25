import React, { useEffect, useState } from 'react'
import './contact.css'
import IMG from '../../assets/AK.png'

function MyApp () {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (offset >= 550){
    const contact = document.getElementsByClassName("contact");
    contact[0].style.display = "block"; 
  }
  
  if (offset < 550 && offset > 0){
    const contact = document.getElementsByClassName("contact");
    contact[0].style.display = "none"; 
  }
}

const Contact = () => {
  return (
    MyApp(),
    <div className="contact"><img src={IMG} alt=""/></div>
  )
}

export default Contact