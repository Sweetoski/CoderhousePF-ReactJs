import {Link} from "react-router-dom";

function Error() {
    return (
        <div>
            <h2>404</h2>
            <p>Pagina no encontrada</p>
            <Link to="/accesorios">
                Volver
            </Link>
        </div>
    )
}

export default Error;