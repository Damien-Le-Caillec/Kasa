import '../../styles/logements/Carousel.css';
import { useState } from 'react';

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className='carousel'>
            <img src={pictures[currentIndex]} alt={`Photo ${currentIndex}`} className='carousel-image'/>

            {pictures.length > 1 && (
                <>
                    <button className='carousel-arrow left' onClick={prevSlide}>
                        ❮
                    </button>

                    <button className='carousel-arrow right' onClick={nextSlide}>
                        ❯
                    </button>

                    <div className='carousel-counter'>
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    )
}

export default Carousel;