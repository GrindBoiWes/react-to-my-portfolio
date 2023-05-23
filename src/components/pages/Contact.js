import React from 'react';
import { useState } from "react";
import { validateEmail } from '../utils/helper';
import '../styles/style.css';


const styles = {
  contactStyle: {
    alignItems: 'center',
    width: '50%',
    margin: '20px',
    animation: 'drop-in 1200ms ease 200ms backwards'
  },

  h1Style: {
    color:'white',
    fontFamily: 'Helvetica',
    animation: 'drop-in 1s ease 200ms backwards'
  },

  inputStyle: {
    backgroundColor: 'white',
    
  },

  commentStyle: {
    backgroundColor: 'white',
    height: '100px'
  }
}




export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleInputChange = (e) => {
        
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        
        if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'comment') {
          setComment(inputValue);
        }
      };
  
      const handleFormSubmit = (e) => {
        
        e.preventDefault();
        if (!validateEmail(email) || !name) {
          return;
        }
        
        
        alert(`Hello ${name}`);
    
      
        setName('');
        setEmail('');
        setComment('');
      };


  return (
    <div className='contact'>
      <h1 style={styles.h1Style}>Contact Me</h1>
      <form style={styles.contactStyle} className="form mb-3">
        <input style={styles.inputStyle} className='form mb-3'
          value={name}
          name="Name"
          onChange={handleInputChange}
          type="name"
          placeholder="Name"
        />
        <input style={styles.inputStyle} className ='form mb-3'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input style={styles.commentStyle} className ='form mb-3'
          value={comment}
          name="comment"
          onChange={handleInputChange}
          type="text"
          placeholder="Comment"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}
