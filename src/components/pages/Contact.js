import React from 'react';
import { useState } from "react";
import { validateEmail } from '../utils/helper';
import '../styles/style.css';


const styles = {
  contactStyle: {
    border: '5px solid white',
    alignItems: 'center',
    position: 'relative',
    
  },
  inputStyle: {
    backgroundColor: 'white'
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
      <h1>Contact Me</h1>
      <form style={styles.contactStyle} className="form mb-3">
        <input style={styles.inputStyle} className='form mb-3'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
        />
        <input style={styles.inputStyle} className ='form mb-3'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input style={styles.inputStyle} className ='form mb-3'
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
