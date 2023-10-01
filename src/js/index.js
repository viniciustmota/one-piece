const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')
botoes.forEach((botao, indece) => {
    botao.addEventListener('click', () => {
        desselecionarFuncao()
        desselecionarPersonagem()

        botao.classList.add('selecionado')
        personagens[indece].classList.add('selecionado')

    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

function desselecionarFuncao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

