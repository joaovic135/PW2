import express from "express" 
import userRouter from "./users"
import productsRouter from "./products"
import usuariosRouter from "./usuarios"
import produtosRouter from "./produtos"
import mainRouter from "./main"

const router = express.Router()


router.use(mainRouter);
router.use("/users" , userRouter);
router.use("/products" , productsRouter);
router.use("/usuarios" , usuariosRouter);
router.use("/produtos" , produtosRouter);

export default router;