let caracteres = document.querySelector('.slider')
const elementCaracter = document.querySelector('#valor')
const buttonElement = document.querySelector('.button-cta')
let password = document.querySelector('#password')
const containerPassword = document.querySelector('.container-senha-gerada')
const tooltop = document.querySelector('.tooltip')

const texto = tooltop.textContent

console.log(tooltop)

let charset = "3$kLz8!pQW9hR#tV2uJb7D*eB5aF1mNcOqXl8&zYwP0sT@rUvHjCk9S+gA1dF"
let novaSenha = ""

elementCaracter.innerHTML = caracteres.value

slider.oninput = function() {
    elementCaracter.innerHTML = this.value
}

buttonElement.addEventListener("click", function() {
    tooltop.innerHTML = texto
    let pass = ""
    for (let i = 0, n = charset.length; i < caracteres.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
        //charAt -> Pega uma posição
        //floor -> Gera um inteiro
        //random -> Gera um diferente
    }
    
    containerPassword.classList.remove('hidden')
    password.innerHTML = pass
    novaSenha = pass
})

containerPassword.addEventListener("click", function() {
    navigator.clipboard.writeText(novaSenha)
    tooltop.innerHTML = 'Senha copiada com sucesso! 🔑'
})