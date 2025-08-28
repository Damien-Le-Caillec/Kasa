

function LogementTitleLocation({ title, location }) {
    return (
        <div className='logement-title-location'>
            <h1 className='logement-title'>{title}</h1>
            <p className='logement-location'>{location}</p>
        </div>
    );
}

export default LogementTitleLocation;