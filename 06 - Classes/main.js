class listaTarefas {
    constructor()
    {
        this.tarefas = [];
    }

    addTarefa()
    {
        //pegando o que estiver escrito no input
        var text = document.getElementById("texto").value
        if(text != "")//caso o input não esteja vazio
        {
            this.tarefas.push(text); //adicionar no array
            alert(`Array = [${this.tarefas}]`); //exibir no console
            document.getElementById("texto").value = ""; //limpando o texto do input
        }
        //caso esteja vazio
        else alert("Preencha os campos");
    }
}

//criando o objeto
const tarefas = new listaTarefas();

//caso clique no botão
document.getElementById('novo').onclick = function()
{
    tarefas.addTarefa();
}

//para uma classe herdar outra, é necessário escrever "extends nomeDaClasseHerdada"
/*
    EXEMPLO

        class novaLista extends listaTarefas 
        {
            a classe "novaLista" herdará tudo que a classe "listaTarefas" possui
        }

*/