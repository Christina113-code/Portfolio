import React from 'react'
import arrow from '../imgs/rightarrow.svg'
const Button = (props) => {
    return(
<>
{props.primary?<a className="button-anchor" href='#projects' style={{color:'white'}}> <button className="primary btn">{props.text}</button></a>
    :props.secondary? <a className="resume-btn"href='https://1drv.ms/b/s!Av1f2KJivTOJnOM0Vwy65_P3np_qYQ?e=iS7Ha8'  target={'_blank'} rel="noreferrer"style={{color:'var(--clr-prmy)'}}><button className="secondary btn">{props.text}</button></a>:
    <button className="normal btn">{props.text}<img id="right-arrow"alt="arrow"src={arrow}/></button>
    }
        </>
    )
        

    
    
    

 
}

export default Button
// Add this later to component
// <img  id="right-arrow"alt="arrow"src={arrow}/>
