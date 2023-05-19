import React from 'react';

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
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
          setErrorMessage('Email or username is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        
        alert(`Hello ${name}`);
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setComment('');
      };


  return (
    <div>
      <h1>Contact Me</h1>
      <form className="form mb-3">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
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
