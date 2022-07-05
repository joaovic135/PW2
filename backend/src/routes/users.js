import express from "express"
import userController from "../controllers/user";

const router = express.Router();

router.get("/", userController.index);
router.post("/", userController.create);




export default router;
