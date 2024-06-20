import React, { useState, useEffect } from 'react';
import './Navbar.css';
import facebook from '../Assests/facebook.png';
import instagram from '../Assests/instagram.png';
// import logo_black from '../Assests/logo_black.png';
import logo from '../Assests/logo.png';



function Navbar () {
    const [showNavbar, setShowNavbar] = useState(true);

    const handleScroll = () => {
        // Comparez la position actuelle du défilement avec la position précédente
        if (window.scrollY > 100) {
            setShowNavbar(false); // Masquez la navbar si l'utilisateur fait défiler vers le bas
        } else {
            setShowNavbar(true); // Affichez la navbar si l'utilisateur fait défiler vers le haut
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const html = document.querySelector('body');
        if (menuOpen) {
            html.style.overflow = 'hidden';
        } else {
            html.style.overflow = 'auto';
        }

        return () => {
            html.style.overflow = 'auto';
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    return (
        <div className={`navbar ${showNavbar ? 'active' : ''}`}>
            <div>
                <img src={logo} alt="Logo" className='navbar_logo' />
            </div>
            <ul className={menuOpen ? "active" : ""}>
                    <li><a href="#description">Presentation</a></li>
                    <li><a href="#programmes">Programmes</a></li>
                    <li><a href="#temoignage">Temoignages</a></li>
                    <li><a href="#social">Contacts</a></li>
            </ul>
            <div className='navbar_social'>
                <a href="https://www.facebook.com/profile.php?id=100087199472382" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" className='navbar_facebook' /></a>
                <a href="https://www.instagram.com/inola.monitrice.independante/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" className='navbar_instagram' /></a>
            </div>
            <div className='navbar_menu_burger'>
                <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>&#9776;</button>
            </div>
        </div>
    );
}

export default Navbar;