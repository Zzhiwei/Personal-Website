import React from 'react'
import './About.css'
import profilePic from '../../assets/profilepic.jpg'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import { useInView } from 'react-intersection-observer';
import getClass from '../../utils/GetClass'


export default function About() {

    const { ref, inView, entry } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    
    return (
        <section className="about" id="about">
            <div className="max-width">
                <div className="sectionHeader">
                    About me
                </div>
                <div ref={ref} className={getClass("sectionBody", inView)}>
                    <div className="column left">
                        <img src={profilePic} alt=""/>
                    </div>
                    <div className="column right">
                        <div className="text1"> I am a <span>developer</span></div>
                        <p className="text2">I am currently a year 2 undergraduate student at<span> National University of Singapore</span> studying
                            <span> computer science</span>. I love doing <span>web development</span>, both design and implementation. My dream is to have my own products in the future.</p>
                        <p className="moreAbout">more about me on:</p>                            
                        <div className="text3"></div>
                        <div className="icons">
                                <a href="https://github.com/softmagnet" target="_blank" rel="noreferrer" className="github">
                                    <img src={githubIcon} alt=""/>
                                </a>  
                                <a href="https://www.linkedin.com/in/zhiwei-lin-6b579b183/" target="_blank" rel="noreferrer" className="linkedin">
                                     <img src={linkedinIcon} alt=""/>
                                </a>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
