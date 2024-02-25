import React from "react";
import './works.css';

import MeasureOnImg from '../../assets/measureOn.png';
import UtaEventTracker from '../../assets/utaEventTracker.png';
import FootwearFactory from '../../assets/footwearFactory.png';
import GCPImg from '../../assets/gcp.png';
import LSTMImg from '../../assets/lstm.png';
import WeatherImg from '../../assets/weather.png';
import MovieImg from '../../assets/movie.png';
import CICDImg from '../../assets/cicd.png';
import IOTImg from '../../assets/iot.png';

const worksData = [
    {
        id: 1,
        title: "Bosch MeasureOn",
        description: "iOS app for easy on-site documentation of floor plans, measurements, photos, and notes. With cloud-based project access across all platforms.",
        imageUrl: MeasureOnImg,
        link: "https://apps.apple.com/us/app/bosch-measureon/id1515070546"
    },
    {
        id: 2,
        title: "UTA Event Tracker",
        description: "Android app for students to engage in campus events, harnessing Amazon EC2 for robust network services and real-time event updates using RabbitMQ.",
        imageUrl: UtaEventTracker,
        link: "https://github.com/arvindraman23/UTA-Event-Tracker"
    },
    {
        id: 3,
        title: "Footwear Factory",
        description: "Java & MySQL stand-alone software for effective product inventory and warehousing management in a sneaker forum.",
        imageUrl: FootwearFactory,
        link: "https://github.com/arvindraman23/Footwear-Factory"
    },
    {
        id: 4,
        title: "GCP Image Storage (PHP)",
        description: "PHP album webpage harnessing Google Cloud Platform for seamless image upload, storage, and management.",
        imageUrl: GCPImg,
        link: "https://github.com/arvindraman23/Google-Cloud-Platform-Webpage"
    },
    {
        id: 5,
        title: "Music Recommendation System (LSTM)",
        description: "A Long Short-Term Memory neural network for personalized song recommendations.",
        imageUrl: LSTMImg,
        link: "https://github.com/arvindraman23/Music-Recommendation-System-using-LSTM"
    },
    {
        id: 6,
        title: "Weather Map (GMaps API)",
        description: "JavaScript & HTML Webpage leveraging Google Maps API to search & display weather data.",
        imageUrl: WeatherImg,
        link: "https://github.com/arvindraman23/Google-Maps-API"
    },
    {
        id: 7,
        title: "TMDB Movie Webpage",
        description: "JavaScript & HTML Webpage to integrate TMDB movie dataset. Enables users to search movies & access details like genre, poster, summary, & cast with ease.",
        imageUrl: MovieImg,
        link: "https://github.com/arvindraman23/Movie-Data-API"
    },
    {
        id: 8,
        title: "Dockerized CI/CD",
        description: "Deploying a React application by containerizing it with Docker, utilizing Railway for seamless hosting, and employing GitHub Actions for CI/CD automation.",
        imageUrl: CICDImg,
        link: "https://github.com/arvindraman23/railway-docker"
    },
    {
        id: 9,
        title: "Autonomous Tweet (IoT)",
        description: " IoT project leveraging Arduino Uno and sensors to capture real-time data. Utilizing Embedded C to automate data collection and transmission to ThingSpeak analytics.",
        imageUrl: IOTImg,
        link: "https://github.com/arvindraman23/Autonomous-Tweeting-IOT"
    }
];

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">My educational background, technical expertise, and professional experiences have prepared me to excel in this role. My most recent position at Bosch Global Software Technologies and during my time at University of Texas at Arlington as a Graduate Student allowed me to work on a significant projects across a variety of tech stacks.</span>
            <div className="worksImgs">
                {worksData.map((project) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="worksImgContainer" key={project.id}>
                        <img src={project.imageUrl} alt={project.title} className="worksImg" />
                        <div className="worksImgOverlay">
                            <h3 className="projectTitle">{project.title}</h3>
                            <p className="projectDescription">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Works;