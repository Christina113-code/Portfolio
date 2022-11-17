import React from 'react'
import html from '../imgs/html.svg'
import react_logo from '../imgs/react.svg'
import css from '../imgs/css.svg';
import js from '../imgs/js.svg';
import python from '../imgs/python.svg';
import java from '../imgs/java.svg';


const SkillsSection = () => {
  return (
    <div className="skills-section section" id='skills'>
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-item">
          <div className="circle">
            <img className="skill-img"src={react_logo} alt="react-logo" />
          </div>
          <p>React</p>
        </div>
        <div className="skills-item">
          <div className="circle">
            <img src={html} alt="react-logo" />
          </div>
          <p>HTML</p>
        </div>
        <div className="skills-item">
          <div className="circle">
            <img src={css} alt="react-logo" />
          </div>
          <p>CSS</p>
        </div>
        <div className="skills-item">
          <div className="circle">
            <img src={js} alt="react-logo" />
          </div>
          <p>Javascript</p>
        </div>
        <div className="skills-item">
          <div className="circle">
            <img className="skill-img"src={java} alt="react-logo" />
          </div>
          <p>Java</p>
        </div>
        <div className="skills-item">
          <div className="circle">
            <img className="skill-img"src={python} alt="react-logo" />
          </div>
          <p>Python</p>
        </div>
      </div>
     
    </div>
    
  )
}

export default SkillsSection