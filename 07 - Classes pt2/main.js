class Pessoa
{
   constructor()
   {
        this.nome = "";
        this.sobrenome = "";
   }

   nomePessoa(nome)
   {
        this.nome = nome;
   }

   sobrenomePessoa(sobrenome)
   {
        this.sobrenome = sobrenome
   }

   exibirNome()
   {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
   }
}

let pessoa1 = new Pessoa();

pessoa1.nomePessoa("Matheus");
pessoa1.sobrenomePessoa("Ferreira");

pessoa1.exibirNome();

