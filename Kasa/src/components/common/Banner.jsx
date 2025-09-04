import logo from '../../assets/logo.png'
import "../../styles/common/Banner.sass"


function Banner() {
    const title = "Kasa";

    return (
        <div className="banner">
            <img src={logo} alt="Kasa Logo" className="banner-logo" />
            <nav className="banner-nav">
                <ul className="banner-nav-list">
                    <li className="banner-nav-item"><a href="/">Acceuil</a></li>
                    <li className="banner-nav-item"><a href="/about">A Propos</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Banner;