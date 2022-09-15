import React, { useReducer } from "react";
import { useEffect } from "react";

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return{ counter: state.counter -1}
        case 'decrement':
            return{ counter: state.counter -1}
        default:
            return state;
    }
}

function Counter() {


    const [state, dispatch] = useReducer(reducer, { counter: 0 });


    return (
        <div style={{ display: "flex" }}>
            <button onClick={() => dispatch({type: 'decrement'})} className = "btn btn-primary mx-1">&minus;</button>
            <h2>{state.counter}</h2>
            <button onClick={() => dispatch({type: 'incremente'})} className = "btn btn-primary mx-1">+</button>
        </div>
    );

}
export default Counter