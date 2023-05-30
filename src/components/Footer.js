import React from 'react';
import './styles/style.css';

import icon1 from '../images/github-logo.png';
import icon2 from '../images/li-white-logo.png';

const styles = {
    footerStyle: {
     position: 'absolute',
     bottom: '0',
     display: 'flex',
     marginLeft: '40%'
    
    },

    iconStyle: {
        height: 'auto',
        width: '25%',
        margin: '20px 0px',
        
    }
}

function Footer() {
    return (
        <div style={styles.footerStyle}>
         <div className="row">
          <div className="col">
            <a href ='https://github.com/GrindBoiWes'>
              <img src = {icon1} style ={styles.iconStyle} className='footicon' alt='github' />
            </a>
          </div>

          <div className='col'>
            <a href = 'https://www.linkedin.com/in/wes-harrison-69766583/'>
              <img src = {icon2} style={styles.iconStyle} className='footicon' alt= 'linked-in' />
              </a>
            </div>
          </div>
        </div>
      
       
    )
}

export default Footer;