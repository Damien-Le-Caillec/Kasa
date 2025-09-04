import '../styles/404/Error404.sass';
import {Link} from 'react-router-dom';


function Error404 () {
    return (
        <div className="error-404">
            <h1 className="error-404__title">404</h1>
            <h2 className="error-404__message">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to={'/'} className="link-home">
                <p>Retourner sur la page d'acceuil</p> 
            </Link>
        </div>
        
    );
}

export default Error404;