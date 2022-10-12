import logo from "../resources/img/logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Cart } from "../components/cart";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";


export const SearchBar = () => {


    const [search, setSearch] = useState([]);
    const [params, setParams] = useSearchParams();

    const getSearch = (e) => {
        setSearch(e.target.value)
/*         console.log(e.target.value)
 */    }

    const addParams = (e) => {
        setParams({
            q: search,
        })
    }

    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <Link to={'/'}>
                        <img height={70} src={logo} />
                    </Link>
                    <div className="d-flex col-xl-6 col-8" >
                        <input className="form-control me-2" type="search" onChange={getSearch} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={addParams} >Search</button>
                    </div>
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
