import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {LimparCarrinho} from "../redux/slices/carrinhoSlices";


function Carrinho(){

    const dispatch = useDispatch();
    const logado = useSelector((state) => state.user.logado)
    
    const carrinho =  useSelector(state => state.carrinho)
    const handleApaguarCarrinho = () =>{
        dispatch(LimparCarrinho());
    }
    console.log({carrinho})
    return(
        <div>
            
            <div>
                <h3>Carrinho de compras</h3>
            </div>
            <button onClick={handleApaguarCarrinho}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            <ul className = "list-group">
                {carrinho.carrinho.map(element => <li className="list-group-item " key={element.id}>
                    <h3>ITEM: {element.nome}</h3>
                    <h2>QUANTIDADE: {element.quantidade}</h2>
                    <h2>VALOR: {element.preco}</h2>
                </li>)}

            </ul>
            <h3>VALOR TOTAL: {carrinho.total}</h3> 

         </div>
    )
}

export default Carrinho


