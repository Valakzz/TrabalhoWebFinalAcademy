import express  from 'express'
import { TreinoController } from "./controller.js"
import cors from "cors"


const server = express()

server.use(express.json())
server.use(cors())
const treinoController = new TreinoController()

server.post("/treinos/add",treinoController.addtreinos)
server.get("/treinos/all", treinoController.treinosAll)


server.listen(3000, () =>{console.log("Tentando conexão com o banco de dados Rubi..."), console.log("Conexão estabelecidade com BDD Rubi ♦️")})