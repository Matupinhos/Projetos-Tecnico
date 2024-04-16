function calcular() {
    var numero1 = parseInt(document.getElementById('num1').value);
    var numero2 = parseInt(document.getElementById('num2').value);
    var operacao = document.getElementById('escolha').value;
    var texto = document.querySelector(".resultado")
    var resultado;
    switch (operacao) {
        case 'escolha':
            alert("Opção inválida! Escolha outra opção.");
            break;
        case 'Adicao':
            resultado = numero1 + numero2;
            break;
        case 'Subtracao':
            resultado = numero1 - numero2;
            break;
        case 'Multiplicacao': 
            resultado = numero1 * numero2;
            break;
        case 'Divisao':
            resultado = numero1 / numero2;
            break;
    }
    texto.textContent = resultado;
}
