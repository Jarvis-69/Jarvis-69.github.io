import './footer.css';
import logo_black from '../Assests/logo_black.png';
import facebook from '../Assests/facebook.png';
import instagram from '../Assests/instagram.png';

function Footer () {
    return (
        <div>
            <div>
                <img src={logo_black} alt="Logo" className='footer_logo' />
            </div>
            <div className='footer_social'>
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