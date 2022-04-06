import React from 'react'
import "./skillcard.css"
const SkillsCard = ({skill}) => {
  return (
    <div className='skill-card'>
        <div className='skill-icon'>{skill.icon}</div>
        <label htmlFor="" className='skill-name'>{skill.name}</label>
    </div>
  )
}

export default SkillsCard