import React from 'react'
import './WorkCard.css'
import { Image } from './WorkCard.style'

export default function WorkCard({ image, title, description }) {
    return (
        <div className="workCard">
            <div className="zoomable">
                <img src={image} />
                <div className="text">
                    <div className="title">Project Orbital</div>
                    <div className="description">This is a react project done for orbital in NUS during the summer holidays. A project to help</div>
                </div>
            </div>
            
        </div>

    )
}
