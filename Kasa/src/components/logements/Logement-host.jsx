

function LogementHost({ logement }) {
    return (
        <div className='logement-host'>
            <p className='host-name'>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className='host-picture' />
        </div>
    );
}

export default LogementHost;