import React from 'react'
import './LeftMost.css'
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiProfileLine } from 'react-icons/ri';
import { CgBriefcase } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import {Animated} from "react-animated-css";

const LeftMost = () => {
    return (
        <div className='leftmost'>
            <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true} >
            <div className='links'> 
            
            <NavLink className='hoveranim' to="/home"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> <AiOutlineHome style={{marginLeft:'12px'}} size='25px'/>
            <p1> -</p1>  HOME </NavLink> 
            <hr width='60px'/>
            
            <NavLink className='hoveranim' to="/about"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> <CgProfile style={{marginLeft:'12px'}} size='25px'/>
            <p1> -</p1> ABOUT </NavLink>
            <hr width='60px'/>
            <NavLink className='hoveranim'  to="/resume"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> <RiProfileLine style={{marginLeft:'12px'}}size='25px'/>
            <p1> -</p1> RESUME</NavLink>
            <hr width='60px'/>
            <NavLink className='hoveranim'  to="/works"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> <CgBriefcase style={{marginLeft:'12px'}}size='25px'/>
            <p1> -</p1> WORKS </NavLink>
            <hr width='60px'/>
            <NavLink className='hoveranim' to="/contact"  activeStyle={{ fontWeight: "bold",color: "rgb(5, 66, 5)", opacity:'.6'}}> <AiOutlineMail style={{marginLeft:'12px'}}size='25px'/>
            <p1> -</p1> CONTACT </NavLink>
            
        </div>
        </Animated>
        </div>
    )
}

export default LeftMost
