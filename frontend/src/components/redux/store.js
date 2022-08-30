import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./slices/userSlices"
import produtosSlice from "./slices/produtosSlices"
export default configureStore({
  reducer: {
    user: userSlice,
    produtos: produtosSlice 
  }
})