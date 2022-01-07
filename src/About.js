import React from 'react'
import './Styles/About.css'
import {Animated} from "react-animated-css";

const About = () => {
    return (
        <div className='about'> 
        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true} >
         <div className='about-container'> 
             <div>
             <h2> Hey There!</h2>
             </div>       
             <p className='infoanim2'> I Write Codes & Blogs</p>
             <div>
             <p1> Intoxication, & Fuels</p1>
             </div>     
        </div>
        </Animated>  
      </div>

    )
}

export default About
