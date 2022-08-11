import express  from "express"
import router from "./routes/index";
import cookieParser from "cookie-parser";
import session from "express-session";
import { v4 as uuidv4 } from "uuid"; 
import cors from 'cors';

require ("dotenv").config({path: `${__dirname}/../../.env`})
const app = express()

const PORT = process.env.PORT_BACK || 3333

app.use(cors({credentials:true , origin: "http://localhost:3366"}))
app.use(express.json())
app.use(cookieParser())

app.use(session({
    genid: () => uuidv4(),
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false
}));

app.use((req,res,next) => {
    if(!('nome' in req.cookies)) res.cookie('nome','Alinis Morissette');
    next();
})

app.use(router);


app.listen(PORT , () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
