import express from "express"
import router from ".";
import mainController from "../controllers/main"

cont router = express.Router();

router.post("/login", mainController.login);
router.delete("/logout", mainController.logout);

export default router;