import React from 'react'
import './LeftMost.css'
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiProfileLine } from 'react-icons/ri';
import { CgBriefcase } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const LeftMost = () => {
    return (
        <div className='leftmost'>
            <div className='links'> 
            
            <Link className='hoveranim' path to="/home" > <AiOutlineHome style={{marginLeft:'12px'}} size='25px'/>
            <p1> -</p1>  HOME </Link> 
            <hr width='60px'/>
            
            <Link className='hoveranim' path to="/about" > <CgProfile style={{marginLeft:'12px'}} size='25px'/>
            <p1> -</p1> ABOUT </Link>
            <hr width='60px'/>
            <Link className='hoveranim' path to="/resume" > <RiProfileLine style={{marginLeft:'12px'}}size='25px'/>
            <p1> -</p1> RESUME</Link>
            <hr width='60px'/>
            <Link className='hoveranim' path to="/works" > <CgBriefcase style={{marginLeft:'12px'}}size='25px'/>
            <p1> -</p1> WORKS </Link>
            <hr width='60px'/>
            <Link className='hoveranim' path to="/contact" > <AiOutlineMail style={{marginLeft:'12px'}}size='25px'/>
            <p1> -</p1> CONTACT </Link>
            
        </div>
        </div>
    )
}

export default LeftMost
