function adicionar(...numeros)
{

    let soma = numeros.reduce((total, proximo) => total + proximo);
        //      => após o parenteses atua como se estivesse escrevendo function antes dos parenteses
        //      function(total, proximo){}  ----> (total, proximo) => {}

        //      quando se possui apenas uma linha de cósigo dentro dos {}, é possivel retirar o return e colocar o código na frente
        /*
            ==VERSÃO ANTIGA==
                let soma = numeros.reduce((total, proximo) => {
                    return total + proximo;
                });
        */
    console.log(soma);
}

adicionar(1,5,77,8,9,4,2,3,4);
