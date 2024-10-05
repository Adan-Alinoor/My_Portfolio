

import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className='hero-container'>
      <img className='hero-img' src="Assets/Hero/WhatsApp Image 2024-08-28 at 8.28.53 PM.jpeg" alt="Hero" />
      <div className='hero-content'>
      <h1 className='hero-title'>
          Hi <span className="emoji">👋</span>, I'm Adan ALinoor
        </h1>
        <p className='hero-description'> 
          I’m a passionate Full-Stack Developer with expertise in frontend and backend development, specializing in JavaScript (React) and Python (Flask). 
          I build robust applications with user-friendly interfaces and seamless experiences, also leveraging my basic UI/UX design knowledge.
          I’m experienced in database management and hosting solutions, and currently exploring Next.js and PHP to expand my skill set.
          Always eager to learn and collaborate, I aim to create impactful, innovative solutions that make a difference.
          Let’s build something amazing together!
        </p>
        <a className='contact-btn' href='mailto:zizkoteam@gmail.com'>Contact Me</a>
      </div>
      <div className='topBlur'/>
    <div className='bottomBlur'/>
    </section>
  );
}

export default Hero;

