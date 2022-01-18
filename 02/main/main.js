//buscando dentro da Div "app" a UL
var elementoLista= document.querySelector("#app ul");
var elementoInput = document.querySelector("#app input");
var elementoBotao = document.querySelector("#app button");

var toDos = JSON.parse(localStorage.getItem("listaTodos")) || [];

function renderTodo()
{
    elementoLista.innerHTML = "";
    elementoInput.value = "";

    for(toDo of toDos)
    {
        var elementoToDo = document.createElement("li");
        var toDoText = document.createTextNode(toDo);

        var elementoLink = document.createElement("a");
        elementoLink.setAttribute("href", "#");

        var posicao = toDos.indexOf(toDo);

        elementoLink.setAttribute('onclick', 'deletarTodo('+posicao+')');

        var textoLink = document.createTextNode("Excluir");
        elementoLink.appendChild(textoLink);

        elementoToDo.appendChild(toDoText);
        elementoToDo.appendChild(elementoLink);
        elementoLista.appendChild(elementoToDo);


    }

}
renderTodo()

function adicionarTodo()
{
    if(elementoInput.value == '')
    {
        alert("Preencha os Campos");
        return false
    }
    else
    {
        var text = elementoInput.value;
        toDos.push(text);
        renderTodo();
        salvarDados()
    }
}

function deletarTodo(posicao)
{
    //remove "b" elementos a partir da posição "a" b = 1, a = 0
    toDos.splice(posicao,1);
    renderTodo();
    salvarDados()
}

function salvarDados()
{

    localStorage.setItem("listaTodos", JSON.stringify(toDos));

}