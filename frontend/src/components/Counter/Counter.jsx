import React, { useState } from "react";
import { useEffect } from "react";


function Counter() {


    const initialValue = { produtoId: 30, counter: 0 }
    const [state, setState] = useState(initialValue);

    useEffect(()=>{
        console.log("O estado mudou!");
        return( ) => console.log;
    },[]);


    const increment = () => setState({ ...state, counter: state.counter + 1 });
    const decrement = () => setState({ ...state, counter: state.counter - 1 });


    return (
        <div style={{ display: "flex" }}>
            <button onClick={decrement} className = "btn btn-primary mx-1">&minus;</button>
            <h2>{state.counter}</h2>
            <button onClick={increment} className = "btn btn-primary mx-1">+</button>
            <button onClick={() => setRandom(Math.random() * 100 )} className = "btn btn-primary mx-1">+</button>
        </div>
    );

}
export default Counter