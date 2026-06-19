
import { database } from "./database.js"
import { TraiRepository} from "./repository.js"

const TraiRep = new TraiRepository(database)


 export class TreinoController{

    async addtreinos(req, res){
        
      const { cpf, treino } = req.body

       for (const exercicio of treino) {
        await TraiRep.salvarTreinos(
        cpf,
        exercicio.exercicio,
        exercicio.series,
        exercicio.repeticoes
        );
}
    }

    async treinosAll(req,res){
        const treino =  await TraiRep.buscarTreinos()
        res.json({
            treino: treino
        })
    }

   
}

