import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from "./Navbar";
import "../css/Contact.css";

export default function Contact() {
    const form = useRef();
    const [aler,setaler]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
    
      // Retrieve form values
      const userName = form.current.user_name.value.trim();
      const userEmail = form.current.user_email.value.trim();
      const message = form.current.message.value.trim();
    

      if (!userName || !userEmail || !message) {
        console.log('Please fill in all fields.');
        return;
      }
    
      emailjs
        .sendForm('service_iyezlpm', 'template_djqth87', form.current, {
          publicKey: 'LumecEJ9Jozu6abGw',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setaler(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    

    return (
        <div className="contact-container">
            <NavBar />
            <br />
            {
              aler &&(
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>SUCCESS!</strong> Email Send To Mohamed Reda Hachoum
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              )
            }
              
             
      <div className="contact-form-container">        
      <form ref={form} onSubmit={sendEmail}>
        
      <h2>Contact Us</h2>
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
          </div>
        </div>
    );
}
