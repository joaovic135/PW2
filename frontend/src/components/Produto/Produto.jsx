import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen ,faTrash} from '@fortawesome/free-solid-svg-icons';
import  Modal from "../Modal/Modal";
import CounterRedux from "../Counter/CounterRedux"
import { useSelector , useDispatch } from "react-redux";
import {addProduto} from "../redux/slices/carrinhoSlices";



function Produto(){

    const[produto,setProduto] = useState({});
    const[modalOpen , setModalOpen] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const produtoCounter = useSelector(state => state.produtos.produtos[id])
    const TipoUsuario =useSelector(state=> state.user.tipoUsuario)
    console.log(TipoUsuario)

    
    useEffect(()=>{
        fetch(`http://localhost:3333/produtos/${id}`,{credentials:"include"} )
        .then(resp => resp.json())
        .then(json => {setProduto(json)})
    },[id])

    const handleClickDelete = () =>{
        setModalOpen(true);
    }

    const handleModalClose = () =>{
        setModalOpen(false);
    }

    const handleDelete = () =>{
        fetch(`http://localhost:3333/produtos/${id}`,{
            method: 'DELETE',
            credentials: "include"
        })
        .then(()=> navigate("/"))
    }
    const handleCarrinho = () =>{

        dispatch(addProduto({produto,produtoCounter}))

    }
    //const produtoCounter = useSelector(state => state.produtos.produtos[id])

    return(
        <div>
            <div style={{ display: "flex" }}>
                    <img src= {`http://localhost:3333/uploads/${produto.path}`} alt= "string" height={200} width={200}  />
            </div>
            <div className="d-flex justify-content-between" >
                <h3>{produto.nome}</h3>
                { TipoUsuario === 'colaborador' &&
                <div>
                    <button onClick={()=> navigate(`/produto/${produto.id}/edit`)}> 
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button onClick={handleClickDelete}> 
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>}
            </div>
            <p>{produto.descricao}</p>
            <p>{produto.preco}</p>
            <CounterRedux></CounterRedux> 
            <button onClick = {handleCarrinho}>Adicionar produto ao carrinho</button>

            <Modal open={modalOpen} onClose={handleModalClose} onConfirm={handleDelete} ></Modal>
        </div>
    )
}

export default Produto