//iniciando a lista
let listaProdutos = ["Computador", "Telefone", "Mouse", "Teclado"]
console.log(`Produtos: ${listaProdutos}`);

//exibindo quantidade de items na lista
console.log(`\nQuantidade de produtos: ${listaProdutos.length}`);

//retirando o produto Mouse da lista
console.log('\nProdutos: '+ listaProdutos.filter(item => item !== 'Mouse'));

//procurando por item no array
let procurarProduto = listaProdutos.find(item => item == "Computador");
if(procurarProduto) console.log("\nO produto está na lista");
else console.log("\nProduto não encontrado");

//removendo o segundo item da lista
listaProdutos.splice(1,1);
console.log(`\nProdutos: ${listaProdutos}`);

//=====
console.log("=======")
let listaNumeros = [1,3,5,7,0,9]

//ordenando do menor para o maior
console.log("\nLista: " + listaNumeros.sort());

//removendo o primeiro item da lista
console.log("\nNumero removido: " + listaNumeros.shift())
console.log("Lista: " + listaNumeros);

//invertendo a lista
console.log("\nLista: " + listaNumeros.reverse());

//=====
console.log("=======")
let dia, mes, ano;
let diaHoje = "20/07/2019"

//criando um array para armazenar cada palavra da string em uma posição
let separar = [];
//adicionando ao array as palavras
separar = diaHoje.split("/");

dia = separar[0];
mes = separar[1];
ano = separar[2];

console.log("Dia: " + dia)
console.log("Mês: " + mes)
console.log("Ano: " + ano)