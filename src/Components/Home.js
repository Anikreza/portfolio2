import React from 'react'
import '../Styles/Home.css'
import { GiProgression } from 'react-icons/gi';
import { AiOutlineQuestion } from 'react-icons/ai';
import {Animated} from "react-animated-css";


const Home = () => {
    return (
        <div className='home'>
            <Animated animationIn="flash " animationOut="fadeOut" isVisible={true} >
            <div className="dotopacity">   
                 <h2 style={{fontWeight:'normal', color:'rgb(39, 39, 35)', width:'130px'}}>About Me </h2>          
            </div> 
            <hr/> 
            </Animated>
            <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true} >
             <div className='intro'>
                 <p > Hello, this is Tanvir Reza Anik, a fresh graduate from East West University, Dhaka, Bangladesh,
                       who is devotedly working his way towards being a full stack web developer. I'm
                      comfortable with ReactJS and Laravel as front and back end frameworks, and experienced 
                      working with mysql and firebase database.  
                       </p>
             </div>
             </Animated>
             <Animated animationIn="zoomInLeft" animationOut="fadeOut" isVisible={true} >
             <div className='description'>
                   <h1 className='makeline'><GiProgression size='20px'  style={{color:'rgb(5, 66, 5)'}}/> AGE <hr/> <p1> 24</p1> </h1> 
                   <h1> <AiOutlineQuestion size='20px' style={{color:'rgb(5, 66, 5)'}}/> STATUS <hr/> <span> <p1 className='dipanim' style={{color:'red'}}>Hierable</p1> </span> </h1>
                   
             </div>
             </Animated>
             <hr width='70%'/>
        </div>
    )
}

export default Home
