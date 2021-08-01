import React from 'react'
import './blog.css'
import Data from './BlogData'


const Blog = () => {
    return (
        <div className='blog'>
            <div className='header-container'>
            <p> I write travel blogs sometimes! You can take a glance at couple of the attachments below</p>
            </div>
            <hr width='450px' style={{color:'white'}}/>
            <br/>
            <div className='blog-main'>
            
            <div className='blog-image'>
            
             <a href={Data[0].link} target='_blank'>
            <img src={Data[0].image}/>         
            </a>
            <p> {Data[0].name}</p>
            <div className='blog-description-container'>
            <p1>{Data[0].caption}</p1>
            </div>
            </div>
            <hr height='550px' style={{color:'white'}}/>
            <div className='blog-image'>
              
             <a href={Data[1].link} target='_blank'>
            <img src={Data[1].image}/>     
            </a>
            <p> {Data[1].name}</p>
            <div className='blog-description-container'>
            <p1>{Data[1].caption}</p1>
            </div>
            </div>
            </div>

        </div>
    )
}

export default Blog
