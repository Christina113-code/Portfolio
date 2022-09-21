import React from 'react'
import arrow from '../imgs/rightarrow.svg'
const Button = (props) => {
    return(
<>
{props.primary? <button className="primary btn">{props.text}<img  id="right-arrow"alt="arrow"src={arrow}/></button>
    :props.secondary? <button className="secondary btn">{props.text}<img  id="right-arrow"alt="arrow"src={arrow}/></button>:
    <button className="normal btn">{props.text}<img id="right-arrow"alt="arrow"src={arrow}/></button>
    }
        </>
    )
        

    
    
    

 
}

export default Button