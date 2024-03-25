import './Temoignage.css'
import logo from '../Assests/logo.png'
import star from '../Assests/star.png'

function Temoignage () {
    return (
        <div className="temoignage">
            <div>
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
            </div>
            <div>
                <p>« J'ai vraiment progressé grâce à la monitrice d'équitation. Elle est patiente et professionnelle, et elle sait comment me pousser à me dépasser. Je recommande vivement ses cours ! »</p>
            </div>
            <div className='temoignage_id'>
                <img src={logo} alt="Logo" />
                <p>Marie, 25 ans, Paris</p>
            </div>
        </div>
    );
}

export default Temoignage;