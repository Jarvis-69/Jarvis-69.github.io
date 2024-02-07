import './Presentation.css';
import logo from '../Assests/logo.png';

function Presentation () {
    return (
        <div className='presentation'>
            <div className='presentation_div_logo'>
                <img src={logo} className='Logo_Presentation' />
            </div>
            <div className='presentation_txt'>
                <h1 className='presentation_h1'>SALVADOR INOLA <br></br> Monitrice Indépendante</h1>
                <p className='presentation_p'>Je suis monitrice indépendante, je vous propose des cours de dressage, de saut d'obstacle et de cross. Je vous propose également des stages de perfectionnement. Je me déplace dans les écuries de votre choix.
                </p>
                <button className='presentation_button'>Découvrir</button>
                <button className='presentation_button' id='presentation_button_2'>Contact</button>
            </div>
        </div>
    );
}

export default Presentation;