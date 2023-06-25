import React from 'react'
import CV from '../../assets/headshot.jpg'

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Download CV</a>
      <a href="mailto:contact@ademkanca.co.uk" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA