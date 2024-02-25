import React, { useState } from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const worksData = [
    {
        id: 1,
        title: "Project 1",
        description: "Description of Project 1",
        imageUrl: Portfolio1,
        link: "https://example.com/project1"
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description of Project 2",
        imageUrl: Portfolio2,
        link: "https://example.com/project2"
    },
    {
        id: 3,
        title: "Project 3",
        description: "Description of Project 3",
        imageUrl: Portfolio3,
        link: "https://example.com/project2"
    },
    {
        id: 4,
        title: "Project 4",
        description: "Description of Project 4",
        imageUrl: Portfolio4,
        link: "https://example.com/project2"
    },
    {
        id: 5,
        title: "Project 5",
        description: "Description of Project 5",
        imageUrl: Portfolio5,
        link: "https://example.com/project2"
    },
    {
        id: 6,
        title: "Project 6",
        description: "Description of Project 6",
        imageUrl: Portfolio6,
        link: "https://example.com/project2"
    }
];

const Works = () => {
    const [setRedirectUrl] = useState('');

    const handleClick = (url) => {
        setRedirectUrl(url);
    };

    return (
        // <section id="works">
        //     <h2 className="workstitle">My Portfolio</h2>
        //     <span className="worksDesc">My educational background, technical expertise, and professional experiences have prepared me to excel in this role. My most recent position as an iOS Developer at Bosch Global Software Technologies allowed me to work on a significant project, "MeasureOn," where I was responsible for iOS app development.</span>
        //     <div className="worksImgs">
        //         <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
        //         <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        //         <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
        //         <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
        //         <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
        //         <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
        //     </div>
        //     <button className="worksBtn">See More</button>
        // </section>
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">My educational background, technical expertise, and professional experiences have prepared me to excel in this role. My most recent position as an iOS Developer at Bosch Global Software Technologies allowed me to work on a significant project, "MeasureOn," where I was responsible for iOS app development.</span>
            <div className="worksImgs">
                {worksData.map((project) => (
                    <div className="worksImgContainer" onClick={() => handleClick(project.link)}>
                    <img src={project.imageUrl} alt={project.title} className="worksImg" />
                    <div className="worksImgOverlay">
                        <h3 className="projectTitle">{project.title}</h3>
                        <p className="projectDescription">{project.description}</p>
                    </div>
                </div>
                ))}
            </div>
            {/* {redirectUrl && <Redirect to={redirectUrl} />} */}
        </section>
    );
}

export default Works;