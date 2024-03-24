import './Social.css'
import facebook from '../Assests/facebook.png'
import instagram from '../Assests/instagram.png'

function Social () {
    return (
        <div className='social'>
            <div className='social_container'>
                <h1>Restons en contact</h1>
                <img src={facebook} alt="facebook" />
                <p>Facebook</p>
                <img src={instagram} alt="instagram" />
                <p>Instagram</p>
            </div>
            <div className='social_container' id='social_container_contact'>
                <div className='social_grid'>
                    <div className='social_info'>
                        <label for="prenom">Prénom</label>
                        <input type="text" placeholder="Ton prénom et/ou nom" />
                    </div>
                    <div className='social_info'>
                        <label for="email">Email</label>
                        <input type="text" placeholder="exemple@gmail.com" />
                    </div>
                </div>
                <div className='social_info' id='social_message'>
                    <label for="message">Message</label>
                    <input type="text" placeholder="Entre ton message" />
                </div>
                <button>Envoyer</button>
            </div>
        </div>
    );
}

export default Social;