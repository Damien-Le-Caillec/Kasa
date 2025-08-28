

function LogementTags({ tags }) {
    return (
        <div className='logement-tags'>
            {tags.map((tag, index) => (
                <span key={index} className='logement-tag'>{tag}</span>
            ))}
        </div>
    );
}

export default LogementTags;