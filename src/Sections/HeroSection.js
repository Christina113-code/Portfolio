import React from 'react'
import Button from '../Components/Button'
import heroimg2 from '../imgs/heroimg2.svg'
const HeroSection = () => {
  
  return (
    <div className="hero-section section" >
    <img id="hero-img1"alt="girl coding"src={heroimg2}/>
    <div className="hero-text">
    <h1>Hello, I'm Christina</h1>
    <p>Front End Web Developer and Computer Science student.
    </p>
    <Button primary={true} text="See Projects"/>
    </div>
    
    </div>
  )
}

export default HeroSection