import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlices"
import {useNavigate} from "react-router-dom";

function Login(){

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [email , setEmail] = useState("");
    const [senha , setSenha] = useState("");
    const [error , setError] = useState(false);


    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch(`http://localhost:3333/login` , {
            credentials: "include" , 
            method: "POST" , 
            headers:{"Content-type": "application/json"},
            body: JSON.stringify({email , senha})
        })

        .then(resp =>{
            if( resp.status === 401) setError(true)
            else return resp.json();
        })
        .then(json => {
            console.log(json)
            dispatch(login(json))
            navigate("/")
        })
    }

    return (


        <div className="container-fluid">
            <div className = "row">
                <div className="col-6"> 
                    <h3>Autenticação de Usuario</h3>
                    
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email </label>
                        <input className = {`form-control ${error ==='' ? '' : 'is-invalid'}`} value = { email } onChange = {(e) => setEmail(e.target.value)} type="text" />
                        <label htmlFor="email">Senha </label>
                        <input className = {`form-control ${error ==='' ? '' : 'is-invalid'}`} value = { senha } onChange = {(e) => setSenha(e.target.value)} type="text" />
                        {error && <div className= "invalid-feedback">
                            Email ou senha incorreto     
                        </div>}
                        <button  className = "btn btn-primary mt-2" type="submit">Entrar</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login