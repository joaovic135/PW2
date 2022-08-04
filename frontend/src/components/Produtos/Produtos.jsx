import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Produtos(){
    

    const [produtos , setProdutos ] = useState([]);
    const [searchString , setSearchString] = useState("");
    const [searchProdutos , setSearchProdutos ] = useState([]);


    useEffect(() =>{
        fetch("https://localhost:3333/produtos" ,{credentials:"include" } )
        .then(result => result.json())
        .then(json => setProdutos(json))
    },[]);

    useEffect(() =>{
        setSearchProdutos(produtos.filter(produto => produto.nome.toLowerCase().include(searchString.toLowerCase())))        
    },[searchString,produtos])

    console.log(produtos)

    return(
        <div>
            <input onChange={(e)=> setSearchString(e.target.value)} className="form-label mb-2" type ="text" value = {searchString}/>
            <ul className = "list group">
                {searchString ==='' && produtos.map(produto => <li className="list-group-item " key={produto.id}>{produto.nome}</li>)}
                {searchString !=='' && searchProdutos.map(produto => <li className="list-group-item " key={produto.id}>{produto.nome}</li>)}
            </ul>

        </div>
 
    )
}

export default Produtos