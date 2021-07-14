import React from 'react'
import './Left.css'
import a from './a.jpg'
import {Animated} from "react-animated-css";
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const Left = () => {
    return (
        <div className='left'>
            <div className='profile'>
                <div className='photo'>
                    <img src={a}/>
                </div>

                  <div className='stylediv'></div>
             
                  <div className='info'>
                      <h2>Tanvir Reza Anik</h2>
                      <p className='infoanim'> Web Developer</p>   

                     <div className='bottom'>
                         <a className='iconanim' href="https://www.facebook.com/Anikreza22/" target='blank'><AiOutlineFacebook size='20px'/></a>
                         <a className='iconanim' href="https://github.com/Anikreza" target='blank'> <AiOutlineGithub size='20px'/></a>
                         <a className='iconanim' href="https://twitter.com/TanvirRezaAnik1" target='blank'> <AiOutlineTwitter size='20px'/></a>
                     </div> 
                     <br/><br/><br/><br/><hr/> 
                     <a className='left-footer' href='https://drive.google.com/file/d/1ZUnKgnpWHq4cVRB8YVNlU6meOLVpjLYp/view?usp=sharing'
                       target='blank'> Download CV</a>                   
                 </div>

              
            </div>
        </div>
    )
}

export default Left
