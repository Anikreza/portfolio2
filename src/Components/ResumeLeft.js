import React from 'react'
import { FaBriefcase } from 'react-icons/fa';
import a from './a.jpg'


const ResumeLeft = () => {
    return (
        <div className='resumeleft'>
            <div className='resume-left-title'>
            <h4> <FaBriefcase
             style={{color:'rgb(5, 66, 5)',paddingRight:'5px'}}
             />  EXPERIENCE
             </h4>
             </div>
             <div className='left-box'>
             <p> Zero ExperienceZero Experience Zero Experience Zero Experience Zero Experience Zero Experience </p>
             </div>
        </div>
    )
}

export default ResumeLeft
