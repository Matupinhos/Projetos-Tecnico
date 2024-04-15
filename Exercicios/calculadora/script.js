function calcular() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var operacao = document.getElementById('escolha').value;
    var texto = document.querySelector(".resultado")
    var resultado;
    switch (operacao) {
        case 'escolhaOpercao':
            alert("Opção inválida! Escolha outra opção.");
            break;
        case 'Adicao':
            resultado = numero1 + numero2;
            console.log(resultado);
            break;
        case 'Subtracao':
            resultado = numero1 - numero2;
            console.log(resultado);
            break;
        case 'Multiplicacao': 
            resultado = numero1 * numero2;
            console.log(resultado);
            break;
        case 'Divisao':
            resultado = numero1 / numero2;
            console.log(resultado);
            break;
    }
    texto.textContent = resultado;
}
