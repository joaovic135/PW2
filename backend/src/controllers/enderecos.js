import {Endereco,Usuario} from "../models";

const index = async(req,res)=>{
    const page = req.query.page ? parseInt(read.query.page) : 1;
    const size = req.query.size ? parseInt(req.query.size) : 10; 
    try{
        const endereco = await Endereco.findAll({
            limit: size, 
            offset: (page-1)*size   
        });
        res.json(endereco);
    }catch(error){
        res.status(500).json(error);
    }
}

const create = async(req,res) =>{
    const {id} = req.params;
    try{
        const usuario = await Usuario.findByPk(id);

        const endereco = await Endereco.create({
            ...req.body,
            usuarioId: id
        });
        res.json(endereco)
    }catch(error){
        res.status(500).json(error);
    }
}


const read = async(req,res)=>{
    const {id} = req.params;
    try{
        const endereco = await Endereco.findByPk(id);
        res.send(endereco);
    }catch(error){
        res.status(500).json(error);
    }
}

const update = async(req,res) =>{
    const {id} = req.params;
    try{
        await Endereco.update(req.body,{where: { id }})        
        res.send({message: 'Endereço atualizado'})
    }catch(error){
        res.status(500).json(error);
    } 
}

const remove = async(req, res)=>{
    const{id}= req.params;

    try{
        await Endereco.destroy({where:{ id }})
        res.send({message: 'Endereço deletado'})
    }catch(error){
        res.status(500).json(error);
    }
}

export default{index , create , read, update, remove}
