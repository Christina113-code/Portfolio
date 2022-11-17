import React from 'react'
import Button from '../Components/Button';
import img from '../imgs/heroimg1.svg';
const AboutMe = () => {
  return (
    <div className="about-me" id='about'>
      <img id="about-img"src={img} alt ="pic of me"/>
      <div className='about-text'>
      <h2>A Little Bit About Me</h2>
      <p>I'm a student pursuing my Bachelor's Degree in Computer Science, with a passion for web development and design. My goals are to:
      </p>
      <ul>
        <li>Learn new things</li>
        <li>Meet new people</li>
        <li>Make a change</li>
      </ul>
      <Button secondary={true} text="Resume"/>
      </div>
      

    </div>
  )
}

export default AboutMe