import express from "express"

const router = express.Router();

router.get("/", (req, res) =>{
    res.send("Listagem de produto");
})
router.get("/:id", (req, res) =>{
    const { id } = req.params;
    res.send(`Informações sobre produto ${id}`);
})

export default router;
