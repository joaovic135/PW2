import {compare } from "bcryptjs";
import {Usuario} from "../models";

const login = async(req,res)=> {
    const  usuario = await Usuario.findOne({where: {req.body.email}})
    if (usuario){
        const ok = await compare(req.body.senha , usuario.senha);
        if(ok){
            req.session.uid = usuario.id;
            res.send({msg: "Usuario autenticado"});
        }
        else res.send({msg: "Email e/ou senha incorreta"});
    }

}
const logout = async(req,res)=> {
    req.session.destroy((err)=>{
        if (!err) res.sen({msg: "Usuario delogado com sucesso"});
    });
}


export default {login, logout}