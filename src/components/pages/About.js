import React from 'react';
import '../styles/style.css';
import bioPic from '../../images/Portfolio-Pic.jpg'


const styles = {
    h1Style: {
        fontFamily: 'Helvetica',
        animation: 'drop-in 1s ease 200ms backwards'
    },
    imageStyle: {
        animation: 'drop-in 1200ms ease 200ms backwards',
        width: '100%',
        height: 'auto',
        
    }
}



export default function About() {
    return (
    
    <div>
        <h1 style={styles.h1Style}>About Me</h1>
        <div className='container-lg'>
            <div className='row'>
                <div className='col'>
                   <img src={bioPic} style={styles.imageStyle} alt='Bio-Photo' />
                 </div> 
                 <div className='col'>
                    <h2>Hello! My name is Wes Harrison. Originally from Alabama, I've spent the last 7 years residing in Seattle Washington. While living in Alabama, I attended the University of Alabama at Birmingham, where I received my B.A. in Art Studio with a concentration in Graphic Design. Photography and Video have always been passions of mine, so at the start of the pandemic, I took it upon myself to build a Youtube channel where I demo'd Guitar Gear. This led me down a road where I then pivoted into gaming clips through my TikTok channel</h2>
                 </div>
             </div>
        </div>
    </div>
        
    );
}