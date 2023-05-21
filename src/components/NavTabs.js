import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          <FontAwesomeIcon icon={faHouse} style={{color: "#00040a",}} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
      <FontAwesomeIcon icon={faLaptopCode} style={{color: "#00060f",}} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
         <FontAwesomeIcon icon={faUser} style={{color: "#00060f",}} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <FontAwesomeIcon icon={faPenToSquare} style={{color: "#01060e",}} />
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;