import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./slices/userSlices"
import produtosSlice from "./slices/produtosSlices"
import CarrinhoSlice from './slices/carrinhoSlices'
export default configureStore({
  reducer: {
    user: userSlice,
    produtos: produtosSlice, 
    carrinho: CarrinhoSlice
  }
})