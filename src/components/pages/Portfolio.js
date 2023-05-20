import React from 'react';
import port1 from '../../images/impress-your-friends.png';
import port2 from '../../images/moving-pic.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='port-photos'>
        <img src ={port1} alt='impress-your-friends' />
        <img src ={port2} alt='moving-pictures' />
      </div>
    </div>
  );
}
