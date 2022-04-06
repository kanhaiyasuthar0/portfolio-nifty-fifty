import React from 'react'
import "./projectscard.css"
const ProjectsCard = ({project}) => {
    console.log(project.image)
  return (
    <div className='project-card'>
        <div className="project-info">
            <label htmlFor="" className='project-title'>{project.title}</label>
            <div className="project-links">
                {project.demo&&( <a className='project-link' href={project.demo}>
                    <div className='link-button'>
                    <i class="fi fi-rr-globe-alt"></i>Demo
                    </div>
                </a> )}
                {project.github && (<a className='project-link' href={project.github}>
                    <div className='link-button'>
                    <i class="devicon-github-original colored"></i>
Github
                    </div>
                </a>) }
            </div>
            <p>{project.about}</p>
            <div className="project-tags">
                {project.tags.map((tag)=>{
                    return (
                        <label className='tag' htmlFor="">{tag}</label>
                    )
                })}
            </div>
        </div>
        <img src={project.image} className="project-photo" alt={project.title} />
    </div>
  )
}

export default ProjectsCard