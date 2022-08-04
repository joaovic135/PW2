import {Produto} from "../models";

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../public/uploads/')
    },
    filename: function (req, file, cb) {
        const mimeExtension={
            'image/jpeg' : '.jpeg',
            'image/jpg' : '.jpg',
            'image/png' : '.png',
        }
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
  
const uplodadProduto = multer({
    storage: storage,
    fileFilter : (req , file , cb) => {
        if (File.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/png'){
            cb(null , true);
        }else{
            cb(null,false);
            req.fileError = 'Formato de imagem errado';
        }
        
    }
});



const index = async(req,res)=>{
    const page = req.query.page ? parseInt(read.query.page): 1;
    const size = req.query.size ? parseInt(req.query.size) :10;
    try{
        const produtos = await Produto.findAll({
            limit: size,
            offset: (page-1)*size
        });
        res.json(produtos);
    }catch(error){
        res.status(500).json(error);
    }
}


const create = async ( req, res)=> {
    try{
        await Produto.create(req.body);
        const produtos = await Produto.findOne({where:{id : req.body.nome}})
        res.json(produtos);
    }catch(error){
        res.status(500).json(error);
    }
};

const read = async ( req, res)=> {
    const { id } = req.params;
    try{
        const produtos = await Produto.findByPk(id,);
        res.json(produtos);
    }catch(error){
        res.status(500).json(error);
    }
}

const update = async ( req ,res)=> {
    const { id } = req.params;
    try{
        await Produto.update(req.body,{where:{ id }})
        const produtos = await Produto.findByPk(id,);
        res.json(usuario);
    }catch(error){
        res.status(500).json(error);
    }
};
const remove = async (req , res)=> {
    const { id } = req.params;
    try{
        await Produto.destroy({where:{ id }});
        res.json({msg:"Produto removido"});
    }catch(error){
        res.status(500).json(error);
    }
};


export default { uplodadProduto, index , create , read , update , remove } 