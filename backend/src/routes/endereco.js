import express from "express"
import enderecoController from "../controllers/enderecos"


const router = express.Router()

router.get("/", enderecoController.index);
router.post("/:id/endereco", enderecoController.create);
router.get("/:usuarioId/endereco/:id", enderecoController.read);
router.put("/:usuarioId/endereco/:id", enderecoController.update);
router.delete("/:usuarioId/endereco/:id", enderecoController.remove);


export default router;