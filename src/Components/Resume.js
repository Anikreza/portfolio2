import React from 'react'
import './Resume.css'
import ResumeLeft from './ResumeLeft'
import ResumeRight from './ResumeRight'


const Resume = () => {
    return (
        <div className='resume'>
            <div style={{textAlign:'center', marginRight:'74%'}}>
                 <span class="dot"></span>
                 <h2>RESUME</h2>
                 <hr style={{width:'385%', color:'white'}}/>
            </div> 

            <div className='resume-main'>
             <ResumeLeft/>
             <ResumeRight/>
             </div>
        </div>
    )
}

export default Resume
