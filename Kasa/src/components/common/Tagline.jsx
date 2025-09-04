import "../../styles/home/Tagline-home.sass";


function Tagline({ showTitle = true, variant = "home" }) {

    return (
        <div className={`tagline tagline--${variant}`} aria-label="Chez vous, partout et ailleurs">
            {showTitle && <h1>Chez vous, partout et ailleurs</h1>}
        </div>
    );
}

export default Tagline;
