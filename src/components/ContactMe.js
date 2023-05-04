import React from "react";
import { useState } from 'react';

export default function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( name && email && message ){
            
            setName('')
            setEmail('')
            setMessage('')
        }
    };

  return (
    <>
      <input onChange={handleName} value={name}></input>
      <input type="email" onChange={handleEmail} value={email}></input>
      <input onChange={handleMessage} value={message}></input>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}