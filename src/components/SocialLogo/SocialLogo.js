import { Link } from "react-router-dom";
import "./SocialLogo.css"

const SocialLogo = (props) => {
    return (
        <div className="div_social_logo">
            <ul className="social_logo">
                <Link to={"contacto"}>
                    <li><img src={props.img} alt="logos redes sociales" /></li>
                </Link>
            </ul>
        </div>
    )
}

export default SocialLogo;