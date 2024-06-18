import React, { useEffect, useRef } from 'react'
import './Presentation.css'
import horse from '../Assests/horse.png'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

function Presentation () {
        const slideFromLeft = (element, delay, duration) => {
            gsap.fromTo(element, {
                x: -100,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                duration: duration,
                delay: delay
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
                delay: delay
            });
        }

        const slideFromBehind = (element, delay, duration) => {
            gsap.fromTo(element, {
                z: 0,
                opacity: 0,
            }, {
                z: 100,
                opacity: 1,
                duration: duration,
                delay: delay
            });
        }

        const presentation_h1 = useRef(null) // Créer une référence pour l'élément DOM que l'on souhaite animer
        const presentation_h2 = useRef(null)
        const presentation_p = useRef(null)
        const presentation_logo = useRef(null)
        const btn = useRef(null)
        const btn2 = useRef(null)

        useEffect(() => {
            slideFromLeft(presentation_h1.current, 0.5, 1) // Passer l'élément DOM référencé à la fonction slideInTop
            slideFromLeft(presentation_h2.current, 1, 1)
            slideFromLeft(presentation_p.current, 1.5, 1)
            slideFromRight(presentation_logo.current, 0.25, 1)
            slideFromBehind(btn.current, 2, 1)
            slideFromBehind(btn2.current, 2, 1)
        }, [])
    
    return (
            <div className='presentation_grid' id='presentation'>
            {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
                <div className='presentation_txt'>
                    <div>
                        <h1 className='presentation_h1' ref={presentation_h1}>Salvador Inola</h1>
                        <h2 className='presentation_h2' ref={presentation_h2}>Monitrice indépendante</h2>
                        <p className='presentation_p' ref={presentation_p}>Je suis monitrice indépendante, je vous propose des cours de dressage, de saut d'obstacle et de cross. Je vous propose également des stages de perfectionnement. Je me déplace dans les écuries de votre choix.
                        </p>
                        <a href="#programmes" className='btn' ref={btn} id='presentation_button_1'>
                            Découvrir
                        </a>
                        <a href="#social" className='btn' ref={btn2} id='presentation_button_2'>   
                            Contact
                        </a>
                    </div>
                </div>
                    <img src={horse} alt="img" className='presentation_img' ref={presentation_logo}/>
            </div>
    );
}

export default Presentation;