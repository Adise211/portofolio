import React from 'react';
import './ContactMe.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const ContactMe = () => {
  const formRef = useRef();
  const [done,setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_24xzht7',
      'template_fvvtrvf',
      formRef.current,
      'dxfOdcM40x8dfaEUq'
    )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }

  const linkdin = () => {
    window.open("https://www.linkedin.com/in/adise-mamuye-15876a240","_blank")
  }

  const insta = () => {
    window.open("https://www.instagram.com/adise_211","_blank")
  }




  return(
    <div className='c' id='contact'>
      <div className='c-left'>
        <div className='c-icons'>
          <FaLinkedin onClick={linkdin}/><h6>Adise Mamuye</h6>
          <FaMailBulk /><h6>adisemamo211@gmail.com</h6>
          <FaPhoneAlt /><h6>053-2463375</h6>
          <FaInstagram onClick={insta}/><h6>adise_211</h6>
        </div>
      </div>

      <div className='c-right'>
        <h2>Send Me A Message</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' name='user_name'/>
          <input type='text' placeholder='Subject' name='user_subject'/>
          <input type='email' placeholder='Your Email' name='user_email'/>
          <textarea rows='5' placeholder='Message' name='message'/>
          <button type='submit'>Send</button>
          <h4 className='c-sent'>
          {
            done && 'Thank you!'
          }
          </h4>
        </form>
      </div>
    </div>
  )
}


export default ContactMe;
