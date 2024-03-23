import './Social.css'
import facebook from '../Assests/facebook.png'
import instagram from '../Assests/instagram.png'

function Social () {
    return (
        <div className="social">
            <div>
                <h1>Retrouve moi sur les réseaux sociaux pour plus d'informations</h1>
                <img src={facebook} alt="Facebook" className='social_facebook' />
                <img src={instagram} alt="Instagram" className='social_instagram' />
            </div>
        </div>
    );
}

export default Social;