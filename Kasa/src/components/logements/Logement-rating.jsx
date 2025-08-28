

function LogementRating({ rating }) {
    return (
        <div className='logement-rating'>
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
                        ))}
                    </div>
    )
}

export default LogementRating;