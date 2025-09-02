import "../styles/home/LogementsList.css";
import Card from '../components/home/Card';
import logements from '../datas/logements.json';
import Tagline from '../components/common/Tagline';

function LogementsList() {
    return (
        <div className='logements-list'>
            <Tagline variant="home" showTitle={true}/>
            <div className='card-container'>
                {logements.map((logement, id) => (
                    <Card
                        key={id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
       
    )
}

export default LogementsList;