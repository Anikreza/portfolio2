import React, {useState} from 'react'

const WorkMap = ( {header, caption, image, category,name,id, link}) => {

    const [toggle, setToggle]=useState('true');

    const toggler =()=>{
        setToggle((prev)=> !prev);
    }

    return (

        <div className='column'>
         <div className='contenta'>

             <a href={link} target="blank">    
                <img src={image} alt={name} />   
              </a>
                  <p> {name}</p>
          </div>
         </div>
    )
}

export default WorkMap
