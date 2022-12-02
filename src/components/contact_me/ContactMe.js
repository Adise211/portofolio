import React from 'react';
import './ContactMe.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import MyAlert from '../myAlert/MyAlert';
import { Alert, Snackbar } from '@mui/material';



const ContactMe = () => {
  const formRef = useRef();
  const [done,setDone] = useState(false);
  const [message,setMessage] = useState('');
  const [open,setOpen] = useState(false);


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
          setDone(true);
          setMessage("Email Sent Successfully!");
          const emailForm = document.getElementById('myForm');
          emailForm.reset();
          setOpen(true);
      }, (error) => {
          console.log(error.text);
          setDone(false);
          setMessage("Email Failed!")
          setOpen(true);
      });
  }

  const linkdin = () => {
    window.open("https://www.linkedin.com/in/adise-mamuye-15876a240","_blank")
  }

  const insta = () => {
    window.open("https://www.instagram.com/adise_211","_blank")
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setDone(false);
  };

  const messageColor = done ? 'green' : 'red';

  return (
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
        <div className='email-container'>
          <h2 style={{ marginTop: 30 }}>Send Me An Email</h2>
          <form ref={formRef} onSubmit={handleSubmit} id='myForm'>
            <input type='text' placeholder='Name' name='user_name' className='email-input'/>
            <input type='text' placeholder='Subject' name='user_subject' className='email-input'/>
            <input type='email' placeholder='Your Email' name='user_email' className='email-input'/>
            <textarea rows='5' placeholder='Message' name='message'/>
            <button className='send-button'>Send</button>
            <div>
            { open && (
              <>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> 
                  <Alert  sx={{ width: '100%', backgroundColor: messageColor, color: 'white' }}>
                    { message } 
                  </Alert>
                </Snackbar>
              </>
            )}
            </div>
          </form>
        </div>
      </div>

    </div>
  )
};


export default ContactMe;
