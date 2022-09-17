import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    carrinho: [],
    total: 0,
}

const Total = (arr) =>{
    var resultado = arr.reduce((carrinho,produto) =>{
        return carrinho + produto.quantidade * parseFloat(produto.preco)
    },0);
    return resultado
}

const Carrinho = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        addProduto:(state,action)=>{
            console.log(action.payload.produtoCounter)


            const itemproduto = state.carrinho.find(item => item.id === action.payload.produto.id )

            console.log({itemproduto})
            if(itemproduto){
                const carrinho = state.carrinho.map(item =>{
                    if(item.id === itemproduto.id ){
                        return{
                            ...item,
                            quantidade: action.payload.produtoCounter
                        }
                    }
                    return item
                });

                return{
                    ...state,
                    carrinho: carrinho,
                    total: Total(carrinho)
                }
            }

            
            const objeto = {...action.payload.produto , quantidade: action.payload.produtoCounter}
            console.log({objeto})
            const valor = [...state.carrinho]
            valor.push(objeto)
            console.log("carrinho:" , valor)
            return{
                ...state,
                total: Total(valor),
                carrinho: valor
            };

        },

        removeProdutoCarrinho: (state,action) => {
            const novoCarrinho = state.carrinho.filter(element => element.id !== action.payload.id)
            return {
                ...state,
                carrinho: novoCarrinho,
                total: Total(state)                
            }
        },

        LimparCarrinho: (state) => initialState

    }

})

export const {addProduto,removeProdutoCarrinho, LimparCarrinho } = Carrinho.actions;
export default Carrinho.reducer;