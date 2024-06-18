import React, { useEffect, useRef } from 'react'
import './description.css';
import description_img from '../Assests/description.svg';

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

function Description () {
    const slideFromLeft = (element, delay, duration) => {
        gsap.fromTo(element, {
            x: -100,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: duration,
            delay: delay,
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                // markers: true,
            },
        });
    }

    const slideFromRight = (element, delay, duration) => {
        gsap.fromTo(element, {
            x: 100,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: duration,
            delay: delay,
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                // markers: true,
            },
        });
    }

    const descriptionImg = useRef(null)
    const description_txt_h2 = useRef(null)
    const description_txt_h1 = useRef(null)
    const description_txt_p = useRef(null)

    useEffect(() => {
        slideFromLeft(descriptionImg.current, 0.5, 1)
        slideFromRight(description_txt_h2.current, 0.5, 1)
        slideFromRight(description_txt_h1.current, 1, 1)
        slideFromRight(description_txt_p.current, 1.5, 1)
    }, [])

    return (
            <div className='description_grid' id='description'>
                <div className='description_img_div'>
                    <img src={description_img} alt="poney" className='description_img' ref={descriptionImg}/>
                </div>
                <div className='description_txt'>
                    <div>
                        <h2 ref={description_txt_h2}>Présentation</h2>
                        <h1 ref={description_txt_h1}>Une méthode d'enseignement unique pour vous</h1>
                        <p ref={description_txt_p}>Découvrez les avantages de choisir cette monitrice d'équitation indépendante. Avec une approche personnalisée et une passion pour les chevaux, vous atteindrez vos objectifs équestres rapidement et en toute confiance.</p>
                        {/* <button className='btn'>Découvrir</button>
                        <button className='btn' id='presentation_button_2'>Contact</button> */}
                    </div>
                </div>
            </div>
    );
}

export default Description;