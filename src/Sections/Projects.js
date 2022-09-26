import React from 'react'
import img from '../imgs/heroimg2.svg';
import calc from '../imgs/tip-calc-screenshot.png';
const Projects = () => {
  return (
    <div className="projects section" id='projects'>
      <h2>My Projects</h2>
      <div className="project-container">
          <div className="project">
            <a className="proj-img"href="https://christina113-code.github.io/tip-calculator/" target={"_blank"}rel="noreferrer"><img alt="blah"src={calc}/></a>
            <a className="proj-img" href="https://christina113-code.github.io/tip-calculator/" target={"_blank"}rel="noreferrer">Tip Calculator</a>
          </div>
          <div className="project">
            <a className="proj-img" href="/"><img alt="blah"src={img}/></a>
            <a className="proj-img" href="/">Project 1</a>
          </div>
          <div className="project">
            <a className="proj-img" href="/"><img alt="blah"src={img}/></a>
            <a className="proj-img" href="/">Project 1</a>
          </div>
          <div className="project">
            <a className="proj-img" href="/"><img alt="blah"src={img}/></a>
            <a className="proj-img" href="/">Project 1</a>
          </div>
      </div>
    </div>
  )
}

export default Projects