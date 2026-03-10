document.addEventListener("DOMContentLoaded", () => {

const elemento = document.getElementById("typing")

if(!elemento) return

const traducoes = {
    pt: {
        typing: ["_Aplicações", "_Interfaces", "_Soluções Web"]
    },
    en: {
        typing: ["_Applications", "_Interfaces", "_Web Solutions"]
    },
    es: {
        typing: ["_Aplicaciones", "_Interfaces", "_Soluciones Web"]
    }
}

let frases = traducoes.pt.typing
let fraseIndex = 0
let letraIndex = 0
let apagando = false
let typingTimeout

function digitar(){
    if(!frases || frases.length === 0) return

    const fraseAtual = frases[fraseIndex]

    if(!apagando){

        elemento.textContent = fraseAtual.substring(0, letraIndex + 1)
        letraIndex++

        if(letraIndex >= fraseAtual.length){
            apagando = true
            typingTimeout = setTimeout(digitar, 1200)
            return
        }

    }else{

        elemento.textContent = fraseAtual.substring(0, letraIndex - 1)
        letraIndex--

        if(letraIndex <= 0){

            apagando = false
            fraseIndex++

            if(fraseIndex >= frases.length){
                fraseIndex = 0
            }

        }

    }

    typingTimeout = setTimeout(digitar, apagando ? 50 : 100)
}

function trocarIdioma(idioma){

    clearTimeout(typingTimeout)

    frases = traducoes[idioma]?.typing || traducoes.pt.typing

    fraseIndex = 0
    letraIndex = 0
    apagando = false

    elemento.textContent = ""

    digitar()
}

window.trocarIdiomaTyping = trocarIdioma

// BOTÕES
const btnEnglish = document.querySelectorAll(".ingles")
const btnEspanol = document.querySelectorAll(".espanhol")
const btnPortugues = document.querySelector(".portugues")

btnEnglish.forEach(btn=>{
    btn.addEventListener("click",()=>trocarIdioma("en"))
})

btnEspanol.forEach(btn=>{
    btn.addEventListener("click",()=>trocarIdioma("es"))
})

if(btnPortugues){
    btnPortugues.addEventListener("click",()=>trocarIdioma("pt"))
}

// iniciar
digitar()

})