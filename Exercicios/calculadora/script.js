function sinal() {
    var operacao = document.getElementById('escolha').value;
    var texto = document.querySelector('.sinal');
    switch (operacao) {
        case 'Adicao':
            texto.innerHTML = '+';
            break
        case 'Subtracao':
            texto.innerHTML = '-';
            break
        case 'Multiplicacao':
            texto.innerHTML = '*';
            break
        case 'Divisao':
            texto.innerHTML = '/'; 
            break
    }
}
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
            if (numero2 === 0) {
                alert('Coloque outro número')
                break
            }
            resultado = numero1 / numero2;
            break;
    }
    texto.textContent = resultado;/*Mostra a variavél resultado no documento HTML*/ 
}
