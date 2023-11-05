import React, { ChangeEvent, useRef, useState } from "react";
import styled, { IStyledComponent } from "styled-components";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./styles/contacts.css";
import emailjs from "@emailjs/browser";
import { error } from "console";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const verifyEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (emailRegex.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    verifyEmail();
  };


  const sendEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    emailjs
    .send(
        process.env.EMAIL_JS_SERVICE_ID ?? "",
        process.env.EMAIL_JS_TEMPLATE_ID ?? "",
        {
            from_name: "AboveAndBeyond.com",
            email: email,
            name: name,
            subject: subject,
            message: message
        },
        process.env.EMAIL_JS_PUBLIC_KEY
    )
    .then(
        (response) => {
            alert("Email Success");
        },
        (error) => {
            alert("Failure");
        }
    );

};
  return (
    <MyContactForm onSubmit={sendEmail} id="contact_form">
      <InfoBox>
        <FormTitle>Contact Form</FormTitle>
        <Disclaimer>
          Please do not share sensitive or personal information, such as credit
          card numbers, social security numbers, or any other confidential data.
          Our website is for informational purposes only, and we do not collect
          or store such information.
        </Disclaimer>
      </InfoBox>
      <InputField name="Name" label="Name" variant="outlined" required onChange={(e)=>{e.preventDefault();setName(e.target.value)}}/>
      <InputField
        name="Email"
        label="Email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={handleEmailChange}
        error={!isValid}
        helperText={isValid ? "" : "Incorrect email!"}
      />
      <InputField name="Subject" label="Subject" variant="outlined" required onChange={(e)=>{e.preventDefault();setSubject(e.target.value)}}/>
      <InputField
        onChange={(e)=>{e.preventDefault();setMessage(e.target.value)}}
        name="Message"
        id="outlined-multiline-flexible"
        label="Message"
        multiline
        rows={4}
        required
        fullWidth
      />
      <SubmitButton variant="contained" type="submit">
        Submit
      </SubmitButton>
    </MyContactForm>
  );
};

export default ContactForm;

const MyContactForm = styled.form`
  background: transparent;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4% 5%;
  row-gap: 2rem;
`;

const SubmitButton = styled(Button)`
  width: 50%;
  align-self: center;
  display: block;
  background-color: #f26a2e !important;
  transition: 0.3s !important;
  &:hover {
    background-color: #077bf1 !important;
    transform: translateY(-2px);
  }
`;

const InputField = styled(TextField)`
  display: block;
`;

const InfoBox = styled.div``;

const Disclaimer = styled.p`
  color: black;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const FormTitle = styled.h2`
  color: black;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
