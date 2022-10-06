import logo from "../resources/img/logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Cart } from "../components/cart";
import { Link } from "react-router-dom";

export const SearchBar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <Link to={'/'}>
                        <img height={70} src={logo} />
                    </Link>
                    <form className="d-flex col-xl-6 col-8" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="d-flex p-2">
                        <button className="btn btn-dark" href="#">
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                        <Link to={'/cart'}>
                        <Cart />
                        </Link>
                    </div>

                </div>
            </div>
        </nav>

    );
};
