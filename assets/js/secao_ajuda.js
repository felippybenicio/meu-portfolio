function escrolagem() {
    const Bajuda = document.querySelectorAll('.textos')
    const h3ajuda = document.getElementById('tituloA')

    Bajuda.forEach(botoes => {
            botoes.addEventListener('click', function(){
                h3ajuda.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        })
}
document.addEventListener('DOMContentLoaded', escrolagem)

window.addEventListener('resize', verificarTamanho)

const btRecrutador1 = document.getElementById('recrutador01')
const btRecrutador2 = document.getElementById('recrutador02')
const btFrelancer1 = document.getElementById('freelancer01')
const btFrelancer2 = document.getElementById('freelancer02')

const textorecrutar = document.getElementById('TextoRecrutador')
const textofrela = document.getElementById('textoFreelancer')

function verificarTamanho(){

    if (window.innerWidth >= 800){

        // verifica se algum texto está aberto
        if(textorecrutar.classList.contains('hidden') && textofrela.classList.contains('hidden')){

            btRecrutador1.classList.remove('hidden')
            btFrelancer1.classList.remove('hidden')

            btRecrutador2.classList.add('hidden')
            btFrelancer2.classList.add('hidden')

        }

    }

}
verificarTamanho()

function ajuda() {
    

    
    const fechar = document.querySelectorAll('.fecharTextos')

    btRecrutador1.addEventListener('click', function() {
        btRecrutador1.classList.add('hidden')
        btFrelancer1.classList.add('hidden')

        btRecrutador2.classList.remove('hidden')
        btFrelancer2.classList.remove('hidden')

        textorecrutar.classList.remove('hidden')

        btRecrutador2.classList.add('clicado')
        btFrelancer2.classList.remove('clicado')

        escrolagem()
    })

    btFrelancer1.addEventListener('click', function() {
        btRecrutador1.classList.add('hidden')
        btFrelancer1.classList.add('hidden')

        btRecrutador2.classList.remove('hidden')
        btFrelancer2.classList.remove('hidden')

        textofrela.classList.remove('hidden')

        btFrelancer2.classList.add('clicado')
        btRecrutador2.classList.remove('clicado')

        escrolagem()
    })

    btRecrutador2.addEventListener('click', function() {
        btRecrutador1.classList.add('hidden')
        btFrelancer1.classList.add('hidden')

        btRecrutador2.classList.remove('hidden')
        btFrelancer2.classList.remove('hidden')

        textorecrutar.classList.remove('hidden')
        textofrela.classList.add('hidden')
        btRecrutador2.classList.add('clicado')
        btFrelancer2.classList.remove('clicado')

        escrolagem()
    })

    btFrelancer2.addEventListener('click', function() {
        btRecrutador1.classList.add('hidden')
        btFrelancer1.classList.add('hidden')

        btRecrutador2.classList.remove('hidden')
        btFrelancer2.classList.remove('hidden')


        textorecrutar.classList.add('hidden')
        textofrela.classList.remove('hidden')
        btFrelancer2.classList.add('clicado')
        btRecrutador2.classList.remove('clicado')

        escrolagem()

    })

    fechar.forEach(botoes => {
        botoes.addEventListener('click', function () {
            textorecrutar.classList.add('hidden')
            textofrela.classList.add('hidden')
            
            btRecrutador1.classList.remove('hidden')
            btFrelancer1.classList.remove('hidden')

            btRecrutador2.classList.remove('clicado')
            btFrelancer2.classList.remove('clicado')

            if (window.matchMedia('(min-width: 800px)').matches) {
                btRecrutador1.classList.remove('hidden')
                btFrelancer1.classList.remove('hidden')

                btRecrutador2.classList.add('hidden')
                btFrelancer2.classList.add('hidden')
            }
        })
    })
}
ajuda()