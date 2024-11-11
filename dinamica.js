//mudar de idioma
const idioma = document.getElementById('idioma')
const aside = document.getElementById('traduzir')

aside.addEventListener('mouseout', sair)
aside.addEventListener('mouseenter', entrar)

function entrar() {
    idioma.style.display = 'flex'
    idioma.style.justifyContent = 'space-evenly'
    idioma.style.animation = '.5s'
}

function sair() {
    idioma.style.display = 'none'
}

//menu
    window.onscroll = function() {
    const botaoContainer = getElementById('vertical')
    console.log (window.scrollY)

    if (window.scrollY > 200) {
        botaoContainer.ClassList.add('horizontal')
        botaoContainer.style.position = ('fixed')
    } else {
        botaoContainer.ClassList.remove('horizontal')
    }
}


//textos
let texto1 = document.getElementById('TextoRecrutador')
let texto2 = document.getElementById('textoFreelancer')
const recrutadorOsDois = document.getElementById('recrutador01') && document.getElementById('recrutador02')
const freelancerOsDois = document.getElementById('freelancer01') && document.getElementById('freelancer02')

const recrutador01 = document.getElementById('recrutador01')
const freelancer01 = document.getElementById('freelancer01')

const recrutador02 = document.getElementById('recrutador02')
const freelancer02 = document.getElementById('freelancer02')



recrutadorOsDois.addEventListener('click', paraRecrutar)
freelancerOsDois.addEventListener('click', paraFreelancer)

function paraRecrutar() {
    texto1.style.display = 'block'
    texto2.style.display = 'none'

    recrutador01.style.display = 'none'
    freelancer01.style.display = 'none'

    recrutador02.style.display = 'block'
    freelancer02.style.display = 'block'
}
function paraFreelancer() {
    texto2.style.display = 'block'
    texto1.style.display = 'none'

    recrutador01.style.display = 'none'
    freelancer01.style.display = 'none'

    recrutador02.style.display = 'block'
    freelancer02.style.display = 'block'
}






