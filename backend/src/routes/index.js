import express from "express" 
import userRouter from "./users"
import productsRouter from "./products"
import usuariosRouter from "./usuarios"

const router = express.Router()

router.use("/users" , userRouter);
router.use("/products" , productsRouter);
router.use("/usuarios" , usuariosRouter);
export default router;