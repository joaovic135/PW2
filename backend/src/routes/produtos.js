import express from  "express"
import produtoController from "../controllers/produtos"

const router = express.Router()


router.get("/",produtoController.index);
router.post("/",produtoController.create);
router.get("/:id",produtoController.read);
router.put("/:id",produtoController.update);
router.delete("/:id",produtoController.remove);


export default router;
