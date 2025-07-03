let areaCalc = document.getElementById('areaCalc');

function addCalculo (valor){
    if (valor === '+') {
        if (areaCalc.value === '' || areaCalc.value.endsWith('+')) {
            return
        }
    }
    areaCalc.value += valor;
}

function resultado () {
    if (areaCalc.value === "") return;
    let expressao = areaCalc.value;

    // quebra a expressão em partes separadas pelo '+'

    numeros = expressao.split('+');
    var resultado = 0;

    for (let i = 0; i < numeros.length; i++) {
        resultado += Number(numeros[i]);
    }
    
    areaCalc.value = resultado;
}

function limpar () {
    areaCalc.value = '';    
}