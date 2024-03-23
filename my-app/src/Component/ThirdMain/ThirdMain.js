import './ThirdMain.css'
import description_img from '../Assests/description.jpg';

function ThirdMain () {
    return (
        <div className='ThirdMain'>
            <div className='ThirdMain_txt'>
                <h4>Découvrez</h4>
                <h1>Les avantages de l'équitation pour votre bien-être</h1>
                <p className='ThirdMain_p1'>L'équitation offre de nombreux bénéfices pour le développement personnel et la forme physique. En pratiquant ce sport, vous pouvez améliorer votre confiance en vous, renforcer vos muscles et améliorer votre équilibre.</p>
                <p className='ThirdMain_p2'>- Développez votre confiance en vous et votre estime de soi.<br></br><br></br>
                - Renforcez votre corps et améliorez votre condition physique.
                <br></br><br></br>
                - Améliorez votre équilibre et votre coordination motrice.
                </p>
                {/* <button className='btn'>Découvrir</button>
                <button className='btn' id='presentation_button_2'>Contact</button> */}
            </div>
            <div className='ThirdMain_div_img'>
                <img src={description_img} alt="Logo" className='ThirdMain_img'/>
            </div>
        </div>
    );
}

export default ThirdMain;