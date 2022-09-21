import React from 'react'
import Button from '../Components/Button';
import img from '../imgs/heroimg1.svg';
const AboutMe = () => {
  return (
    <div className="about-me">
      <img id="about-img"src={img} alt ="pic of me"/>
      <h2>A Little Bit About Me</h2>
      <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing
      </p>
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
      <Button secondary={true} text="Resume"/>

    </div>
  )
}

export default AboutMe