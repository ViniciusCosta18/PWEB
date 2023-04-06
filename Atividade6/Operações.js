function operacoes()
{


    var numeroUm = prompt("Digite o primeiro numero: ");
    var numeroDois = prompt("Digite o segundo numero: ");

    return ("Soma dos dois: " + (parseFloat(numeroUm) + parseFloat(numeroDois))) + "\n" +
    ("Subtração do primeiro pelo segundo: " + (parseFloat(numeroUm) - parseFloat(numeroDois))) + "\n" +
    ("Produto dos dois: " + (parseFloat(numeroUm) * parseFloat(numeroDois))) + "\n" +
    ("Divisao do primeiro pelo segundo: " + (parseFloat(numeroUm) / parseFloat(numeroDois))) + "\n" +
    ("Resto da divisao do primeiro pelo segundo: " + (parseFloat(numeroUm) % parseFloat(numeroDois)));

}

alert(operacoes());