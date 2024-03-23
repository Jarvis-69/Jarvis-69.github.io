import './Grid.css';

function Gird () {
    return (
        <div className='grid'>
            <h1 className='grid_h1'>Des activités équestres pour tous les goûts</h1>
            <div className='Gird'>
                <div className='Gird_txt'>
                    <h1>Stages d'équitation pour améliorer vos compétences</h1>
                    <p>Nos cours d'équitation sont adaptés à tous les âges et niveaux d'expérience. Que vous soyez débutant ou confirmé, nous avons des cours qui répondront à vos besoins.</p>
                    <p className='Grid_p'>En savoir plus ></p>
                </div>
                <div className='Gird_txt'>
                    <h1>Cours particuliers pour une progression personnalisée</h1>
                    <p>Nos cours particuliers vous permettent de bénéficier d'une attention individuelle et d'une progression adaptée à vos objectifs spécifiques.</p>
                    <p className='Grid_p'>En savoir plus ></p>
                </div>
                <div className='Gird_txt'>
                    <h1>Activités équestres pour toute la famille</h1>
                    <p>Profitez de nos activités équestres en famille pour partager des moments inoubliables et découvrir le monde fascinant du cheval.</p>
                    <p className='Grid_p'>En savoir plus ></p>
                </div>
            </div>
        </div>
    );
}

export default Gird;