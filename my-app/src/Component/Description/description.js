import './description.css';
import description_img from '../Assests/description.svg';

function Description () {
    return (
            <div className='description_grid'>
                <div className='description_img_div'>
                    <img src={description_img} alt="poney" className='description_img'/>
                </div>
                <div className='description_txt'>
                    <h3>Présentation</h3>
                    <h1>Une méthode d'enseignement unique pour vous</h1>
                    <p>Découvrez les avantages de choisir cette monitrice d'équitation indépendante. Avec une approche personnalisée et une passion pour les chevaux, vous atteindrez vos objectifs équestres rapidement et en toute confiance.</p>
                    {/* <button className='btn'>Découvrir</button>
                    <button className='btn' id='presentation_button_2'>Contact</button> */}
                </div>
            </div>
    );
}

export default Description;