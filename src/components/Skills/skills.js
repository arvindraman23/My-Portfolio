import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>As an ambitious and accomplished iOS Developer with a Master of Science in Computer Science from the University of Texas at Arlington, I am excited about the opportunity to contribute my skills, experiences, and passion for software development to your innovative team.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>This is a sample text.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Website Design</h2>
                        <p>This is a sample text.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>App Design</h2>
                        <p>This is a sample text.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;