import React from 'react'
import arrow from '../imgs/rightarrow.svg'
const Button = (props) => {
    return(
<>
{props.primary? <button className="primary btn"><a href='#projects' style={{color:'white'}}>{props.text}</a></button>
    :props.secondary? <button className="secondary btn">{props.text}</button>:
    <button className="normal btn">{props.text}<img id="right-arrow"alt="arrow"src={arrow}/></button>
    }
        </>
    )
        

    
    
    

 
}

export default Button
// Add this later to component
// <img  id="right-arrow"alt="arrow"src={arrow}/>
