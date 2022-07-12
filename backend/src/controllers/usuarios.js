import { Usuario,TipoUsuario } from "../models";
import { genSalt , hash } from "bcryptjs";


const index = async(req,res)=>{
    const page = req.query.page ? parseInt(read.query.page) : 1;
    const size = req.query.size ? parseInt(req.query.size) : 10; 
    try{
        const usuarios = await Usuario.findAll({
            limit: size, 
            offset: (page-1)*size   
        });
        res.json(usuarios);
    }catch(error){
        res.status(500).json(error);
    }
}


const create = async(req,res)=> {
    try{
        const salt = await genSalt(parseInt(process.env.BCRYPTJS_ROUNDS))
        const senha = await hash(req.body.senha, salt);
        await Usuario.create({
            ...req.body,
            senha: senha
        });
        const usuarios = await Usuario.findOne({where: { 
            email: req.body.email 
        }})
        res.json(usuarios);

    }catch(error){
        res.status(500).json(error);
    }
}
const read = async(req,res)=> {
    const { id } = req.params;
    console.log(req.cookies['nome']);
    try{
        const usuario = await Usuario.findByPk(id,{
            include: TipoUsuario
        });
        res.json(usuario);
    }catch(error){
        res.status(500).json(error);
    }
}
const update = async(req,res)=> {
    const { id } = req.params;
    try{
        await Usuario.update(req.body,{where: { id }})
        const usuario = await Usuario.findByPk(id,);
        res.json(usuario);
    }catch(error){
        res.status(500).json(error);
    }
}
const remove = async(req,res)=> {
    const { id } = req.params;
    try{
        await Usuario.destroy({where:{ id }});
        res.json({msg: "Usuario removido"});
    }catch(error){
        res.status(500).json(error);
    }
}


export default{index , create , read, update, remove}