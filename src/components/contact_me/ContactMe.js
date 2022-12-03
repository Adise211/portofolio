import React from 'react';
import './ContactMe.css';
import { FaPhoneAlt } from 'react-icons/fa';
import linkedin2 from '../../images/linkedin2.png';
import github from '../../images/github.png';
import gmail from '../../images/gmail.png';
import insta from '../../images/insta.png';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Snackbar } from '@mui/material';



const ContactMe = () => {
  const formRef = useRef();
  const [done,setDone] = useState(false);
  const [message,setMessage] = useState('');
  const [open,setOpen] = useState(false);
  const [number,setNumber] = useState(null);
  const [email,setEmail] = useState(null);


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

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/adise-mamoye-15876a240/","_blank");
  }

  const openInsta = () => {
    window.open("https://www.instagram.com/adise_211","_blank");
  }

  const openGithub = () => {
    window.open("https://github.com/Adise211", "_blank");
  };

  const showNumber = () => {
    if (!number) setNumber('+972532463375');
    else setNumber(null);
  }

  const showEmail = () => {
    if (!email) setEmail('adisemamo211@gmail.com');
    else setEmail(null);
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
        <div className='icons-links'>
          <img src={linkedin2} alt='linkedin' onClick={openLinkedin} style={{ height: 50, width: 50 }}/>
          <img src={github} alt='github' onClick={openGithub} style={{ height: 70, width: 70, marginLeft: 10 }} />
          <img src={insta} alt='insta' onClick={openInsta} style={{ height: 70, width: 70 }} />
        </div>
        <div className='icons-show'>
          {email}
          <img src={gmail} alt='gmail' style={{ height: 70, width: 70, marginRight: 10 }} onClick={showEmail}/>
          <FaPhoneAlt style={{ height: 40, width:40, marginLeft: 10 }} onClick={showNumber}/>
          {number}
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
