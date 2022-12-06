import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact({host}){
    const form = useRef()
    console.log(host)

    const sendEmail = (e) => {
        e.preventDefault();
    

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