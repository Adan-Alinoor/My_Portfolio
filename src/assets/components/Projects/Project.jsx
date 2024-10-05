

import React from 'react'
import  "./Project.css";
 import projects from "../../Data/projects.json";
 import ProjectCard from './ProjectCard';

function Project() {
  return (
    <section className='projectContainer' id="projects">
    <h2 className='projectTitle'>Projects</h2>
    <div className='projectProjects'>
      {projects.map((project, id) => {
        return <ProjectCard key={id} project={project} />;
      })}
    </div>
  </section>
  )
}

export default Project