import React from 'react'
import './About.css'
import profilePic from '../../assets/profilepic.jpg'

export default function About() {
    return (
        <section className="about" id="about">
            <div className="max-width">
                <div className="sectionHeader">
                    About me
                </div>
                <div className="sectionBody">
                    <div className="column left">
                        <img src={profilePic} />
                    </div>
                    <div className="column right">
                        <div className="text1"> I am a <span>developer</span></div>
                        <p className="text2">I am currently a year 2 undergraduate <span>student</span> at National University of Singapore studying
                            <span> computer science</span>. I love doing <span>web development</span>, both design and implementation. My dream is to have my own products in the future.</p>
                        <div className="text3"></div>
                        <a href="#" className="button">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
