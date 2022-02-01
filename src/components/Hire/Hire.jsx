import React,{useRef,useState,useEffect} from 'react';
import "./Hire.css";
import emailjs from '@emailjs/browser';
function Hire() {
  const form = useRef();
  const [emailval,setEmailval]=useState("");
  const [nameval,setNameval]=useState("");
  const [messageval,setMessageval]=useState("");
  const[notifyactive,setNotifyActive]=useState(false);
 

 function handleSubmit(e){
  e.preventDefault();
 
  emailjs.sendForm('service_x8pmcet', 'template_1mk7jow', form.current, 'user_IdBLRFXfv7DT5KvkYnUk5')
    .then((result) => {
        console.log(result.text);
        setEmailval("");
        setMessageval("");
        setNameval("");
        setNotifyActive(true);
       setTimeout(()=>{
        console.log("changing notify state");
        setNotifyActive(false);
       },5000)
        
    }, (error) => {
        console.log(error.text);})

       
 }
  return <div className="Hire" id='hire' >
    <div className='Hire-left'>
      <div className='left-top'>
      <h1 className='heading'>Let's Talk</h1>
        <h5 className='meta'>Let us talk for a new project and make something awesome.
        <br></br>Let's build something innovative.
        </h5>
      </div>
      <div className='left-mid'>
      <div className='email'>
      soumyajitdutta15670@gmail.com
      </div>
      <div className='skype'>
      skype: live.soumyajit
      </div>
      </div>
      <div className='left-footer'>
      Follow me 
      <div className='social-icons'>
      <img src="facebook.svg" alt='' className='icon'></img>
      <img src="linkedin.svg" alt='' className='icon'></img>
      <img src="instagram.svg" alt='' className='icon'></img>
      </div>
      </div>
        
    </div>
    <div className='Hire-right'>
    <div className='right-top'>
    <h1>Let Me know here</h1>
    </div>
    <div className='right-body'>
    <form onSubmit={handleSubmit} ref={form} autoComplete="off">
    <input type="text" id="name" name="name" placeholder='Enter your full name' value={nameval} onChange={(e)=>{setNameval(e.target.value)}}/>
    <input type="email" id="email" name="email" placeholder='Enter email address' value={emailval} onChange={(e)=>{setEmailval(e.target.value)}}/>
    <textarea rows="6" name="message" id="message" placeholder='Write your message here' value={messageval} onChange={(e)=>{setMessageval(e.target.value)}}></textarea>
    <button type='submit' className='send'>SEND</button>
    </form>
    </div>
     {notifyactive&&<div className="notification">Your response has been submitted to us. I will get back to you shortly :-)</div>
     }
    </div>
  
    </div>
  
}

export default Hire;
