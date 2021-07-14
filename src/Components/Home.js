import React from 'react'
import './Home.css'
import { GiLifeBar } from 'react-icons/gi';
import { GrStatusUnknown } from 'react-icons/gr';

const Home = () => {
    return (
        <div className='home'>
            <div style={{textAlign:'center'}}>
                 <span class="dot"></span>
                 <h2>About Me</h2>
                 <hr/>
            </div> 
             <div className='intro'>
                 <p> Hello, I'm Tanvir Reza, a Front-end developer from Dhaka, Bangladesh. I
                     have rich experience on working with ReactJs, Firebase, also  I'm 
                     good at MySQL and  has the insights of PHP </p>
             </div>
             <div className='description'>
                   <h1><GiLifeBar size='23px'/> AGE <hr/> <p1> 25</p1> </h1>
                   <h1> <GrStatusUnknown size='23px'/> STATUS <hr/> <span> <p1 style={{color:'green'}}>Hierable</p1> </span> </h1>
                   
             </div>
             <hr width='70%'/>
        </div>
    )
}

export default Home
