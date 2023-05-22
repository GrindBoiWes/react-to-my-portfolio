import React from 'react';
import '../styles/style.css';


import port1 from '../../images/impress-your-friends.png';
import port2 from '../../images/moving-pic.png';
import port3 from '../../images/workday.png';
import port4 from '../../images/STM1.png';

const styles = {
  portStyle: {
    margin: '50px',
  },
  imgStyle: {
    margin: '20px 0px',
    border: '5px solid #999999',
    borderRadius: '30px',
    height: 'auto',
    width: '100%',
    display: 'grid',
    
  },

  h1Style: {
    color: 'white',
    fontFamily: 'Ink Free'
  }
}


export default function Portfolio() {
  return (
    <div style={styles.portStyle}>
      <h1 style={styles.h1Style}>Portfolio</h1>
      <section class= 'gallery'>
      <div class= 'container-lg'>
      <div class="row" className='port-photos'>
        <div class ="col">
        <img src ={port1} class ='gallery-item' style={styles.imgStyle} alt='impress-your-friends' />
        </div>
        <div class='col'>
        <img src ={port2} class ='gallery-item' style={styles.imgStyle} alt='moving-pictures' />
        </div>
        <div class='col'>
        <img src ={port3} class ='gallery-item' style={styles.imgStyle} alt='workday' />
        </div>
        <div class='col'>
        <img src ={port4} class ='gallery-item' style={styles.imgStyle} alt='smarter' />
        </div>
      </div>
    </div>
    </section>
    </div>
    
  );
}
