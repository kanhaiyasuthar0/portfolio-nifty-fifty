import React from 'react'
import "./menu.css"
const Menu = ({isOpen, setIsOpen}) => {
  return (
    <div className='web'>

       <div className='web-option'>
         <a href="#projects"> <i className="fi fi-rr-edit-alt option-icon"></i> Projects </a>
       </div>
       <div className='web-option'>
         <a href="#skills"> <i className="fi fi-rr-laptop option-icon"></i> Skills </a>
       </div>
       <div className='web-option'>
         <a href="#contact"> <i className="fi fi-rr-user option-icon"></i> Contact me </a>
       </div>
       <div className='web-option'>
         <a href="#project"></a>
       </div>
       

    </div>
  )
}

export default Menu