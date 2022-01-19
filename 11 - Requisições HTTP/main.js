var posts = [];
var elementoLista = document.querySelector("#infos");


function App()
{
    //fetch = requisitar informações 
    // .then = caso sucesso         .catch = caso erro
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then(resposta => resposta.json()) //transformando a resposta em JSON
    .then(json => {
        posts = json;

        console.log(posts)

        for(post of posts)
        {
            var elementoTitulo = document.createElement("ul");
            var title = document.createTextNode(post.titulo);
            
            var elementoSubtitulo = document.createElement("div");
            var subtitle = document.createTextNode(post.subtitulo);

            var elementoCategoria = document.createElement("div");
            var category = document.createTextNode(post.categoria);

            var elementoImagem = document.createElement("img");
            elementoImagem.src = post.capa;
            elementoImagem.style = "widht: 150px; height: 150px";
            
            elementoTitulo.appendChild(title);
            elementoSubtitulo.appendChild(subtitle);
            elementoCategoria.appendChild(document.createTextNode("Categoria: "))
            elementoCategoria.appendChild(category);

            elementoLista.appendChild(elementoTitulo);
            elementoLista.appendChild(elementoImagem);
            elementoLista.appendChild(elementoSubtitulo);
            //quebrando a linha
            elementoLista.appendChild(document.createElement("br"));
            elementoLista.appendChild(elementoCategoria);
            //quebrando a linha
            elementoLista.appendChild(document.createElement("br"));

        }
    })

}

App();