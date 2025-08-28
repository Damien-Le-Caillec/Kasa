import { useState } from "react";

function LogementDescription({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

   return (
        <div className="logement-description">
            <button className="description-button" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && <p className="description-content">{content}</p>}
        </div>
    );
}

export default LogementDescription;
