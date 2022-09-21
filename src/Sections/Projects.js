import React from 'react'
import img from '../imgs/heroimg2.svg';
const Projects = () => {
  return (
    <div className="projects section">
      <h2>My Projects</h2>
      <div className="project-container">
          <div className="project">
            <a href="/"><img alt="blah"src={img}/></a>
            <a href="/">Project 1</a>
          </div>
          <div className="project">
            <a href="/"><img alt="blah"src={img}/></a>
            <a href="/">Project 1</a>
          </div>
          <div className="project">
            <a href="/"><img alt="blah"src={img}/></a>
            <a href="/">Project 1</a>
          </div>
      </div>
    </div>
  )
}

export default Projects