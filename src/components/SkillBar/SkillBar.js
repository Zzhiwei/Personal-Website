import React from 'react'
import './SkillBar.css'
import { Bar, Image } from './Skillbar.style'


export default function SkillBar({skillName, logo, percent, scaleFactor}) {
    return (
        <div className="skillBar">
            <Image src={logo} scaleFactor={scaleFactor}></Image>                
            <div className="barRight">
                <div className="skillName">
                    {skillName}
                </div>
                <Bar percent={percent}/>
                
            </div>

        </div>
    )
}
