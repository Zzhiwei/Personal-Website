import React, { useEffect, useRef, useState } from 'react'
import WorkCard from '../../components/WorkCard/WorkCard'
import './Work.css'
import { Card, Page, ScrollRef } from './Work.style'
import { useInView } from 'react-intersection-observer'
import Carousel from 'react-elastic-carousel';
import work1 from '../../assets/work1.jpeg'
import work2 from '../../assets/work2.jpeg'
import work3 from '../../assets/work3.jpeg'
import work4 from '../../assets/work4.jpeg'




export default function Work() {
    const [itemsToShow, setitemsToShow] = useState()
    
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
                        <WorkCard  image={work1}/>
                        <WorkCard  image={work2}/>
                        <WorkCard  image={work3}/>
                        <WorkCard  image={work4}/>
                        <WorkCard  image={work1}/>
                        <WorkCard  image={work2}/>
                        <WorkCard  image={work3}/>
                        <WorkCard  image={work4}/>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
