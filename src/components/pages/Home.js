import React from 'react';
import '../styles/style.css';

const styles = {
  homeStyle: {
    margin: '0px',
    height: 'auto',
    width: 'auto',
  },

  mainStyle: {
    display: 'block',
    position: 'relative',
    alignItem: 'center',
    marginTop : '250px',
    marginLeft: '500px',
    animation: 'drop-in 1s ease 200ms backwards'
  },

  secondStyle: {
    display: 'block', 
    animation: 'drop-in 1200ms ease 500ms backwards'
  },

  h1Style: {
    fontFamily: 'Helvetica',
    fontSize: '8.5em',
    color: 'white',
    
    
  },

  h2Style: {
    fontFamily: 'Helvetica',
    fontSize: '7.5em',
    color: 'white',
    display: 'block',
    
  },

  h3Style: {
    fontFamily: 'Verdana',
    fontSize: '3.5em',
    color: 'white',
    
  },

  h4Style: {
    fontFamily: 'Verdana',
    fontSize: '3.5em',
    color: 'white',
  },
}


export default function Home() {
  return (
    <div style={styles.homeStyle} >
     <div style={styles.mainStyle}>
      <h3 style={styles.h3Style}> 
       Hello! My name is 
      </h3>
        <h1 style={styles.h1Style}>
          Wes Harrison
        </h1>
        <div style={styles.secondStyle}>
        <h4 style={styles.h4Style}>
          and I am a
        </h4>
        <h2 style={styles.h2Style}>
          Full Stack Developer
        </h2>
        </div>
      </div>
    </div>
   
  );
}
