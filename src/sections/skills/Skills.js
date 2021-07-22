import React from 'react'
import SkillBar from '../../components/SkillBar/SkillBar'
import './Skills.css'
import reactIcon from '../../assets/React-icon.svg'
import JsIcon from '../../assets/js.svg'
import FirebaseIcon from '../../assets/firebase_logo.webp'
import CSSIcon from '../../assets/css.png'
import HTMLIcon from '../../assets/html.png'
import JavaIcon from '../../assets/java.svg'
import materialIcon from '../../assets/material_ui.png'
import FigmaIcon from '../../assets/figma.svg'



export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <div className="sectionHeader">
                    Skills
                </div>
                <div className="sectionBody">
                    <div className="column left">
                        <SkillBar
                            skillName="React"
                            percent={70}
                            logo={reactIcon}
                            scaleFactor={1.25}
                        />
                        <SkillBar
                            skillName="Javascript"
                            percent={65}
                            logo={JsIcon}
                            scaleFactor={0.77}    
                        />
                        <SkillBar
                            skillName="Firebase"
                            percent={60}
                            logo={FirebaseIcon}
                            scaleFactor={1.7}    
                        />
                        <SkillBar
                            skillName="CSS"
                            percent={60}
                            logo={CSSIcon}
                            scaleFactor={0.8}    
                        />
                       
                    </div>
                    <div className="column right" >
                        <SkillBar
                            skillName="HTML"
                            percent={55}
                            logo={HTMLIcon}
                            scaleFactor={0.8}    
                        />
                        <SkillBar
                            skillName="Java"
                            percent={55}
                            logo={JavaIcon}
                            scaleFactor={0.85}    
                        />
                        <SkillBar
                            skillName="Material UI"
                            percent={50}
                            logo={materialIcon}
                            scaleFactor={0.75}    
                        />
                        <SkillBar
                            skillName="Figma"
                            percent={45}
                            logo={FigmaIcon}
                            scaleFactor={0.75}    
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}
