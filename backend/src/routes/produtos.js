import express from  "express"
import multer from "multer"
import produtoController from "../controllers/produtos"
import { ehColaborador } from "../utils/auth"

const router = express.Router()



router.get("/",produtoController.index);
router.post("/",ehColaborador, produtoController.create);
router.get("/:id", produtoController.read);
router.put("/:id", ehColaborador, produtoController.update);
router.delete("/:id", ehColaborador, produtoController.remove);


export default router;
