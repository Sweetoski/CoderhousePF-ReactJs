import {} from "react-router-dom";
import "./Footer.css"
import SocialLogo from "../SocialLogo/SocialLogo";
import FacebookLogo from "../../img/Facebook Logo.png";
import InstagramLogo from "../../img/Instagram Logo.png";
import TwitterLogo from "../../img/Twitter Logo.png";
import WhatsappLogo from "../../img/Whatsapp Logo.png";
import YoutubeLogo from "../../img/Youtube Logo.png";

const Footer = (props) => {
    return (
        <footer className="footer_all">
            <div className="footer_container">
                <div>
                    <b>MAPA DE SITIO</b>
                    <ul>
                        <li>Home</li>
                        <li>Accesorios</li>
                        <li>Refacciones</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div>
                    <b>ATENCION TELEFONICA</b>
                    <ul>
                        <li>Atención a Clientes</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Legales</li>
                        <li>Terminos y Condiciones</li>
                        <li>Politica de Cookies</li>
                        <li>Aviso de Privacidad</li>
                    </ul>
                </div>
            </div>

            <div className="logo_flex">
                <SocialLogo img={FacebookLogo} />
                <SocialLogo img={InstagramLogo} />
                <SocialLogo img={TwitterLogo} />
                <SocialLogo img={WhatsappLogo} />
                <SocialLogo img={YoutubeLogo} />
            </div>

            <div>
                <p>© Auto Total 2023, Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;