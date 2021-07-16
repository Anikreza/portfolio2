import React from 'react'
import './Resume.css'
import ResumeLeft from './ResumeLeft'
import ResumeRight from './ResumeRight'


const Resume = () => {
    return (
        <div className='resume'>
            <div className="dotopacity2">      
                 <h2 style={{fontWeight:'normal', color:'black', width:'110px'}}>RESUME</h2>      
            </div> 
           <br/>
            
            <div className='resume-main'>
             <ResumeLeft/>
             <ResumeRight/>
             </div>
        </div>
    )
}

export default Resume
