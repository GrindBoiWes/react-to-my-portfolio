import React from 'react';
import './styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function footer() {
    return (
        <div>
         <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled"  >
              <a href="https://github.com/GrindBoiWes" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/wes-harrison-69766583/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </ul>
          </div>
        </div>
      </div>
       
    )
}

export default footer;