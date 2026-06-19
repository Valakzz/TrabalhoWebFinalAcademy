export class TraiRepository{

    constructor(database){
        this.database = database
    }


async salvarTreinos(cpf, exercicio, series, repeticoes){
    
    const sql = 'insert into treinos(cpf, exercicio, series, repeticoes) values($1, $2, $3, $4)'

    const result = await  this.database.query(sql, [cpf,exercicio,series,repeticoes])
        
    return result.rows
}


async  buscarTreinos(){
    const sql = 'select * from treinos'

    const result = await this.database.query(sql)

    return result.rows
}
}
