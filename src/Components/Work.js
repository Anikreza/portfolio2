

import React, {useState} from 'react'
import Menu from "./Data";
import './gallery.css'
import { BsSearch } from 'react-icons/bs';
import WorkMap from './WorkMap';
import {Animated} from "react-animated-css";

const Work = () => {

    const [items, setItems] = useState(Menu);

    const filterItem = (e) => {  
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === e;
        });
        setItems(updatedItems);     
    }


  return (
    <div className='work'>
                   <div className='top'>  

                   <div className="dotopacity2">      
                      <h2 style={{fontWeight:'normal', color:'black', width:'110px'}}>WORKS</h2>      
                  </div> 
                  <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}animationInDelay ='1500' >
                   <ul >
                   <form style={{display:'flex', justifyContent:'space-evenly', width:'300px'}} onSubmit={(e)=>e.preventDefault()}>             
                    
                    <button  onClick={() => filterItem('live')}>LIVE</button>
                    <button  onClick={() => filterItem('code')}> NONLIVE</button>
                    <button  onClick={() => setItems(Menu)}> ALL</button>
                   
                    </form>
                         <hr/>
                    </ul> 
                    </Animated> 
                    </div>   
                    <Animated animationIn="bounceInDown" animationOut="slideOutLeft" isVisible={true} animationInDelay ='500'>
          
                    <div className='main'>   
                        <div className='row'> 
              
                      {items.map(i=>(
                          <WorkMap 
                              key={i.id}
                              name={i.name}
                              category={i.category}
                              link={i.link}
                              caption={i.caption}
                              image={i.image}
                              header={i.header}
                          />
                      ))}

                    </div>  
                 </div>  
                 </Animated> 
       </div>  
        
    )
}

export default Work

