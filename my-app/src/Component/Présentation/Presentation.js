import './Presentation.css';
import horse from '../Assests/horse.png';

function Presentation () {
    return (
        <div className='presentation'>
            <div className='presentation_grid'>
                <div className='presentation_txt'>
                    <div>
                        <h1 className='presentation_h1'>Salvador Inola</h1>
                        <h2 className='presentation_h2'>Monitrice indépendante</h2>
                        <p className='presentation_p'>Je suis monitrice indépendante, je vous propose des cours de dressage, de saut d'obstacle et de cross. Je vous propose également des stages de perfectionnement. Je me déplace dans les écuries de votre choix.
                        </p>
                        <button className='btn'>Découvrir</button>
                        <button className='btn' id='presentation_button_2'>Contact</button>
                    </div>
                </div>
                <div className='presentation_img'>
                    <img src={horse} alt="Logo" className='Logo_Presentation' />
                </div>
            </div>
        </div>
    );
}

export default Presentation;