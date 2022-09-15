export const ehColaborador = (req , res, next) =>{
    //if (req.session.tipoUsuario === 'colaborador') 
    next();
    //else res.status(401).json({msg: "Usuario não autorizado"})
}