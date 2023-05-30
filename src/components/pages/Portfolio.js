import React from 'react';
import '../styles/style.css';


import port1 from '../../images/impress-your-friends.png';
import port2 from '../../images/moving-pic.png';
import port3 from '../../images/workday.png';
import port4 from '../../images/STM1.png';

const styles = {
  portStyle: {
    animation: 'drop-in 1s ease 200ms backwards'
  },
  imgStyle: {
    border: '3px solid #999999',
    borderRadius: '30px',
    height: '100%',
    width: '100%',
    display: 'grid',
    
  },

  imgSpace:{
    margin: '20px 0px'
  },

  

  h1Style: {
    color: 'white',
    fontFamily: 'Helvetica',
    display: 'flex',
    position: 'relative'
  }
}


export default function Portfolio() {
  return (
    <div style={styles.portStyle}>
      
      <section className= 'gallery'>
      <div className= 'container-lg'>
      <div className="row">
        <div className='col'>
      <h1 style={styles.h1Style}>Portfolio</h1>
      </div>
      </div>
      <div className='row' style={styles.imgSpace}>
        <div className ="col img-container">
          <a href ='https://grindboiwes.github.io/impress-your-friends/'>
        <img src ={port1} className ='gallery-item' style={styles.imgStyle} alt='impress-your-friends' />
         <div className='overlay'>
          <div className='proinfo'>Impress Your Friends</div>
        </div>
        </a>
        </div>
        <div className='col'>
          <a href='https://limitless-scrubland-26764.herokuapp.com/'>
        <img src ={port2} className ='gallery-item' style={styles.imgStyle} alt='moving-pictures' />
        <p>Moving Pictures</p>
        </a>
        </div>
        </div>
        <div className='row' style={styles.imgSpace}>
        <div className='col'>
          <a href ='https://grindboiwes.github.io/plan-ahead/'>
        <img src ={port3} className ='gallery-item' style={styles.imgStyle} alt='workday' />
        <p>Plan Ahead</p>
          </a>
        </div>
        <div className='col'>
          <a href ='https://grindboiwes.github.io/smarter-than-machines/'>
        <img src ={port4} className ='gallery-item' style={styles.imgStyle} alt='smarter' />
        <p>Smarter Than Machine</p>
        </a>
        </div>
      </div>
    </div>
    </section>
    </div>
    
  );
}
