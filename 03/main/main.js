//-----SPREAD
console.log("====SPREAD====");
function cadastroPessoa(info)
{
    let novosDados = {
        ...info,
        cargo: "Programador",
        codigo: "54AD32"
    }
    return novosDados;
}

console.log(cadastroPessoa({nome: "Fernando", sobrenome: "Garcia", anoContrato: 2019}))

//----REST  
console.log("====REST====");
function listaNumeros(...numeros)
{
    console.log(numeros);
}

listaNumeros(1,3,2,4,8,9);

//-----OPERAÇÕES DENTRO DE UM ARRAY
console.log("\n====OPERAÇÕES DENTRO DE UM ARRAY====");
function Cadastrar(usuarios, ...novosUsuarios) //rest
{
    Usuarios = [...usuarios, ...novosUsuarios]; //spread

    console.log(Usuarios);
}

let Usuarios = ["Matheus", "Lucas"];
let NovosUsuarios = Cadastrar(Usuarios, "Henrique", "Joao");
