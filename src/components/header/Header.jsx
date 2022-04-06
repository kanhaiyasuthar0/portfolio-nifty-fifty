import React, { useState } from 'react'
import "./header.css"
import Menu from '../web/Menu'
import Mobile from '../mobile/Mobile'
const Header = () => {
    const [ isOpen , setIsOpen] = useState(false);

  return (
    <div className='header'>
        <div className='logo'>
         <span className='overreact'>Overreacted</span> <span className='overcoded'>  Overcoded </span> 
        </div>
        <div  className='menu'> 
        <div>
            <div className='web-menu'>
                <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
          
        <div className='mobile-menu'>
             <div>  <i onClick={()=>setIsOpen(!isOpen)} className="fi fi-rr-apps menu-icon"></i> </div> 
              {isOpen &&  <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/> } 
            </div> 
          
        </div>
        </div>
    </div>
  )
}

export default Header