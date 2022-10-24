import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState} from "react";
export const NavBar = () => {
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
<>
    <div className="d-flex col-xl-6 col-8 mx-auto mb-3" >
    <input className="form-control me-2" type="search" onChange={getSearch} placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success" onClick={addParams} >Search</button>
  </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown">
            <NavLink to={"/mujer"} className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} >
              <b>MUJER</b>
            </NavLink>
            <div className="dropdown-menu" >
              <NavLink className="dropdown-item" to={"/mujer/camisetas"}>Camisetas</NavLink>
              <NavLink className="dropdown-item" to={"/mujer/sweaters"}>Sweaters</NavLink>
              <NavLink className="dropdown-item" to={"/mujer/pantalones"}>Pantalones</NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink to={"/hombre"} className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} >
              <b>HOMBRE</b>
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <NavLink className="dropdown-item" to={"/hombre/chaquetas"}>Chaquetas</NavLink>
              <NavLink className="dropdown-item" to={"/hombre/camisas"}>Camisas</NavLink>
              <NavLink className="dropdown-item" to={"/hombre/camisetas"}>Camisetas</NavLink>
              <NavLink className="dropdown-item" to={"/hombre/sweaters"}>Sweaters</NavLink>
              <NavLink className="dropdown-item" to={"/hombre/pantalones"}>Pantalones</NavLink>
              <NavLink className="dropdown-item" to={"/hombre/jeans"}>Jeans</NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink to={"/niños"} className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} >
              <b>NIÑOS</b>
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <NavLink className="dropdown-item" to={"/niños/camisetas"}>Camisetas</NavLink>
              <NavLink className="dropdown-item" to={"/niños/sweaters"}>Sweaters</NavLink>
              <NavLink className="dropdown-item" to={"/niños/pantalones"}>Pantalones</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};
