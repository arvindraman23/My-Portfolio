import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Arvind Raman</span> <br />Software Engineer | iOS Developer</span>
                <p className='introPara'> I'm a skilled Software Engineer with 3 years of hands-on experience <br />in architecting applications. Proficient at crafting innovative solutions <br />that elevate user experience and drive business growth.</p>
                <Link><button className='btn' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}><img src={btnImg} alt='Hire Me' className='btnImg'/> Hire Me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>

    )
}

export default Intro;