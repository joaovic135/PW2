import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate, Link} from "react-router-dom"
import { useSelector , useDispatch } from "react-redux";
function Produtos(){
    

    const [produtos , setProdutos ] = useState([]);
    const [searchString , setSearchString] = useState("");
    const [searchProdutos , setSearchProdutos ] = useState([]);
    const navigate = useNavigate();
    const TipoUsuario =useSelector(state=> state.user.tipoUsuario)
    useEffect(() =>{
        fetch("http://localhost:3333/produtos" ,{credentials:"include" } )
        .then(result => result.json())
        .then(json => setProdutos(json))
        .catch(error => console.log(error))
    },[]);

    useEffect(() =>{
        setSearchProdutos(produtos.filter(prod => prod.nome.toLowerCase().includes(searchString.toLowerCase())))        
    },[searchString])

    console.log(produtos)

    return(
        <div>
            <div>
                <h3 className="float-start">Listagem de Produtos</h3>
                { TipoUsuario === 'colaborador' &&
                <div className="float-start">
                    <button
                    onClick={()=>{
                        navigate("/produto/add")
                    }} 
                    className="btn btn-primary"
                    >Criar</button>
                </div>}
                
            </div>

            <input onChange={(e)=> setSearchString(e.target.value)} className="form-control mb-3" type ="text" value = {searchString}/>
            <ul className = "list-group">
                {searchString ==='' && produtos.map(produto => <li className="list-group-item " key={produto.id}>
                    <Link to={`/produto/${produto.id}`}>{produto.nome}</Link>
                </li>)}
                {searchString !=='' && searchProdutos.map(produto => <li className="list-group-item " key={produto.id}>
                    <Link to={`/produto/${produto.id}`}>{produto.nome}</Link>
                </li>)}
            </ul>

        </div>
 
    )
}

export default Produtos