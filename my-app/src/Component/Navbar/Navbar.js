import './Navbar.css';
import facebook from '../Assests/facebook.png';
import instagram from '../Assests/instagram.png';
// import logo_black from '../Assests/logo_black.png';
import logo from '../Assests/logo.png';

function Navbar () {
    return (
        <div className='navbar'>
            <div>
                <img src={logo} alt="Logo" className='navbar_logo' />
            </div>
            <ul>
                    <li><a href="#home">A propos</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Programmes">Programmes</a></li>
                    <li><a href="#about">Contacts</a></li>
            </ul>
            <div className='navbar_social'>
                <img src={facebook} alt="Facebook" className='navbar_facebook' />
                <img src={instagram} alt="Instagram" className='navbar_instagram' />
            </div>
        </div>
    );
}

export default Navbar;