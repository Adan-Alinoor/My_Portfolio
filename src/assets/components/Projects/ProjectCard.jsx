import React from 'react'
import './ProjectCard.css'

function ProjectCard({project}) {
    const { title, imageSrc, description, skills, demo, source } = project;
  return (
     <div className='projectCardContainer' >
        <img className='projectCardImage' src={imageSrc} alt={` Image of ${title}`}/> 
        <h3 className='projectCardTitle'>{title}</h3>
        <p className='projectCardDescription'>{description}</p>
        <ul className='projectCardSkills'>
        {
            skills.map((skill,id)=>{
               return <li className='projectCardSkill' key={id}>{skill}</li>
            })
        }
        </ul>
        <div className='projectCardLinks'>
        <a className='projectCardLink' href={demo}>Demo</a>
        <a  className='projectCardLink' href={source}>Source</a>
        </div>


    </div>

  )
}

export default ProjectCard