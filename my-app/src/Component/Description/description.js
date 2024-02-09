import './description.css';
import logo from '../Assests/logo.png';

function Description () {
    return (
        <div className='description'>
            <div className='description_txt'>
                <h2>Titre</h2>
                <p>Elit officia sunt qui anim. Magna commodo do adipisicing nulla irure sit quis. Non voluptate sit aliquip tempor ea quis consectetur ullamco elit officia do. Adipisicing ea do sunt sunt mollit. Nostrud elit occaecat ipsum dolor exercitation officia duis officia eu culpa veniam occaecat id officia. Consequat tempor id culpa et exercitation exercitation ea.</p>
            </div>
            <div>
                <img src={logo} alt="Logo" className='description_img'/>
            </div>
        </div>
    );
}

export default Description;