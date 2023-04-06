function media(){
    var nomeAluno, notaUm, notaDois, notaTres, mediaNotas;

    nomeAluno = prompt("Digite o nome do aluno: ");
    notaUm = prompt("Digite a primeira nota do aluno: ");
    notaDois = prompt("Digite a segunda nota do aluno: ");
    notaTres = prompt("Digite a terceira nota do aluno: ");

    mediaNotas = (parseFloat(notaUm) + parseFloat(notaDois) + parseFloat(notaTres)) / 3;
    
    return ("Media do aluno " + nomeAluno + ": " + mediaNotas.toFixed(2));
}

alert(media());