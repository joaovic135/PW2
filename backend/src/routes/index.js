import express from "express" 
import usuariosRouter from "./usuario"
import produtosRouter from "./produtos"
import EnderecoRouter from "./endereco"

import mainRouter from "./main"

const router = express.Router()


router.use(mainRouter);
router.use("/usuarios" , usuariosRouter);
router.use("/usuarios/" , EnderecoRouter);
router.use("/produtos" , produtosRouter);

export default router;