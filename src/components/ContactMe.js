import React from "react";
import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  margin-top: 20px;
  text-align: center;
`;

const InputBoxes = styled.input`
  width: 30%;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const MessageInputBox = styled.textarea`
  width: 30%;
  height: 200px;
  box-sizing: border-box;
  padding: 10px;
  border: solid 1px black;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const TextColor = styled.p`
  color: red;
`;

const Success = styled.p`
  color: green;
`;

const MarginContainer = styled.div`
  margin: 10px 0;
`;

const SubmitButton = styled.button`
  border-radius: 20px;
  padding: 0px 20px;
  background-color: transparent;

  &:hover {
    background-color: grey;
  }
`;

export default function ContactMe() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameValue && emailValue && messageValue) {
      setSuccessMessage("Thank you for submitting!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setNameValue('');
      setEmailValue('');
      setMessageValue('');
    }
  };

  const handleName = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handleMessage = (e) => {
    setMessageValue(e.target.value);
  };

  const onBlurName = () => {
    if (!nameValue) {
      setErrorMessage("Please enter your name!");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const onBlurEmail = () => {
    if (!emailValue) {
      setErrorMessage("Please enter your email address!");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const onBlurMessage = () => {
    if (!messageValue) {
      setErrorMessage("Please provide a message!");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h4>Contact:</h4>
      <MarginContainer>
        <p>Name:</p>
        <InputBoxes
          name="name"
          onBlur={onBlurName}
          onChange={handleName}
          value={nameValue}
        ></InputBoxes>
      </MarginContainer>
      <MarginContainer>
        <p>Email Address:</p>
        <InputBoxes
          name="email"
          type="email"
          onBlur={onBlurEmail}
          onChange={handleEmail}
          value={emailValue}
        ></InputBoxes>
      </MarginContainer>
      <MarginContainer>
        <p>Message:</p>
        <MessageInputBox
          name="message"
          onBlur={onBlurMessage}
          onChange={handleMessage}
          value={messageValue}
        ></MessageInputBox>
      </MarginContainer>
      <MarginContainer>
        <TextColor>{errorMessage}</TextColor>
        <Success>{successMessage}</Success>
        <SubmitButton type="submit">Submit</SubmitButton>
      </MarginContainer>
    </FormContainer>
  );
}
