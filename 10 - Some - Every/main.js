//some
//verifica se existe pelo menos um item do que foi digitado
let numeros = [1,5,7,8,9,6,11,54,2,66,7];

let verificarNumero = numeros.some(item => item == 11);
console.log(verificarNumero);

//every
//verifica se todos os items atendem aos requisitos
let pessoa = [
    {nome: "Matheus", idade: 12},
    {nome: "Heitor", idade: 6},
    {nome: "Maria", idade: 54}
];

let verificarIdade = pessoa.every(pessoa => pessoa.idade > 10)
console.log(verificarIdade);