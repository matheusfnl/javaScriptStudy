//https://api.github.com/repos/VALOR-DIGITADO

let div = document.querySelector("#repositorio");
let elementoLista = document.querySelector("#repositorio ul");

let repositorios = [];

buscarRepositorio = async() => {
    const input = document.getElementById("input")

    if(input.value === "") 
    {
        alert("Preencha os campos");
        return;
    }

    const existeRepositorio = repositorios.find(repo => repo.full_name === input.value)
    if(existeRepositorio)
    {
        alert("Este repositório já está adicionado")
        return;
    }

    const response = await fetch("https://api.github.com/repos/"+input.value)
    .then(res => res.json())
    .then(json => {
        repositorios.push(json);
        input.value = "";
        renderizarRepositorio()
    })

}

function renderizarRepositorio() {
    elementoLista.innerHTML = "";

    for(repo of repositorios)
    {
        let elementoRepos = document.createElement("li");
        var h3 = document.createElement("H3");
        elementoRepos.setAttribute("style", "text-decoration: none; list-style:none");

        let elementoAvatar = document.createElement("img");
        elementoAvatar.src = repo.owner.avatar_url;
        elementoAvatar.setAttribute("style", "lenght: 24px; height: 24px; border-radius: 12px;");

        let elementoLink = document.createElement("button");
        elementoLink.textContent = "Excluir"
        let posicao = repositorios.indexOf(repo);
        elementoLink.setAttribute('onclick', 'deletarRepositorio('+posicao+')')

        let nome = document.createTextNode(" " + repo.full_name + " ");

        /*estrutura
            <li style="text-decoration: none; list-style: none;">
                <h3>nome</h3>
            </li>       */

        h3.appendChild(elementoAvatar)
        h3.appendChild(nome);
        h3.appendChild(elementoLink);
        elementoRepos.appendChild(h3);
        elementoLista.appendChild(elementoRepos);
    }
}

function deletarRepositorio(posicao)
{
    repositorios.splice(posicao, 1);
    renderizarRepositorio();
}