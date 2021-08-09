import React, { useEffect, useState } from 'react'
import WorkCard from '../../components/WorkCard/WorkCard'
import './Work.css'
import Carousel from 'react-elastic-carousel';
import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'
import comingsoon from '../../assets/comingsoon.png'
import calc from '../../assets/calc.png'
import sunnyside from '../../assets/sunnyside.png'







export default function Work() {
    const [itemsToShow, setitemsToShow] = useState()
    const orbital = ["partnerUp", "A fullstack project built with react, firebase and material UI, for NUS project orbital, aimed at helping students find project partners"]
    const hawkerhero = ["HawkerHero", "A react native app built for CODE_EXP hackathon aimed at helping hawkers hit financially by the pandemic"]
    const portfolio = ["Personal website", "A porfolio website styled with css"]
    const fillerText = ["Coming soon", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis similique, nobis laboriosam mollitia officiis omnis sint?"]
    const sunnysideText = ["Sunnyside", "A frontend mentor Challenge."]
    const calcText = ["Calculator", "A calculator with switchable themes. A frontend mentor Challenge."]
    
    useEffect(() => {
        const BR2STR = "(max-width: 1263px)"
        const BR1STR = "(max-width: 857px)"


        function setItems() {
            if (window.matchMedia(BR1STR).matches) {
                setitemsToShow(1)
            } else if (window.matchMedia(BR2STR).matches) {
                setitemsToShow(2)
            } else {
                setitemsToShow(3)
            }
        }

        setItems()

        
 
        var BR2 = window.matchMedia(BR2STR)
        var BR1 = window.matchMedia(BR1STR)
         

        BR2.addEventListener('change', setItems)
        BR1.addEventListener('change', setItems)
        return () => {
            BR2.removeEventListener('change', setItems)
            BR1.removeEventListener('change', setItems)
        }
    }, [])

    return (
        <section className="work" id="work">
            <div className="max-width">
                <div className="sectionHeader">
                    My Work 
                </div>
                <div className="sectionBody">
                    <Carousel itemsToShow={itemsToShow}>
                        <a href="https://orbital-teamtams-partnerup.herokuapp.com/home" target="_blank" rel="noreferrer">
                            <WorkCard  image={work1} title={orbital[0]} description={orbital[1]} />
                        </a>
                        <a href="https://calculator-zhiwei.netlify.app/" target="_blank" rel="noreferrer">
                            <WorkCard  image={calc} title={calcText[0]} description={calcText[1]} />
                        </a>
                        <a href="https://sunnyside-zhiwei.netlify.app/" target="_blank" rel="noreferrer">
                            <WorkCard  image={sunnyside} title={sunnysideText[0]} description={sunnysideText[1]} />
                        </a>
                        <a href="https://github.com/softmagnet/HawkerHero" target="_blank" rel="noreferrer">
                            <WorkCard  image={work2} title={hawkerhero[0]} description={hawkerhero[1]}/>
                        </a>
                        <a href="#home">
                            <WorkCard  image={work3} title={portfolio[0]} description={portfolio[1]} />
                        </a>
                        
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
