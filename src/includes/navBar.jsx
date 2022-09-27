export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <b>MUJER</b>
            </a>
            <div className="dropdown-menu" >
              <a className="dropdown-item" href="#">Camisas</a>
              <a className="dropdown-item" href="#">Vestidos</a>
              <a className="dropdown-item" href="#">Pantalones</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <b>HOMBRE</b>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Camisas</a>
              <a className="dropdown-item" href="#">Vestidos</a>
              <a className="dropdown-item" href="#">Pantalones</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <b>NIÑOS</b>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Camisas</a>
              <a className="dropdown-item" href="#">Vestidos</a>
              <a className="dropdown-item" href="#">Pantalones</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <b>MARCAS</b>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">only</a>
              <a className="dropdown-item" href="#">magma</a>
              <a className="dropdown-item" href="#">lolita</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link text-danger" href="#"><b>SALE</b></a>
          </li>
        </ul>
      </div>
    </nav>

  );
};
