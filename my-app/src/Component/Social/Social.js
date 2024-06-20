import './Social.css'
import facebook from '../Assests/facebook_social.png'
import instagram from '../Assests/instagram_social.png'
import React, { useState } from 'react';

function Social () {
        const [formData, setFormData] = useState({
          prénom: '',
          mail: '',
          message: '',
        });
      
        const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData((prevData) => ({ ...prevData, [name]: value }));
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Envoyez les données du formulaire où vous le souhaitez (par exemple, à un serveur ou via un service d'e-mail).
          console.log('Données du formulaire :', formData);
        };

    return (
        <div className='social' id='social'>
            <div className='social_container' id='social_container_link'>
                <h1>Restons en contact</h1>
                    <a href='https://www.facebook.com/profile.php?id=100087199472382'>
                    <div className='social_container_grid'>
                        <img src={facebook} alt="facebook" />
                        <p>inola monitrice independante</p>
                    </div>
                </a>
                {/* <p>Facebook</p> */}
                <a href='https://www.instagram.com/inola.monitrice.independante/'>
                    <div className='social_container_grid' >
                        <img src={instagram} alt="instagram" />
                        <p>inola.monitrice.independante</p>
                    </div>
                </a>
                {/* <p>Instagram</p> */}
            </div>
            <form onSubmit={handleSubmit}>
                <div className='social_container' id='social_container_contact'>
                    <div className='social_grid'>
                        <div className='social_info'>
                            <label>Prénom</label>
                            <input type="text" name="prénom" placeholder="Ton prénom et/ou nom" value={formData.prénom} onChange={handleInputChange}/>
                        </div>
                        <div className='social_info'>
                            <label>Email</label>
                            <input type="text" name="mail" placeholder="exemple@gmail.com" value={formData.mail} onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className='social_info' id='social_message'>
                        <label>Message</label>
                        <textarea placeholder="Entre ton message" value={formData.message} onChange={handleInputChange} id='social_info_message'/>
                    </div>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </div>
    );
}

export default Social;