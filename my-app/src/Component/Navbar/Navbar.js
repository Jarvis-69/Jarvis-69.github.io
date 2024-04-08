import React, { useState, useEffect } from 'react';
import './Navbar.css';
import facebook from '../Assests/facebook.png';
import instagram from '../Assests/instagram.png';
// import logo_black from '../Assests/logo_black.png';
import logo from '../Assests/logo.png';



function Navbar () {
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
        <div className='navbar'>
            <div>
                <img src={logo} alt="Logo" className='navbar_logo' />
            </div>
            <ul className={menuOpen ? "active" : ""}>
                    <li><a href="#home">A propos</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Programmes">Programmes</a></li>
                    <li><a href="#about">Contacts</a></li>
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