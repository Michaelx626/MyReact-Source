import React from "react";
import styled from "styled-components";
import { useState } from "react";

const FormContainer = styled.form`
  text-align: center;
`;

const InputBoxes = styled.input`
  width: 30%;
`;

const MessageInputBox = styled.input`
  width: 30%;
  height: 200px;
`;

const TextColor = styled.p`
  color: red;
`;

const MarginContainer = styled.div`
  margin: 10px 0;
`;

export default function ContactMe() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;

    if (name.value && email.value && message.value) {
      console.log(`this works!`);
      name.value = "";
      email.value = "";
      message.value = "";
    } else if (!name.value && !email.value && !message.value) {
      setErrorMessage(
        "Please enter your name, your email address and provide a message!"
      );
      setTimeout(() => setErrorMessage(""), 3000);
    } else if (!message.value) {
      setErrorMessage("Please provide a message!");
      setTimeout(() => setErrorMessage(""), 3000);
    } else if (!name.value) {
      setErrorMessage("Please enter your name!");
      setTimeout(() => setErrorMessage(""), 3000);
    } else {
      setErrorMessage("Please provide an email address!");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h4>Contact:</h4>
      <MarginContainer>
        <p>Name:</p>
        <InputBoxes name="name"></InputBoxes>
      </MarginContainer>
      <MarginContainer>
        <p>Email Address:</p>
        <InputBoxes name="email" type="email"></InputBoxes>
      </MarginContainer>
      <MarginContainer>
        <p>Message:</p>
        <MessageInputBox name="message"></MessageInputBox>
      </MarginContainer>
      <MarginContainer>
        <TextColor>{errorMessage}</TextColor>
        <button type="submit">Submit</button>
      </MarginContainer>
    </FormContainer>
  );
}
