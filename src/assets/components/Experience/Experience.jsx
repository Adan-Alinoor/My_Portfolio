import React from 'react'
import './Experience.css'
import skills from '../../Data/skills.json'
import history from '../../Data/history.json'

function Experience() {
  return (
    <section className='container' id='skills'>
<h2 className='title'>Skills</h2>
<div className='content'>
    <div className='skills' >
{skills.map((skill,id)=>{
    return <div className='skill' key={id}>
         <div className='skillImageContainer'>
            <img src={skill.imageSrc} alt={skills.title}/>
         </div>
         <p>{skill.title}</p>
    </div>
})}
    </div>
    {/* <ul className='history'>
{history.map((historyItem,id)=>{
    return <li className='historyItem' key={id}>
        <img src={historyItem.imageSrc} alt={`${historyItem.organisation} logo`}/>
        <div className='historyItemDetails'>
            <h3>{historyItem.role},{historyItem.organisation}</h3>
            <p>{`${historyItem.startDate}${historyItem.endDate}`}</p>
            <ul>
                {historyItem.experiences.map((experience,id)=>{
                    return <li key={id}>{experience}</li>
                })}
            </ul>
        </div>
    </li>
})}
    </ul> */}
</div>

    </section>
  )
}

export default Experience