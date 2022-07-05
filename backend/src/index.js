import express  from "express"
import router from "./routes/index";
require ("dotenv").config()
const app = express()

const PORT = process.env.PORT_BACK || 3333

app.use(express.json())
app.use(router);


app.listen(PORT , () => {
    console.log(`Servior rodando na porta ${PORT}`)
});
