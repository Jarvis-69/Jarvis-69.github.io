import React, { useState, useEffect } from 'react';
import './footer.css';
import logo from '../Assests/logo.png';
import facebook from '../Assests/facebook.png';
import instagram from '../Assests/instagram.png';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='footer'>
            <div className='footer_grid'>
                <div>
                    <img src={logo} alt="Logo" className='footer_logo' />
                </div>
                <div className='footer_social'>
                    <a href="https://www.facebook.com/profile.php?id=100087199472382">
                            <img src={facebook} alt="Logo" className='facebook' />
                    </a>
                    <a href="https://www.instagram.com/inola.monitrice.independante/">
                            <img src={instagram} alt="Logo" className='instagram' />
                    </a>
                </div>
            </div>
            <div className="ligne-centree">
                <hr></hr>
            </div>
            <div className='footer_text'>
                <p>© 2024 - Tous droits réservés</p>
            </div>
            {/* Affichage conditionnel du bouton en fonction de isVisible */}
            {isVisible && (
                <button className='scroll-to-top' onClick={scrollToTop}>^</button>
            )}
        </div>
    );
}

export default Footer;
