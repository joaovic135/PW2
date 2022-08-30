import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { increment , decrement , start } from "../redux/slices/produtosSlices"
import { useParams } from "react-router-dom";

function CounterRedux() {


    const dispatch = useDispatch();
    const { id } = useParams();

    const produtoCounter = useSelector(state => state.produtos.produtos[id])

    useEffect(()=>{
       if  (!produtoCounter) dispatch(start(id))
    },[id , produtoCounter , dispatch])

    return (
        <div style={{ display: "flex" }}>
            <button onClick={() => dispatch(decrement(id))} className = "btn btn-primary mx-1">&minus;</button>
            <h2>{produtoCounter}</h2>
            <button onClick={() => dispatch(increment(id))} className = "btn btn-primary mx-1">+</button>
        </div>
    );

}
export default CounterRedux