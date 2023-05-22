import React from 'react';
import './styles/style.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';


const styles = {
  navbarStyle: {
    justifyContent: 'end',
    margin: '10px 0',
    marginRight: '50px'
  }
}


function NavTabs({ currentPage, handlePageChange }) {
  return (
  <div style={styles.navbarStyle} className='navbar'> 
    <ul className="nav">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          <FontAwesomeIcon icon={faHouse} style={{color: "#FFFFFF", height: '1.5em', margin: '0px 10px'}} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
      <FontAwesomeIcon icon={faLaptopCode} style={{color: "#FFFFFF", height: '1.5em' , margin: '0px 10px'}} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
         <FontAwesomeIcon icon={faUser} style={{color: "#FFFFFF", height: '1.5em', margin: '0px 10px'}} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <FontAwesomeIcon icon={faPenToSquare} style={{color: "#FFFFFF", height: '1.5em', margin: '0px 10px'}} />
        </a>
      </li>
    </ul>
    </div>   
  );
}

export default NavTabs;