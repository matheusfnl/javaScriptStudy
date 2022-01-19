//Includes
//verifica se o que foi digitado existe
let nomes = ["Matheus", "Fernanda", "Geraldo"];
if(nomes.includes("Matheus")) console.log("Encontrado!");
else console.log("Não encontrado!");

//endsWith
//verifica se termina com o que foi digita
console.log("=====")

let nome = "Cleiton"
console.log(nome.endsWith("n"))
console.log(nome.endsWith("N"))

//startsWith
//verifica se inicia com o que foi digita
console.log("=====")
console.log(nome.startsWith("cle"))
console.log(nome.startsWith("Cle"))