import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlices";
import {useNavigate} from "react-router-dom";


function Header(){


    const navigate = useNavigate();

    const logado = useSelector((state) => state.user.logado)
    const numeUsuario = useSelector((state) => state.user.nome)
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logout());
        fetch(`http://localhost:3333/logout`,{
            method: "DELETE",
            credentials: "include",
        })
        .then(resp => resp.json())
        .then(json => console.log(json))
    }        
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand mb-0 h1" to="/">Minha Loja</Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/sobre">Sobre</Link>
                        {!logado && <Link className="nav-link" to="/login">
                            Login    
                    </Link>}
                        {logado && <Link onClick={handleLogout}  className="nav-link" to = "/" >
                            Logout    
                    </Link>}
                </div>
            </div>
      </nav>
    )
}

export default Header