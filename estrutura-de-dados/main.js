'use strict'

const users = [
    {
        nome: 'Ana Coelho',
        id: '01234567890',
        email: 'ana@gmail.com',
        celular: '11975855097',
        cidade: 'Osasco',
        image: './img/ana-coelho.jpg',
        status: false
    
},
{
        nome: 'Hugo Gomes',
        id: '01234567893',
        email: 'hugo@gmail.com',
        celular: '11975855555',
        cidade: 'Barueri',
        image: './img/hugo-gomes.jpg',
        status: true

},
{
    nome: 'Joana Pereira',
    id: '01234567892',
    email: 'joana@gmail.com',
    celular: '11975855544',
    cidade: 'Jandira',
    image: './img/joana-pereira.jpg',
    status: false

},
{
    nome: 'Mariana Silva',
    id: '01234567891',
    email: 'mariana@gmail.com',
    celular: '11975855533',
    cidade: 'Carapicuíba',
    image: './img/mariana-silva.jpg',
    status: true

},
{
    nome: 'Jose Chaves',
    id: '01234567899',
    email: 'jose@gmail.com',
    celular: '11975855522',
    cidade: 'Cotia',
    image: './img/jose-chaves.jpg',
    status: false

}
]

const botaoExibir = document.getElementById('exibir')

function criarCard (user) {
    const container = document.getElementById('data-container')
    const card = document.createElement('div')
    
    let status
    if (user.status) {
        status = ''
    }else{
        status = 'sombra'
    }
    card.className = `card ${status}`
    card.innerHTML = `
                <img src="${user.image}" alt="foto da ${user.nome}" class="card__photo">
                <h3 class="card__name">${user.nome}</h3>
                <p class="card__user-id">${user.id}</p>
    `


    container.appendChild(card)
}

function limparContainer () {
    const container = document.getElementById('data-container')
    container.textContent = ''
}


function exibir () {
    limparContainer()
    users.forEach(criarCard)
}

botaoExibir.addEventListener('click', exibir)



// users.forEach(criarCard)

// criarCard(user)

