import './Temoignage.css'
import logo_black from '../Assests/logo_black.png'

function Temoignage () {
    return (
        <div className="temoignage">
            <div>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
            </div>
            <div>
                <p>« J'ai vraiment progressé grâce à la monitrice d'équitation. Elle est patiente et professionnelle, et elle sait comment me pousser à me dépasser. Je recommande vivement ses cours ! »</p>
            </div>
            <div className='temoignage_id'>
                <img src={logo_black} alt="Logo" />
                <p>Marie, 25 ans, Paris</p>
            </div>
        </div>
    );
}

export default Temoignage;