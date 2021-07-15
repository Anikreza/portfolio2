import React from 'react'
import { FaBriefcase } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { FaRegFlag} from 'react-icons/fa';
import a from './a.jpg'
import './circle.css'


const ResumeLeft = () => {
    return (
        <div className='resumeleft'>
            <div className='resume-left-title'>
            <h4> <FaBriefcase
             style={{color:'rgb(5, 66, 5)',paddingRight:'5px'}}
             />  EXPERIENCE
             </h4>
             </div>
             <hr/>
             <div className='left-box'>
             <p style={{color:'grey'}}> No Professional Experiences Yet </p>
             </div>
           
           <div className='circles'>
              <hr width='250px'/>
           <h2> <BsCodeSlash  color='rgb(5, 66, 5)' /> CODING</h2>
                  <div class="c100 green p70 center">
                  <span> 70%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                  </div>
                </div>
                <p>JAVASCRIPT</p>
            
            <div class="c100 green p80 center">
                  <span>80%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                 </div>
            </div>
            <p>CSS</p>
            
            <div class="c100 green p80 center">
                  <span>80%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                 </div>
            </div>
            <p>ReactJS</p>
            </div>


            <div className='language'>
               <hr width='250px' style={{color:'white'}}/>      
                <h2><FaRegFlag color='rgb(5, 66, 5)'/> LANGUEGES </h2>

                  <ul style={{display:'flex', flexDirection:'column', float:'left', width:'230px'}}>
                    <p style={{backgroundColor:'grey'}}>
                       <p1 style={{color:'grey', backgroundColor:'rgb(5, 66, 5)',float:'left', width:'100%'}}> Bangla </p1>
                    </p>   
                    <p style={{backgroundColor:'grey'}}>
                       <p1 style={{color:'grey', backgroundColor:'rgb(5, 66, 5)',float:'left', width:'85%'}}> English </p1>
                    </p>   
                    <p style={{backgroundColor:'grey'}}>
                       <p1 className='hide' style={{color:'grey', backgroundColor:'rgb(5, 66, 5)',float:'left', width:'10%'}}> <hr/> </p1>
                       Spanish </p>   
                  </ul>

           </div>


        </div>
    )
}

export default ResumeLeft
