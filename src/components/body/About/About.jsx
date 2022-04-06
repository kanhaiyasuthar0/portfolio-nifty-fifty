import React from 'react'
import "./about.css"
const About = () => {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>Hello There 👋, I am <br />
             <span> Kanhaiya Suthar </span> . <br />
              I love experimenting with the web</div>
            <div className='about-photo'>
                <img src="./coding.png" alt="info-pic" className='info-pic' />
            </div>
        </div>
        <div className='about-bottom'></div>

    </div>
  )
}

export default About