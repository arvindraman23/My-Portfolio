import React from "react";
import './contact.css';
import LinkedinIcon from '../../assets/linkedin.png';
import GithubIcon from '../../assets/github.png';

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc"> Please fill out the form below to discuss any work oppurtunities.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
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