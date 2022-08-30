import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    produtos: []
}

const produtosSlice = createSlice ({
    name: "produtos",
    initialState,
    reducers: {
        start: (state , action) => {
            state.produtos[action.payload] = 0
        },
        increment:(state,action) => {
            state.produtos[action.payload] = produtos[action.payload] + 1
        },
        decrement:(state,action) => {
            if( state.produtos[action.payload] > 0 ){
                state.produtos[action.payload] = produtos[action.payload] - 1
            }else{
                state.produtos[action.payload] = produtos[action.payload] - 1
            }
        }
    }  
});

export const { increment , decrement, start} = produtosSlice.actions ; 
export default produtosSlice.reducer;