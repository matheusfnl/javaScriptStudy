var peso, altura, imc, resultado;


function calcularImc()
{
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso/(altura*altura);

    if(imc < 17)
    {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Resultado: " + imc.toFixed(2) + " (Muito abaixo do peso)";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false;
    }
    else if(imc < 18.49)
    {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Resultado: " + imc.toFixed(2) + " (Abaixo do peso)";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false;
    }
    else if(imc < 24.99)
    {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Resultado: " + imc.toFixed(2) + " (Peso normal)";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false;
    }
    else if(imc < 29.99)
    {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Resultado: " + imc.toFixed(2) + " (Acima do peso)";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false;
    }
    else
    {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Resultado: " + imc.toFixed(2) + " (Obesidade)";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";        
        return false;
    }
}