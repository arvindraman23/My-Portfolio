import React, { useRef } from "react";
import './contact.css';
import LinkedinIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_hnd5rki', 'template_h3qlatm', form.current, 'Apl924gNX23QCTbuH')
        .then((result) => {
                console.log(result.text);
        }, (error) => {
                console.log(error.text);
        });
    };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc"> Please fill out the form below to discuss any work oppurtunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" />
                    <input type="email" className="email" placeholder="Your Email" name="your_email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={LinkedinIcon} alt="Linkedin" className="link" />
                        <img src={GithubIcon} alt="Github" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;