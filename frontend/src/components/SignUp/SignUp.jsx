import { useState } from "react"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

function SignUp(){

    const [nome , setNome] = useState('')
    const [email , setEmail] = useState("");
    const [senha , setSenha] = useState("");
    const [confirmasenha , setConfirmaSenha] = useState("");
    const [erroSenha , SetErrorSenha] = useState(false);
    const [NomeErro , setNomeErro] = useState(false);
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();
    const TipoUsuario =useSelector(state=> state.user.tipoUsuario)
    let tipoUsuarioId = 0;


    useEffect(() =>{
        if(senha === confirmasenha){
            return SetErrorSenha(false)
        }
        if(senha != confirmasenha ){
            return SetErrorSenha(true)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!erroSenha){
            if(TipoUsuario === 'colaborador'){
                tipoUsuarioId = 2
            }else{
                tipoUsuarioId = 1
            }
            const usuario = {tipoUsuarioId,nome,email,senha}
            
            fetch("http://localhost:3333/usuarios",{
                method:"POST",
                credentials:'include',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(usuario)
            })
            .then(resp => resp.json())
            .then (json => {
                setIsPending(false);
                if(json.errors){
                    json.errors.forEach(error => {
                        if(error.path === 'nome'){
                            setNomeErro(error.message)
                        }
                    });
                }else{
                    navigate("/")
                }
            })
        }else{
            SetErrorSenha(true)
        }
    }

    return(
        <div>
            <h3>Criação de usuario</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome completo </label>
                <input 
                    type="text" 
                    value = {nome}
                    onChange = {(e) => setNome(e.target.value)}
                    id="nome" 
                    className={`form-control ${NomeErro ==='' ? '' : 'is-invalid'}`}/>
                <div className="invalid-feedback">
                    {NomeErro}
                </div>
                <label htmlFor="descricao">Email</label>
                <input 
                    value ={email}
                    onChange = {(e) => setEmail(e.target.value)}
                    id="email"
                    className="form-control"/>
                <label htmlFor="preco">Senha</label>
                <input 
                    type="password"
                    value={senha} 
                    onChange = {(e) => setSenha(e.target.value)}
                    id="senha" 
                    className="form-control"/>
                <label htmlFor="confirmasenha">Confirmação de Senha</label>
                <input 
                    type="password"
                    value={confirmasenha} 
                    onChange = {(e) => setConfirmaSenha(e.target.value)}
                    id="confirmasenha" 
                    className="form-control"/>
                
                {erroSenha && <div className="alert alert-danger" role="alert">
                    Senhas não conferem.
                </div>}
                {!isPending && <button className="btn btn-primary mt-3" type="submit">
                    Cadastrar
                </button>}
                {isPending && <button className="btn btn-primary mt-3" type="submit">
                    Cadastrar
                </button>}
            </form>
        </div>
    )
}

export default SignUp