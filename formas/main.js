'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor () {
    forma1.classList.toggle('vermelho')
}

function mudarForma1 () {
    forma2.classList.toggle('circulo')
}

function mudarForma2 () {
    forma3.classList.toggle('retangulo')
}

function mudarBuraco () {
    forma4.classList.toggle('buraco')
}

function mudarCair () {
    forma5.classList.toggle('cair')
}

function mudarGirar () {
    forma6.classList.toggle('girar')
}

function mudarDegrade () {
    forma7.classList.toggle('degrade')
}

function mudarRedondo () {
    forma8.classList.toggle('redondo')
}

forma1.addEventListener('click' , mudarCor)
forma2.addEventListener('click' , mudarForma1)
forma3.addEventListener('click' , mudarForma2)
forma4.addEventListener('click' , mudarBuraco)
forma5.addEventListener('click' , mudarCair)
forma6.addEventListener('click' , mudarGirar)
forma7.addEventListener('click' , mudarDegrade)
forma8.addEventListener('click' , mudarRedondo)


