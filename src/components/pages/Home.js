import React from 'react';
import '../styles/style.css';
import bioPic from '../../images/Portfolio-Pic.jpg';

const styles = {
  homeStyle: {
    background: '#999999',
    margin: '0px',
    height: '100vh',
    width: 'auto',
  },

}


export default function Home() {
  return (
    <div style={styles.homeStyle} className='home-page'>
     <h1>Welcome to my Portfolio</h1>
     <div className='about-me'>
       <img src={bioPic} className='bioPic' alt='bio-pic'/>
      <p className='bio-info'> 
        Hello! My name is Wesley Harrison and I am a Full Stack Developer, Photographer, Musician, and Content Creator.
      </p>
      </div>
    </div>
  );
}
