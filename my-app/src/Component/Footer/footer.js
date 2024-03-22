import './footer.css';
import logo from '../Assests/logo.png';
import facebook from '../Assests/facebook.png';
import instagram from '../Assests/instagram.png';

function Footer () {
    return (
        <div>
            <div>
                <img src={logo} alt="Logo" className='footer_logo' />
            </div>
            <div className='social'>
                <img src={facebook} alt="Logo" className='facebook' />
                <img src={instagram} alt="Logo" className='instagram' />
            </div>
            <div className="ligne-centree">
                <hr></hr>
            </div>
            <div className='footer_text'>
                <p>© 2024 - Tous droits réservés</p>
            </div>
        </div>
    );
}

export default Footer;