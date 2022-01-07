import React, {useState,useRef, useEffect} from "react";
import '../Styles/Contact.css'
import {GoogleLogin} from 'react-google-login'
import { BiMailSend} from 'react-icons/bi';
import { BiSend} from 'react-icons/bi';
import db from './Database/firebase'
import firebase from 'firebase'

const Contact = () => {

    const ref= useRef();

    useEffect(() => {
       let e= ref.current
        console.log(e);
    }, [])

    const [message, setMessage] =useState('');
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    
 

    function responseGoogle (response){
        console.log(response);

        setEmail(response.profileObj.email)           
        setName(response.profileObj.givenName)           
          
      }

    function submithandler(){
        if(!email) {
          alert('Please Sign In First!')
          return
        }
        db.collection("messages").add ({
            message: message,
            name: name,
            email:email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
          setMessage('');
          alert(`I Recieved your Message,  ${name}, Thank you for getting in touch!`)
    }

    return (

        <div className='contact'>

            <div className='before-login'>
            <hr/>
                 <h2> Contact Me</h2>
                 <hr/>
              
                
                 <p2> Mail: <span> <a href='https://mail.google.com/mail/u/0/#inbox?compose=jrjtXPVgvThNgwfhHXFhRsWzXNcjSMhkPrGmbFHnjcMkvsXRctsGmgRqSkNdvfnHtBNCqwJM' target='blank'> 
              tanvirrezaanik@gmail.com </a> </span></p2> <br/>
                <p2> Call: <span> <p1>+88 01687005154 </p1></span> <br/><br/></p2>
                <hr/>
                <p>OR</p>
                <div ref={ref} className='gg'>
                 <GoogleLogin  ref={ref}
                 clientId="766075204483-lulb8u6h2g1v0h8kp0gsnirlntf170en.apps.googleusercontent.com"
                 buttonText="Login With Google"
                 onSuccess={responseGoogle}
                 onFailure={responseGoogle}
                 cookiePolicy={'single_host_origin'}
        />
        </div>
           </div>
          <div className='login'>

          <form onSubmit={(e)=> e.preventDefault()}>

              <input  type='text' role="textbox" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Type Your Message...' />
              
              <button id='button' type='submit' onClick={submithandler} style={{display:'none'}}>   </button>
                <label className='icon' htmlFor='button'> <BiSend size='30px'/> </label> 

          </form>
          </div>


        </div>
    )
}

export default Contact
