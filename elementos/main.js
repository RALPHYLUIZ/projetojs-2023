'use strict'

const botaoSequencia = document.getElementById('botao-sequencia')
const botaoImpar = document.getElementById('botao-impar')
const botaoPar = document.getElementById('botao-par')
const botaoMultiplo = document.getElementById('botao-multiplo')

function gerarSequencia () {
    const quantidade = document.getElementById('quantidade')
    const resultado = document.getElementById('resultado')
    resultado.textContent = ' '
    for (let contador=1;contador<=quantidade.value;contador++){
        // resultado.textContent += " " + contador
        const novaspan = document.createElement('span')
        novaSpan.textContent = contador
        resultado.appendChild (novaSpan)
    }

}

function gerarNumeroImpares () {
    const quantidade = document.getElementById('quantidade')
    const resultadoImpar = document.getElementById('resultado-impar')
    
    resultadoImpar.textContent = ' '
    for (let contador=1;contador<=quantidade.value;contador += 2){
        // resultadoImpar.textContent += " " + contador
        const novaSpan = document.createElement('span')
        novaSpan.textContent = contador
        resultado.appendChild (novaSpan)

}
}
function gerarNumeroPar () {
    const quantidade = document.getElementById('quantidade')
    const resultadoPar = document.getElementById('resultado-par')
    resultadoPar.textContent = ' '
    for (let contador=1;contador<=quantidade.value;contador  += 4){
        resultadoPar.textContent += " " + contador

}
}

function gerarNumeroMultiplo() {
    const quantidade = document.getElementById('quantidade')
    const resultadoMultiplo = document.getElementById('resultado-multiplo')
    resultadoMultiplo.textContent = ' '
    for (let contador=1;contador<=quantidade.value;contador += 5){
        resultadoMultiplo.textContent += " " + contador

}
}


botaoSequencia.addEventListener('click' , gerarSequencia)
botaoImpar.addEventListener('click' , gerarNumeroImpares)
botaoPar.addEventListener('click' , gerarNumeroPar)
botaoMultiplo.addEventListener('click' , gerarNumeroMultiplo)

