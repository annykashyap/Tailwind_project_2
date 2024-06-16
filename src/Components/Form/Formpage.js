import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Formpage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u9dd3ec', 'template_ceybq7l', form.current, {
        publicKey: 'ulBwvAs66-HdUpb6d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your Email send Successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Email FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div style={{width :"500px" , height:"500px",margin:"10% auto"}}>

    <form ref={form} onSubmit={sendEmail}>
      
      <label for="exampleInputPassword1" class="form-label">Name</label>
    
      <input type="name" class="form-control " name="from_name" id="exampleInputPassword1" />
        
      <label for="exampleInputPassword1" class="form-label ">Email</label>
      <input type="name" class="form-control " name="user_email" id="exampleInputPassword1" />      
      <label for="exampleInputPassword1 " class="form-label">Message</label>
      <textarea type="name" class="form-control " name="message" id="exampleInputPassword1"/>
        <input type="submit" className=' btn-primary btn' value="Send" />
      </form>

    </div>
     </>
   
  );
};

export default Formpage;