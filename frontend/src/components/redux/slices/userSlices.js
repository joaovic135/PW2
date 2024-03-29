import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nome: '',
    email: '',
    logado: false,
    tipoUsuario: 'visitante',


}

const userSlice = createSlice({
    name: 'user' ,
    initialState: initialState,
    reducers: {
        login: (state, action) =>{
            console.log(action.payload.TipoUsuario.rotulo)
            return {
                nome: action.payload.nome,
                email: action.payload.email,
                logado : true,
                tipoUsuario : action.payload.TipoUsuario.rotulo

            }
        },
        logout:(state) => initialState
    }
})

export const { login , logout } = userSlice.actions
export default userSlice.reducer;