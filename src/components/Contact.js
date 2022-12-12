import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact({host}){
    const form = useRef()
    console.log(host)
    const style ={
        color: 'black'
    }

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
        <div className='logPlace'>
        <div className='contactForm'>
            <form ref={form}
                className='formCon'
                onSubmit={sendEmail}
            >
                <lable>Full Name</lable>
                <input type='text' name='user_name' placeholder='Full Name' required/>
                <lable>Email</lable>
                <input type='text' name='user_email' placeholder='Email' required/>
                <lable>subject</lable>
                <input type='text' name='subject' placeholder='subject' required/>
                <lable>Message</lable>
                <textarea name='message' placeholder='Message' rows={5} required/>
                <button className='button'>Send Message</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default Contact