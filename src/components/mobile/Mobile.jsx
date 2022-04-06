import React from 'react';
import "./mobile.css";
const Mobile = ({isOpen, setIsOpen}) => {
  return (
    <div className='mobile'> 
        <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}><i className="fi fi-rr-cross-circle"></i></div>
        <div className='mobile-options'>
        <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
         <a href="#projects"> <i className="fi fi-rr-edit-alt option-icon"></i> Projects </a>
       </div>
       <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
         <a href="#skills"> <i className="fi fi-rr-laptop option-icon"></i> Skills </a>
       </div>
       <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
         <a href="#contact"> <i className="fi fi-rr-user option-icon"></i> Contact me </a>
       </div>
       <div className='mobile-option' onClick={()=>setIsOpen(!isOpen)}>
         <a href="#About"> About  </a>
       </div>


        </div>
       
    </div>
  )
}

export default Mobile