import './Navbar.css';
import logo from '../Assests/logo.png';
import facebook from '../Assests/facebook.png';
import instagram from '../Assests/instagram.png';
import logo_black from '../Assests/logo_black.svg';

function Navbar () {
    return (
        <div>
            <ul>
                <img src={logo_black} alt="Logo" className='navbar_logo' />
                <li><a href="#home">A propos</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Programmes">Programmes</a></li>
                <li><a href="#about">Contacts</a></li>
                <img src={facebook} alt="Facebook" className='navbar_facebook' />
                <img src={instagram} alt="Instagram" className='navbar_instagram' />
            </ul>
        </div>
    );
}

export default Navbar;