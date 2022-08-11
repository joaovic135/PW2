import {Link} from "react-router-dom";

function Header(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand mb-0 h1" to="/">Minha Loja</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">Sobre</Link>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Header