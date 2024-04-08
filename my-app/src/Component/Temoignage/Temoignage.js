import './Temoignage.css'
import logo from '../Assests/logo.png'
import star from '../Assests/star.png'
import React, { useEffect } from 'react';

function Temoignage () {
    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const carouselChildrens = [...carousel.children];

        let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

        // Get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Add event listeners for the arrow buttons to scroll the carousel left and right
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            // Records the initial cursor and scroll position of the carousel
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if(!isDragging) return; // if isDragging is false return from here
            // Updates the scroll position of the carousel based on the cursor movement
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const infiniteScroll = () => {
            // If the carousel is at the beginning, scroll to the end
            if(carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (1 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }
            // If the carousel is at the end, scroll to the beginning
            else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            // Clear existing timeout & start autoplay if mouse is not hovering over carousel
            clearTimeout(timeoutId);
            if(!wrapper.matches(":hover")) autoPlay();
        }

        const autoPlay = () => {
            if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
            // Autoplay the carousel after every 2500 ms
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        }
        autoPlay();

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);
    }, []);
    
    return (
        <div className="wrapper">
            <div className="carousel">
                <div className="card">
                    <div>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                    </div>
                    <div>
                        <p>« J'ai vraiment progressé grâce à la monitrice d'équitation. Elle est patiente et professionnelle, et elle sait comment me pousser à me dépasser. Je recommande vivement ses cours ! »</p>
                    </div>
                    <div className='card_id'>
                        <img src={logo} alt="Logo" />
                        <p>Marie, 25 ans, Paris</p>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                    </div>
                    <div>
                        <p>« J'ai vraiment progressé grâce à la monitrice d'équitation. Elle est patiente et professionnelle, et elle sait comment me pousser à me dépasser. Je recommande vivement ses cours ! »</p>
                    </div>
                    <div className='card_id'>
                        <img src={logo} alt="Logo"/>
                        <p>MOI, 25 ans, Paris</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Temoignage;