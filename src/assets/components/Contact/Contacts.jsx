import React from 'react'
import './Contacts.css'

function contacts() {
  return (
   <footer id='contact' className='footerContainer'>
    <div className='footerText'>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
      <ul className='footerLinks'>
        <li className='footerLink'>
          <img src='/Assets/contacts/emailIcon.png' alt='Email Icon' />
          <a href='mailto:zizkoteam@gmail.com'>zizkoteam@gmail.com</a>
        </li >
        <li className='footerLink'>
          <img src='/Assets/contacts/linkedinIcon.png' alt='LinkedIn Icon' />
          <a href='https://www.linkedin.com/in/adan-alinoor-048324236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>linkedIn.com/Adan-Alinoor</a>
        </li>
        <li className='footerLink'>
          <img src='/Assets/contacts/githubIcon.png' alt='Github Icon' />
          <a href='https://github.com/Adan-Alinoor'>Github.com/Adan-ALinoor</a>
        </li>
      </ul>

   </footer>
  )
}

export default contacts