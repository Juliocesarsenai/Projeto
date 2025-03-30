let missoes=[]

function AdicionarMissao() {


    // Recebe valor do input do usuário
    const inputMissoes = document.getElementById("inputMissoes")
    let missao = inputMissoes.value.trim()

    const mensagem=document.getElementById("mensagem")
    
    if (missao == ""){
        let mensagemDeErro="Digite uma tarefa para adiciona-la a sua lista"
        mensagem.textContent=mensagemDeErro
    }
    else{
        let mensagemSucesso = "Missão Adicionada com Sucesso"
        mensagem.textContent = mensagemSucesso
        missoes.push(missao)
        renderizarMissoes()
    }  
    inputMissoes.value = ""
}

function renderizarMissoes(){
    const listaMissoes = document.getElementById("listaMissoes")

    //for itens na lista
    //1. item inicial(iterador)
    //2. item final (condicao)
    //3. se vai de 1 em 1 elemento ou se pula

    listaMissoes.innerHTML=""
    
  
    for (let i=0;i < missoes.length;i++){
        let novaMissao = document.createElement("li")
        novaMissao.textContent = missoes[i]
        
        let botaoRemover= document.createElement("button")
        botaoRemover.className= "remover"
        botaoRemover.textContent= "Remover"
        botaoRemover.onclick=()=> removerMissao()
        
        let botaoEditar=document.createElement("button")
        botaoEditar.className="editar"
        botaoEditar.textContent="Editar"
        botaoEditar.onclick=()=>editarMissao(i)

        novaMissao.appendChild(botaoRemover)
        novaMissao.appendChild(botaoEditar)
        listaMissoes.appendChild(novaMissao)
        

    }
}

function removerMissao(i) {
    missoes.splice(i, 1)

}

function editarMissao(i){
    let missaoEditada = prompt("Edite a tarefa:")
    if (missaoEditada.trim !== ""){
        missoes[i] = missaoEditada
        renderizarMissoes();
    }
}

function limparLista(){
    missoes.length = 0
    renderizarMissoes()
    const mensagem= document.getElementById("mensagem")
    mensagem.textContent="Lista de Tarefas limpa com sucesso";
}
