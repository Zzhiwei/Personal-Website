import React from 'react'
import './Home.css'
import { useInView } from 'react-intersection-observer';
import getClass from '../../utils/GetClass'

export default function Home() {
    const { ref, inView, entry } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div className="home" id="home">
            <div className="max-width">
                <div ref={ref} className={getClass("column left", inView)}>
                    <div className="text1"> <b>Hi, my name is</b></div>
                    <div className="text2"><b>Zhiwei</b></div>
                    <div className="text3"><b> I am a <span>developer</span></b></div>
                </div>
            </div>
        </div>
    )
}
