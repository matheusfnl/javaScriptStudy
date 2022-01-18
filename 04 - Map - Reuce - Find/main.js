//MAP -> percorre todos os items da lista e retorna algo
console.log("=====MAP====")

const lista = [8,4,1,1,7,6]

const novaLista = lista.map(function(item, index)
{
    //primeiro parâmetro = de cada variavel da lista    ex: primeira execução = 8,  segunda execução = 4...
    //segundo parâmetro = posição da variável
    if(item % 2 == 0) return item + index;
    else return item * 2;
    
})
console.log(`Lista: ${lista}`);
console.log(`Lista Nova: ${novaLista}`);

//REDUCE
console.log("=====REDUCE====")

const soma = lista.reduce(function(total, proximo)
{
    //primeiro parâmetro = variavel com valor do primeiro item            ex: const lista = [8,7,2,4,5,6]
    //segundo parâmetro = próximo item da lista                           total = 8   proximo = 7
    return total + proximo;
    //retorna para o total (variavel do primeiro parâmetro)
});

console.log(soma);

//FIND
console.log("=====FIND====")
//procura um item na lista e o retorna
const ache = lista.find(function(item)
{
    //parâmetro = valor de cada variavel da lista    ex: primeira execução = 8,  segunda execução = 4...
    return item == 7
})
console.log(ache)