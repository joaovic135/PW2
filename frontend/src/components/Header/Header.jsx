import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlices";
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping , faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {LimparCarrinho} from "../redux/slices/carrinhoSlices";


function Header(){


    const navigate = useNavigate();

    const logado = useSelector((state) => state.user.logado)
    //const nomeUsuario = useSelector((state) => state.user.nome)
    const TipoUsuario =useSelector(state=> state.user.tipoUsuario)

    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logout());
        dispatch(LimparCarrinho());
        fetch(`http://localhost:3333/logout`,{
            method: "DELETE",
            credentials: "include",
        })
        .then(resp => resp.json())
        .then(json => console.log(json))
    } 
    
    const handleCarrinho = () =>{
        navigate("/carrinho")
    }
    const handleUser = () =>{
        navigate("/signup")
    }
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand mb-0 h1" to="/">Minha Loja</Link>
                <div className="navbar-nav">


                    {TipoUsuario === 'colaborador' && <button onClick={handleUser}>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button> }
                    



                    <button onClick={handleCarrinho}> 
                        <FontAwesomeIcon icon={faCartShopping  } />
                    </button>
                    <Link className="nav-link" to="/sobre">Sobre</Link>
                        {!logado && <Link className="nav-link" to="/login">
                            Login    
                    </Link>
                    }
                        {!logado && <Link className="nav-link" to="/signup">
                            Signup    
                    </Link>
                    }
                        {logado && <Link onClick={handleLogout}  className="nav-link" to = "/" >
                            Logout    
                    </Link>}

                    
                </div>
            </div>
      </nav>
    )
}

export default Header