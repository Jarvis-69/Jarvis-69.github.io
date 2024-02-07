import './Navbar.css';
import logo from '../Assests/logo.png';

function Navbar () {
    return (
        <div>
            <ul>
                <li><a href="#home">A propos</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Programmes">Programmes</a></li>
                <li><a href="#about">Contacts</a></li>
                <img src={logo} className='navbar_logo' />
            </ul>

        </div>
    );
}

export default Navbar;