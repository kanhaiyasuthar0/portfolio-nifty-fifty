import React from 'react'
import "./skills.css";
import SkillsCard from './SkillsCard';
import { SkillsData } from './skillsdata';
const Skills = () => {
  const data = SkillsData;
  return (
    <div className='skills'>
      <label className='section-label' htmlFor="">Skills</label>
      <div className='skills-container'>
        {
          data.map((item)=>{
            return(
              <div className='skills-section'>
                <label className='skills-section-title' htmlFor="">{item.type}</label>
                <div className='skills-list'>
                  {item.list.map((skill)=>{
                    return (<SkillsCard skill={skill}/>)
                            })}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills