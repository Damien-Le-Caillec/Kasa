import {Link} from 'react-router-dom';
import "../../styles/home/Card.sass";

function Card ({ title, cover, id }) {
    return (
        
            <Link to={`/logement/${id}`} className="card">
                <img src={cover} alt={`Image de ${title}`} className="card-image" />
                <div className="card-overlay"></div>
                <h2>{title}</h2>
            </Link>
        
    );
}

export default Card;