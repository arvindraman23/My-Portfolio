import React from 'react';
import './skills.css';
import Swift from '../../assets/swift.png';
import SwiftUI from '../../assets/swiftui.png';
import ObjectiveC from '../../assets/objectivec.png';
import Java from '../../assets/java.png';
import ReactJS from '../../assets/react.png';
import Javascript from '../../assets/javascript.png';
import PythonImg from '../../assets/python.png';
import SpringBoot from '../../assets/springboot.png';
import CPP from '../../assets/cpp.png';
import HtmlCss from '../../assets/html.png';
import RestApi from '../../assets/rest.png';
import JsonImg from '../../assets/json.png';
import Xcode from '../../assets/Xcode.png';
import AndroidStudio from '../../assets/android.png';
import Eclipse from '../../assets/eclipse.png';
import JupyterNotebook from '../../assets/Jupyter.png';
import SqlWorkbench from '../../assets/sql.png';
import AwsImg from '../../assets/AWS.png';
import AzureImg from '../../assets/Azure.png';
import JiraImg from '../../assets/Jira.png';
import ConfluenceImg from '../../assets/Confluence.png';
import GithubAction from '../../assets/GitHubActions.png';
import GithubImg from '../../assets/github.png';
import FastlaneImg from '../../assets/fastlane.png';
import TestFlightImg from '../../assets/testflight.png';
import JenkinsImg from '../../assets/Jenkins.png';
import SwiftLintImg from '../../assets/swiftlint.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>As a seasoned software engineer and iOS developer, I specialize in crafting elegant and efficient solutions for applications. With a wealth of experience spanning 3 years, my expertise lies in harnessing technologies to deliver seamless user experiences across various platforms. My skill set encompasses a wide range of programming languages, tools, and frameworks, enabling me to tackle diverse challenges in software development with precision and creativity.</span>
            <div className='btnContainer'>
            <div className='btnRowHeader'><br/><br/><br/>---------- PROGRAMMING ----------<br/></div>
                <div className='btnRow'>
                    <button className='btn'><img src={Swift} alt='Swift' className='btnImg'/> Swift</button>
                    <button className='btn'><img src={SwiftUI} alt='SwiftUI' className='btnImg'/> SwiftUI</button>
                    <button className='btn'><img src={ObjectiveC} alt='Objective-C' className='btnImg'/> Objective-C</button>
                    <button className='btn'><img src={Java} alt='Java' className='btnImg'/> Java</button>
                    <button className='btn'><img src={ReactJS} alt='React.js' className='btnImg'/> React.js</button>
                    <button className='btn'><img src={Javascript} alt='JavaScript' className='btnImg'/> JavaScript</button>
                </div>
                <div className='btnRow'>
                    <button className='btn'><img src={PythonImg} alt='Python' className='btnImg'/> Python</button>
                    <button className='btn'><img src={SpringBoot} alt='Spring Boot' className='btnImg'/> Spring Boot</button>
                    <button className='btn'><img src={CPP} alt='C/C++' className='btnImg'/> C/C++</button>
                    <button className='btn'><img src={HtmlCss} alt='HTML/CSS' className='btnImg'/> HTML/CSS</button>
                    <button className='btn'><img src={RestApi} alt='REST' className='btnImg'/> REST</button>
                    <button className='btn'><img src={JsonImg} alt='JSON' className='btnImg'/> JSON</button>
                </div>
                <div className='btnRowHeader'>-------------- TOOLS --------------<br/></div>
                <div className='btnRow'>
                    <button className='btn'><img src={Xcode} alt='XCode' className='btnImg'/> XCode</button>
                    <button className='btn'><img src={AndroidStudio} alt='Android Studio' className='btnImg'/> Android Studio</button>
                    <button className='btn'><img src={Eclipse} alt='Eclipse' className='btnImg'/> Eclipse</button>
                    <button className='btn'><img src={JupyterNotebook} alt='Jupyter Notebook' className='btnImg'/> Jupyter Notebook</button>
                    <button className='btn'><img src={SqlWorkbench} alt='SQL Workbench' className='btnImg'/> SQL Workbench</button>
                </div>
                <div className='btnRow'>
                    <button className='btn'><img src={AwsImg} alt='AWS' className='btnImg'/> AWS</button>
                    <button className='btn'><img src={AzureImg} alt='Azure DevOps' className='btnImg'/> Azure DevOps</button>
                    <button className='btn'><img src={JiraImg} alt='JIRA' className='btnImg'/> JIRA</button>
                    <button className='btn'><img src={ConfluenceImg} alt='Confluence' className='btnImg'/> Confluence</button>
                    <button className='btn'><img src={GithubAction} alt='GitHub Actions' className='btnImg'/> GitHub Actions</button>
                </div>
                <div className='btnRow'>
                    <button className='btn'><img src={GithubImg} alt='GitHub' className='btnImg'/> GitHub</button>
                    <button className='btn'><img src={FastlaneImg} alt='FastLane' className='btnImg'/> FastLane</button>
                    <button className='btn'><img src={TestFlightImg} alt='TestFlight' className='btnImg'/> TestFlight</button>
                    <button className='btn'><img src={JenkinsImg} alt='Jenkins' className='btnImg'/> Jenkins</button>
                    <button className='btn'><img src={SwiftLintImg} alt='SwiftLint' className='btnImg'/> SwiftLint</button>
                </div>
            </div>
        </section>
    )
}

export default Skills;