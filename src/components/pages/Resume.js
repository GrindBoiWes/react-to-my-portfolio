import React from 'react';
import '../styles/style.css';

const styles = {
  iconStyle: {
    width: '35%',
    height: 'auto',
    margin: '20px',
    animation: 'drop-in 1200ms ease 200ms backwards',
    marginTop: '150px'
  },

  h1Style: {
    fontFamily: 'Helvetica',
    color: 'white',
    animation: 'drop-in 1s ease 200ms backwards',
    marginLeft: '25%'
  },

  h2Style: {
    fontFamily: 'Helvetica',
    color: 'white',
    animation: 'drop-in 1500ms ease 200ms backwards',
  },

  linkStyle: {
    textDecoration: 'none',
    fontFamily: 'Verdana',
    animation: 'drop-in 1500ms ease 200ms backwards',
    color: 'white'
  },

  resumeStyle: {
    display: 'flex',
    fontSize: '1.5em',
    marginLeft: '41%'
  }
}

export default function Resume() {
  return (
    <div>
      <h1 style={styles.h1Style}>Resume</h1>
      <div className ='container-lg'>
        <div className= 'row'>
        <div className ='col'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style={styles.iconStyle} alt='html' />
        </div>
      <div className ='col'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style={styles.iconStyle} alt='css' />
        </div>
      <div className= 'col'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={styles.iconStyle} alt='javascript' />
        </div>
      </div>
      <div className= 'row'>
        <div className= 'col'>
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style={styles.iconStyle} alt='nodeJS' />
        </div>
        <div className ='col'>
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" style={styles.iconStyle} alt='express' />
         </div>
        <div className= 'col'>
         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" style={styles.iconStyle} alt ='mysql' />
         </div>
      </div>
      <div className='row'>
        <div className= 'col'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" style={styles.iconStyle} alt='npm'/>
         </div>
         <div className= 'col'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" style={styles.iconStyle} alt='heroku'/>
      </div>
      <div className= 'col'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style={styles.iconStyle} alt='react' />
      </div>
      </div>
      </div>
      <div style={styles.resumeStyle}>
      <a href= 'https://docs.google.com/document/d/1KpbNyOfZeASO_-Nid_pJN3wSSst-wcRHhRHrp86X4eQ/edit?usp=sharing' className='resume' style={styles.linkStyle} target='_blank' rel='nonreferrer'>Download Resume!</a>
      </div>
    </div>
  );
}
