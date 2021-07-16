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
             
           <h2> <BsCodeSlash  color='rgb(5, 66, 5)' /> CODING</h2>
           <hr width='250px'/>
                  <div class="c100 green p80 center">
                  <span> 80%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                  </div>
                </div>
                <p>ReactJS</p>
            

            <div class="c100 green p85 center">
                  <span>85%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                 </div>
            </div>
              <p> C++ </p>
            </div>

                       
            <div class="c100 green p40 center">
                  <span>40%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                 </div>
            </div>
            <p>PHP</p>


            <div className='language'>
               <hr width='250px' style={{color:'white'}}/>      
                <h2><FaRegFlag color='rgb(5, 66, 5)'/> WEB TECH </h2>

                  <ul style={{display:'flex', flexDirection:'column', float:'left', width:'230px', borderRadius:'20px', fontSize:'12px'}}>
                    <p style={{backgroundColor:'grey', borderRadius:'20px'}}>
                       <p1 style={{color:'white', backgroundColor:'green',float:'left', width:'95%', borderRadius:'20px', fontSize:'12px'}}> HTML</p1>
                    </p> 

                    <p style={{backgroundColor:'grey', borderRadius:'20px'}}>
                       <p1 style={{color:'white', backgroundColor:'green',float:'left', width:'85%', borderRadius:'20px', fontSize:'12px'}}> CSS</p1>
                    </p>  

                    <p style={{backgroundColor:'grey', borderRadius:'20px'}}>
                       <p1 className='hide' style={{color:'white', backgroundColor:'green',float:'left', width:'75%', borderRadius:'20px', fontSize:'12px'}}>  JAVASCRIPT </p1>
                      </p> 

                    <p style={{backgroundColor:'grey', borderRadius:'20px',}}>
                       <p1 className='hide' style={{color:'white', backgroundColor:'green',float:'left', width:'85%', borderRadius:'20px', fontSize:'12px'}}>  Firebase </p1>
                      </p>   

                    <p style={{backgroundColor:'grey', borderRadius:'20px'}}>
                       <p1 className='hide' style={{color:'white', backgroundColor:'green',float:'left', width:'50%', borderRadius:'20px', fontSize:'12px'}}>  MySQL </p1>
                      </p>  
  
                  </ul>

           </div>


        </div>
    )
}

export default ResumeLeft
