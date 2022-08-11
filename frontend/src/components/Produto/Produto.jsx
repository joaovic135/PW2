import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Produto(){

    const[produto,setProduto] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3333/produtos/${id}`,{credentials:"include"} )
        .then(resp => resp.json())
        .then(json => {setProduto(json)})
    },[])
    return(
        <div>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
        </div>
    )
}

export default Produto