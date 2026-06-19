

const links = document.querySelectorAll("#navLinks a")
const highlight = document.querySelector(".highlight")

''

let trainingCont = 1


function addTraining(){
    
    if(trainingCont < 1)
       trainingCont = 1
   
   
    
   const div =   document.createElement("div")
   div.className = 'newTraining'

   div.innerHTML = `
        <div class="treino-card">
             <h3 id="idtreino">Novo Treino #${trainingCont++}</h3>
            <label>Indentificador:</label>
           <input type="text" id="CPF" placeholder="CPF">

            <label>Exercício:</label>
            <input type="text" id="nomeEx" placeholder="Nome do exercício">
            
            <label>Séries:</label>
            <input type="number" id="seriesNumber" placeholder="Ex: 3">
            
            <label>Repetições:</label>
            <input type="number" id="repNumber" placeholder="Ex: 12">
            
            <button onclick="removeTraining(this)">🗑️ Remover Treino</button>

             <button onclick="salvarTreinos()">💾 Salvar Treino</button> 
        </div>
    `

     const conteiner = document.querySelector(".addTraining")

     conteiner.appendChild(div)
}

function removeTraining(input){

   const div = input.closest(".newTraining").remove()
   trainingCont -- 

   
}

async function salvarTreinos() {

  const cpf = document.getElementById('CPF').value

    if(!cpf)
        return alert('Digite um cpf')
    
   

const treinosCards = document.querySelectorAll('.treino-card')

const exercicios = []

for (const card of treinosCards) {

   const exercicio = card.querySelector("#nomeEx").value
const series = card.querySelector("#seriesNumber").value
const repeticoes = card.querySelector("#repNumber").value

    exercicios.push({
        exercicio,
        series,
        repeticoes
    });
}

    
       


     try {
         const response = await fetch("http://localhost:3000/treinos/add",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cpf: cpf,
                treino: exercicios
            })
         })

         const result = await response.json()
     } catch (error) {

         console.error(error);
        res.status(500).json({
         erro: error.message
       });
        
     }

        
}


async function mostrarTreinos() {
    
    const container = document.querySelector(".TrainingSaved")
    
    if (!container) {
        console.error("Container .TrainingSaved não encontrado!")
        return;
    }
    
    
    try {
        const response = await fetch("http://localhost:3000/treinos/all")
        const result = await response.json()
        
    
        const treinos = result.treino || result
        
        
        
        container.innerHTML = ""
        
       
        for(treino of treinos){
          container.innerHTML += `
                <div class="treino-salvo-card">
                    <h3> ${treino.exercicio}</h3>
                    <p> ${treino.series} séries x ${treino.repeticoes} repetições</p>
                    <p> CPF: ${treino.cpf}</p>
                    <p> ${new Date(treino.data_criacao).toLocaleDateString()}</p>
                </div>
            `
        }
        
    } catch(error) {
        console.error("Erro:", error);
        container.innerHTML = "<div class='erro'> Erro ao conectar com o servidor!</div>";
    }
}







