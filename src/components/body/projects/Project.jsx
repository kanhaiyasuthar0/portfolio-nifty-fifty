import React from 'react'
import "./project.css"
import ProjectsCard from './ProjectsCard';
import { ProjectsData } from './ProjectsData'
const Project = () => {
  const data = ProjectsData;
  return (
    <div className='projects'>
      <label>Projects</label>
      <div>
        {data.map((project)=>{
          return <ProjectsCard project={project}/>
        })}

      </div>
    </div>
  )
}

export default Project