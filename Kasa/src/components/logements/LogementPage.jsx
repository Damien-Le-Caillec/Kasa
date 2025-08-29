import '../../styles/logements/LogementPage.css';
import logements from '../../datas/logements.json';
import Carousel from './Carousel';
import LogementTitleLocation from './Logement-title-location';
import { Navigate, useParams } from 'react-router-dom';
import LogementTags from './Logement-tags';
import LogementHost from './Logement-host';
import LogementRating from './Logement-rating';
import Dropdown from '../Dropdown';


function LogementPage() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        return <Navigate to="/404"/>;
    }

    return (
        <div className='logement-page'>
            <Carousel pictures={logement.pictures} />
            <div className='logement-details'>
                <div className='logement-header'>
                    <div className='logement-info'> 
                        <LogementTitleLocation title={logement.title} location={logement.location} />
                        <LogementTags tags={logement.tags} />
                    </div>
                    <div className='logement-host-rating'>
                        <LogementHost logement={logement} />
                        <LogementRating rating={logement.rating} />
                    </div>
                </div>
                    <div className='logement-description-equipements'>
                        <Dropdown title="Description">
                         <p>{logement.description}</p>
                        </Dropdown>

                        <Dropdown title="Équipements">
                            <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </Dropdown>
                    </div>
            </div>
        </div>
    );

}

export default LogementPage;



