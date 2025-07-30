import logobw from '../assets/logobw.png'
import "../styles/Footer.css"


function Footer() {

    return (
        <div className="footer">
            <img src={logobw} alt="Kasa Logo" className="footer-logo" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </div>
    );
}

export default Footer;