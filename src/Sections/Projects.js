import React from 'react'
import img from '../imgs/heroimg2.svg';
import calc from '../imgs/tip-calc-screenshot.png';
import quote from '../imgs/quote.png';
import html from '../imgs/html.png';
import habits from '../imgs/habit.png'
const Projects = () => {
  return (
    <div className="projects section" id='projects'>
      <h2>My Projects</h2>
      <div className="project-container">
      <div className="project">
            <a className="proj-img" href="https://christina113-code.github.io/habit-tracker/"target={"_blank"}rel="noreferrer"><img alt="Habit Tracker"src={habits}/></a>
            <a className="proj-img" href="https://christina113-code.github.io/habit-tracker/"target={"_blank"}rel="noreferrer">Habit Tracker</a>
          </div>
          <div className="project">
            <a className="proj-img"href="https://christina113-code.github.io/tip-calculator/" target={"_blank"}rel="noreferrer"><img alt="tip calculator"src={calc}/></a>
            <a className="proj-img" href="https://christina113-code.github.io/tip-calculator/" target={"_blank"}rel="noreferrer">Tip Calculator</a>
            
          </div>
         
          <div className="project">
            <a className="proj-img" href="https://christina113-code.github.io/HTML-Markup-Previewer/"target={"_blank"}rel="noreferrer"><img alt="HTML Markup Previewer"src={html}/></a>
            <a className="proj-img" href="https://christina113-code.github.io/HTML-Markup-Previewer/"target={"_blank"}rel="noreferrer">HTML Markup Previewer</a>
          </div>
          <div className="project">
            <a className="proj-img" href="https://christina113-code.github.io/Random-Quote-Machine/"target={"_blank"}rel="noreferrer"><img alt="Quote generator"src={quote}/></a>
            <a className="proj-img" href="https://christina113-code.github.io/Random-Quote-Machine/"target={"_blank"}rel="noreferrer">Inspirational Quote Generator</a>
          </div>
          
         
      </div>
    </div>
  )
}

export default Projects