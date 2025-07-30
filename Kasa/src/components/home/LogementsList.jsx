import Card from './Card';
import logements from '../../datas/logements.json';
import "../../styles/home/LogementsList.css";

function LogementsList() {
    return (
        <div className='card-container'>
            {logements.map((logement, id) => (
                <Card
                    key={id}
                    title={logement.title}
                    cover={logement.cover}
                />
            ))}
        </div>
    )
}

export default LogementsList;