import "../../styles/home/Card.css";

function Card ({ title, cover }) {
    return (
        <div className="card">
            <img src={cover} alt={`Image de ${title}`} className="card-image" />
            <h2>{title}</h2>
        </div>
    );
}

export default Card;