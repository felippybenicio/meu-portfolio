function ajuda() {
    const btRecrutador1 = document.getElementById('recrutador01')
    const btRecrutador2 = document.getElementById('recrutador02')
    const btFrelancer1 = document.getElementById('freelancer01')
    const btFrelancer2 = document.getElementById('freelancer02')

    const textorecrutar = document.getElementById('TextoRecrutador')
    const textofrela = document.getElementById('textoFreelancer')

    const Bajuda = document.querySelectorAll('.textos')
    const h3ajuda = document.getElementById('tituloA')

    const fechar = document.querySelectorAll('.fecharTextos')

    btRecrutador1.addEventListener('click', function() {
        btRecrutador1.style.display = 'none'
        btFrelancer1.style.display = 'none'

        btRecrutador2.style.display = 'block'
        btFrelancer2.style.display = 'block'

        textorecrutar.style.display = 'block'

        btRecrutador2.classList.add('clicado')
        btFrelancer2.classList.remove('clicado')

        Bajuda.forEach(botoes => {
            botoes.addEventListener('click', function(){
                h3ajuda.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        })
    })

    btFrelancer1.addEventListener('click', function() {
        btRecrutador1.style.display = 'none'
        btFrelancer1.style.display = 'none'

        btRecrutador2.style.display = 'block'
        btFrelancer2.style.display = 'block'

        textofrela.style.display = 'block'

        btFrelancer2.classList.add('clicado')
        btRecrutador2.classList.remove('clicado')

        Bajuda.forEach(botoes => {
            botoes.addEventListener('click', function(){
                h3ajuda.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        })
    })

    btRecrutador2.addEventListener('click', function() {
        textorecrutar.style.display = 'block'
        textofrela.style.display = 'none'
        btRecrutador2.classList.add('clicado')
        btFrelancer2.classList.remove('clicado')

        Bajuda.forEach(botoes => {
            botoes.addEventListener('click', function(){
                h3ajuda.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        })
    })

    btFrelancer2.addEventListener('click', function() {
        textorecrutar.style.display = 'none'
        textofrela.style.display = 'block'
        btFrelancer2.classList.add('clicado')
        btRecrutador2.classList.remove('clicado')

        Bajuda.forEach(botoes => {
            botoes.addEventListener('click', function(){
                h3ajuda.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        })
    })

    fechar.forEach(botoes => {
        botoes.addEventListener('click', function () {
            textorecrutar.style.display = 'none';
            textofrela.style.display = 'none';
            btRecrutador2.classList.remove('clicado')
            btFrelancer2.classList.remove('clicado')

            if (window.matchMedia('(min-width: 990px)').matches) {
                btRecrutador1.style.display = 'block'
                btFrelancer1.style.display = 'block'

                btRecrutador2.style.display = 'none'
                btFrelancer2.style.display = 'none'
            }

        })
    })
}
ajuda()