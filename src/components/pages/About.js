import React from 'react';
import '../styles/style.css';
import bioPic from '../../images/Portfolio-Pic.jpg'


const styles = {
    h1Style: {
        fontFamily: 'Helvetica',
        animation: 'drop-in 1s ease 200ms backwards',
        color: 'white',
        marginLeft: '25%'
    },
    imageStyle: {
        animation: 'drop-in 1200ms ease 200ms backwards',
        width: '100%',
        height: 'auto',
        
    },
    h2Style: {
        animation: 'drop-in 1200ms ease 200ms backwards',
        color: 'white',
        fontFamily: 'Verdana',
        fontSize: '1.5em'
    }
}



export default function About() {
    return (
    
    <div>
        <h1 style={styles.h1Style}>About Me</h1>
        <div className='container-lg'>
            <div className='row'>
                <div className='col'>
                   <img src={bioPic} style={styles.imageStyle} alt='wes' />
                 </div> 
                 <div className='col'>
                    <h2 style={styles.h2Style}>Hello! My name is Wes Harrison. I am a Full Stack Web Developer, Graphic Designer, and Photographer. I am originally from Birmingham Alabama, and have resided in Seattle since 2016. When living in Alamaba, I attended the University of Alabama at Birmingham where I recieved a B.A. in Art Studio with a concentration in Graphic Design. I decided to start my journey in Web Development to further progress my design skills, as well as learn how to build full applications from scratch.</h2>
                 </div>
             </div>
        </div>
    </div>
        
    );
}