const elemento = document.getElementById("typing")

const frases = [
    "Aplicações",
    "Interfaces",
    "Soluções Web"
]

let fraseIndex = 0
let letraIndex = 0
let apagando = false

function digitar(){

    const fraseAtual = frases[fraseIndex]

    if(!apagando){
        elemento.textContent = fraseAtual.substring(0, letraIndex + 1)
        letraIndex++

        if(letraIndex === fraseAtual.length){
            apagando = true
            setTimeout(digitar, 1200)
            return
        }

    }else{

        elemento.textContent = fraseAtual.substring(0, letraIndex - 1)
        letraIndex--

        if(letraIndex === 0){
            apagando = false
            fraseIndex++

            if(fraseIndex >= frases.length){
                fraseIndex = 0
            }
        }
    }

    setTimeout(digitar, apagando ? 50 : 100)
}

digitar()