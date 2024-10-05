// import React from 'react'

// function About() {
//   return (
//     <section className='container' id='about'>
//         <h2 className='title'>About</h2>
//         <div className='content'>
//             <img className='aboutImage aboutImg' src='/Assets/About/WhatsApp_Image_Resized.jpeg' alt='Me sitting with a laptop'/>
//             <ul className='aboutItems'>
//                 <li className='aboutItem'>
//                     <img  src='/Assets/About/cursorIcon.png'/>
//                     <div className='aboutItemText'>
//                         <h3>Frontend Developer</h3>
//                         <p>I'm a frontend developer with experience in building responsive and optimised sites</p>

//                     </div>
//                 </li >
//                 <li className='aboutItem'>
//                     <img src='/Assets/About/serverIcon.png' alt=' Server Icon'/>
//                     <div className='aboutItemText'>
//                         <h3>Backend Developer</h3>
//                         <p>I'm a backend developer with experience in developing  fast and optimised APIs</p>

//                     </div>
//                 </li>
//                 <li className='aboutItem'>
//                     <img src='/Assets/About/uiIcon.png' alt='UI Icon'/>
//                     <div className='aboutItemText'>
//                         <h3>UI designer</h3>
//                         <p>I have designed multiple landing pages and UI designs using Figma</p>

//                     </div>
//                 </li>
//             </ul>
//         </div>
//     </section>
//   )
// }

// export default About

import React from 'react';
import './About.css';

function About() {
  return (
    <section className='container' id='about'>
      <h2 className='title'>About</h2>
      <div className='content'>
        <img className='aboutImage aboutImg' src='/Assets/About/WhatsApp_Image_Resized.jpeg' alt='Me sitting with a laptop'/>
        <ul className='aboutItems'>
          <li className='aboutItem'>
            <img src='/Assets/About/cursorIcon.png' alt='Cursor Icon' />
            <div className='aboutItemText'>
              <h3>Frontend Developer</h3>
              <p className='paragraph'>As a frontend developer, I create engaging user interfaces with a focus on performance and responsiveness, ensuring a smooth user experience.</p>
            </div>
          </li>
          <li className='aboutItem'>
            <img src='/Assets/About/serverIcon.png' alt='Server Icon' />
            <div className='aboutItemText'>
              <h3>Backend Developer</h3>
              <p className='paragraph'>I specialize in building scalable backend systems and APIs, ensuring data integrity and optimized performance for web applications.</p>
            </div>
          </li>
          <li className='aboutItem'>
            <img src='/Assets/About/uiIcon.png' alt='UI Icon' />
            <div className='aboutItemText'>
              <h3>UI Designer</h3>
              <p className='paragraph'  >As a UI designer, I focus on crafting intuitive layouts and design systems using Figma to enhance user interactions across platforms.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
