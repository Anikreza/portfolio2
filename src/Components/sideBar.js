import React from 'react'
import '../Styles/LeftMost.css'
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import { ImBlogger2 } from 'react-icons/im';
import { FaAdn } from 'react-icons/fa';
import { SiReadthedocs } from 'react-icons/si';
import { ImBriefcase } from 'react-icons/im';
import { AiTwotoneMail } from 'react-icons/ai';
import {Animated} from "react-animated-css";

const SideBar = () => {
    return (
        <div className='leftmost'>
            <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true} >
            <div className='links'> 
            
            <NavLink className='hoveranim' to="/about"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> <FaAdn style={{marginLeft:'12px'}} size='25px'/>
            <p1> -</p1> ABOUT </NavLink>
            <hr width='60px'/>

            <NavLink className='hoveranim'  to="/resume"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> < SiReadthedocs style={{marginLeft:'12px'}}size='25px'/>
            <p1> -</p1> RESUME</NavLink>
            <hr width='60px'/>

            <NavLink className='hoveranim'  to="/works"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> <ImBriefcase style={{marginLeft:'12px'}}size='25px'/>
            <p1> -</p1> WORKS </NavLink>
            <hr width='60px'/>

            <NavLink className='hoveranim' to="/Blog"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> <ImBlogger2 style={{marginLeft:'12px'}} size='25px'/>
            <p1> -</p1>  BLOG </NavLink> 
            <hr width='60px'/>
            
            <NavLink className='hoveranim' to="/contact"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> <AiTwotoneMail style={{marginLeft:'12px'}}size='25px'/>
            <p1> -</p1> CONTACT </NavLink>
            
        </div>
        </Animated>
        </div>
    )
}

export default SideBar
