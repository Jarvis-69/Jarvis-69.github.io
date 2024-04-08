import './Social.css'
import facebook from '../Assests/facebook_social.png'
import instagram from '../Assests/instagram_social.png'

function Social () {
    return (
        <div className='social'>
            <div className='social_container' id='social_container_link'>
                <h1>Restons en contact</h1>
                <div className='social_container_grid'>
                    <img src={facebook} alt="facebook" />
                    <p>inola monitrice independante</p>
                </div>
                {/* <p>Facebook</p> */}
                <div className='social_container_grid'>
                    <img src={instagram} alt="instagram" />
                    <p>inola.monitrice.independante</p>
                </div>
                {/* <p>Instagram</p> */}
            </div>
            <div className='social_container' id='social_container_contact'>
                <div className='social_grid'>
                    <div className='social_info'>
                        <label>Prénom</label>
                        <input type="text" placeholder="Ton prénom et/ou nom" />
                    </div>
                    <div className='social_info'>
                        <label>Email</label>
                        <input type="text" placeholder="exemple@gmail.com" />
                    </div>
                </div>
                <div className='social_info' id='social_message'>
                    <label>Message</label>
                    <input type="text" placeholder="Entre ton message" id='social_info_message'/>
                </div>
                <button>Envoyer</button>
            </div>
        </div>
    );
}

export default Social;