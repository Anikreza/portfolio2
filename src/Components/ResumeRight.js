import React from 'react'
import { MdSchool} from 'react-icons/md';
import { HiViewList} from 'react-icons/hi';
import { TiTick} from 'react-icons/ti';
import a from './a.jpg'
import {Animated} from "react-animated-css";
import { FaRegFlag} from 'react-icons/fa';

const ResumeRight = () => {
    return (
          
            <div className='resumeright'>
            <div className='resume-right-title'>
             <h4> <MdSchool
             style={{color:'rgb(5, 66, 5)', paddingRight:'5px'}}
              />   EDUCATION
             </h4>
             </div>
            
             <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} >
             <div className='education'>
                   <p style={{color:'rgb(39, 39, 35)', borderWidth:'thin', marginTop:'20px', opacity:'1'}}>2016-2021 
                   <h2 style={{color:'#99625f',fontWeight:'lighter',maxWidth:'260px',marginTop:'30px',float:'right', marginRight:'40px', display:'flex',flexDirection:'column'}}>
                        East West University 
                      <span style={{color:'grey',fontSize:'12px', fontWeight:'lighter',paddingTop:'5px'}}>
                        Dhaka, Bangladesh 
                      </span> 
                      <span  style={{color:'#13541b',fontSize:'16px',paddingTop:'5px'}}> <p1> Bachelor in CSE </p1></span>
                   </h2>  
                   </p> 
             </div>
             </Animated>
             <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true} >
             <div className='college'>
             <p style={{color:'rgb(39, 39, 35)', borderWidth:'thin', Width:'auto', marginTop:'130px', opacity:'1'}}>2012-2014 
                   <h2 style={{color:'#111a4f',fontWeight:'lighter',maxWidth:'260px',marginTop:'30px', float:'right', fontSize:'23px', marginRight:'20px', display:'flex',flexDirection:'column'}}>
                       Bangladesh Navy College
                      <span style={{color:'grey',fontSize:'12px', fontWeight:'lighter', paddingTop:'5px'}}>
                        Dhaka, Bangladesh 
                      </span> 
                      <span  style={{color:'#13541b',fontSize:'15px',paddingTop:'5px'}}> <p1>H.S.C in Science</p1></span>
                   </h2>  
                   </p> 
             </div>
             </Animated>
             <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true} >
             <div className='school'>
             <p style={{color:'rgb(39, 39, 35)', borderWidth:'thin', marginTop:'130px', opacity:'1'}}>2010-2012 
                   <h2 style={{color:'#1a1a1a',maxWidth:'260px',marginTop:'30px', float:'right', fontSize:'18px', marginRight:'20px', display:'flex',flexDirection:'column'}}>
                        Ali Ahmed High School & College
                      <span style={{color:'grey',fontSize:'12px', fontWeight:'lighter', paddingTop:'5px'}}>
                        Dhaka, Bangladesh 
                      </span> 
                      <span style={{color:'#13541b',fontSize:'15px',paddingTop:'5px'}}><p1>S.S.C in Science</p1> </span>
                   </h2>  
                   </p> 
             </div>
             </Animated>
             
             <div className='knowledge'>
             <hr width='250px' style={{color:'white'}}/>
             <hr width='250px' style={{color:'white'}}/>
             <h2><HiViewList/>Standout Skills</h2>  
             <ul style={{display:'flex', flexDirection:'column', maxWidth:'200px', marginRight:'50px'}}>
              <h4> <TiTick color='rgb(5, 66, 5)'/> Googling </h4>
              <h4> <TiTick color='rgb(5, 66, 5)'/> persistence</h4>
              <h4> <TiTick color='rgb(5, 66, 5)'/> Positivity Catalyst </h4>
             </ul>
           </div>


           <div className='center'>
             <div className='lang'>
               <hr/>
             <h3> <FaRegFlag/> LANGUAGES</h3>
         <div  style={{float:'none',margin:'0 auto', marginTop:'2vh', display:'flex', flexDirection:'row'}}>
           <div className='dot'></div>
           <div className='dot'> </div>
           <div className='dot'> </div>
           <div className='dot'> </div>
           <div className='dot'> </div>
           
        </div>
        <p> Bangla</p> 
         <div style={{ display:'flex', flexDirection:'row'}}>
           <div className='dot'>  </div>
           <div className='dot'> </div>
           <div className='dot'> </div>
           <div className='dot'> </div>
           <div className='dota'> </div>
           
        </div>
        <p> English</p> 
        
        
        </div>
        </div>
        </div>
 
     

    )
}

export default ResumeRight
