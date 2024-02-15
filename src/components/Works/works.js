import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id="works">
            <h2 className="workstitle">My Portfolio</h2>
            <span className="worksDesc">My educational background, technical expertise, and professional experiences have prepared me to excel in this role. My most recent position as an iOS Developer at Bosch Global Software Technologies allowed me to work on a significant project, "MeasureOn," where I was responsible for iOS app development.</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
                <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
                <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
                <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
                <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
                <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
}

export default Works;