import express from "express"

const router = express.Router();

router.get("/", (req, res) =>{
    res.send("Listagem de usuarios");
})
router.get("/:id", (req, res) =>{
    const { id } = req.params;
    res.send(`Informações sobre usuario ${id}`);
})

export default router;
