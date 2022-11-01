import logo from "../resources/img/logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { CartWidget } from "./cartWidget";
import { Link } from "react-router-dom";

export const SubBar = () => {

    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <Link to={'/'}>
                        <img height={70} src={logo} /> <b>Cubic Ecommerce</b>
                    </Link>

                    <div className="d-flex p-2">
                        <Link to={'/'}>
                            <button className="mx-1 btn btn-sm btn-dark" href="#">
                                <FontAwesomeIcon icon={faUser} />
                            </button>
                        </Link>

                        <Link to={'/cartDetail'}>
                            <CartWidget />
                        </Link>
                    </div>

                </div>

            </div>
        </nav>

    );
};
