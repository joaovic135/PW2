import express from "express"
import usuarioController from "../controllers/usuarios";

const router = express.Router()


router.get("/", usuarioController.index);
router.post("/", usuarioController.create);
router.get("/:id", usuarioController.read);
router.put("/:id", usuarioController.update);
router.delete("/:id", usuarioController.remove);


export default router;