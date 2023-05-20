import React from 'react';
import bioPic from '../images/Portfolio-Pic.jpg';

export default function Home() {
  return (
    <div>
     <h1>Welcome to my Portfolio</h1>
     <div className='about-me'>
       <img src={bioPic} alt='bio-pic'/>
      <p>
        Hello! My name is Wesley Harrison and I am a Full Stack Developer, Photographer, Musician, and Content Creator.
      </p>
      </div>
    </div>
  );
}
