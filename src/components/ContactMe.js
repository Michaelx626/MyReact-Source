import React from "react";
// use the useState?

export default function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;

    if (name.value && email.value && message.value) {
      console.log(`this works!`);
      name.value = '';
      email.value = '';
      message.value = '';
    }
  };

  const nameBlur = (e) => {
    const { name } = e.target;

    if (name || name.value === ''){
      alert('Please enter your name!')
    }
  };

  const messageBlur = (e) => {
    const { message } = e.target;

    if (message && message.value === ''){
      alert('Please enter a message!')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onBlur={nameBlur}></input>
      <input name="email" type="email"></input>
      <input name="message"onBlur={messageBlur}></input>
      <button type="submit">Submit</button>
    </form>
  );
}
