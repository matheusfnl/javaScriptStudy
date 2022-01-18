function Cadastrar(usuarios, ...novosUsuarios) //rest
{
    Usuarios = [...usuarios, ...novosUsuarios]; //spread

    console.log(Usuarios);
}

let Usuarios = ["Matheus", "Lucas"];
let NovosUsuarios = Cadastrar(Usuarios, "Henrique", "Joao");
