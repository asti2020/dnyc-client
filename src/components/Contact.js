import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact({host}){
    const form = useRef()
    console.log(host)

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ycvye2m', 'template_4i6bldl', form.current, 'aBDj5aIEBW6YsOaFE')
        .then((result) => {
            console.log(result)
        }, (error) => {
            console.log(error.text);
        });
            e.target.reset()
    };
    return (
        <>
        
        <div className='contactForm'>
            <form ref={form}
                className='form'
                onSubmit={sendEmail}
            >
                <input type='text' name='user_name' placeholder='Full Name' required/>
                <input type='text' name='user_email' placeholder='Email' required/>
                <lable>subject</lable>
                <input type='text' name='subject' placeholder='subject' required/>
                <lable>Message</lable>
                <textarea name='message' placeholder='Message' required/>
                <button className='button'>Send Message</button>
            </form>
        </div>
        </>
    )
}

export default Contact