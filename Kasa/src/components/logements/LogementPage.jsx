import "../logements/LogementPage.css";
import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';


function LogementPage() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    if (!logement) {
        return <Navigate to="/404"/>;
    }

    return (
        <div className="carousel">
            <img src={cover} alt={`Image de ${title}`} className="card-image" /> 
        </div>
    )

}

export default LogementPage;



// function LogementPage() {
//   const { id } = useParams();
//   const logement = logements.find(item => item.id === id);

//   if (!logement) {
//     return <h2>Logement non trouvé 😢</h2>;
//   }

//   return (
//     <div className="logement-container">
//       <h1>{logement.title}</h1>
//       <h3>{logement.location}</h3>

//       {/* Images principales */}
//       <img src={logement.cover} alt={`Image principale de ${logement.title}`} />

//       {/* Galerie d’images */}
//       <div className="logement-gallery">
//         {logement.pictures.map((pic, index) => (
//           <img key={index} src={pic} alt={`Photo ${index + 1}`} />
//         ))}
//       </div>

//       {/* Tags */}
//       <div className="logement-tags">
//         {logement.tags.map((tag, index) => (
//           <span key={index} className="tag">{tag}</span>
//         ))}
//       </div>

//       {/* Hôte */}
//       <div className="host-info">
//         <p>{logement.host.name}</p>
//         <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} />
//       </div>

//       {/* Équipements */}
//       <ul className="equipments-list">
//         {logement.equipments.map((equip, index) => (
//           <li key={index}>{equip}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LogementPage;
