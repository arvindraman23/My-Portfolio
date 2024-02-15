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
                <span className='introText'>I'm <span className='introName'>Arvind</span> <br />iOS Developer</span>
                <p className='introPara'> I'm a skilled iOS Developer with <br />3 years of industry experience.</p>
                <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/> Hire Me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>

    )
}

export default Intro;