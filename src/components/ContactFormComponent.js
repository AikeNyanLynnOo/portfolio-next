import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

// npm i @emailjs/browser

export const ContactForm = ({ customStyles, customClasses, children }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log({
      serviceId,
      templateId,
      form: form.current,
      // privateKey, // userId
      publicKey, // userId
    });
    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        // privateKey, // userId
        publicKey, // userId
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
