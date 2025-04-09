function ajustarMenu() {
    const x = document.getElementById('X');
    const sanduiche = document.getElementById('sanduiche');
    const menu = document.getElementById('vertical');
    const frase = document.getElementById('p');

    if (window.innerWidth > 990) {
        menu.style.display = 'block';
        sanduiche.style.display = 'none';
        frase.style.marginRight = '165px';
    } else {
        menu.style.display = 'none';
        sanduiche.style.display = 'block';
        frase.style.marginRight = '5px';
    }
}

function configurarEventos() {
    const x = document.getElementById('X');
    const sanduiche = document.getElementById('sanduiche');
    const menu = document.getElementById('vertical');
    const frase = document.getElementById('p');

    sanduiche.addEventListener('click', function () {
        menu.style.display = 'block';
        sanduiche.style.display = 'none';
        frase.style.marginRight = '165px';
    });

    x.addEventListener('click', function () {
        menu.style.display = 'none';
        sanduiche.style.display = 'block';
        frase.style.marginRight = '5px';
    });
}

window.addEventListener('resize', ajustarMenu);
window.addEventListener('DOMContentLoaded', () => {
    ajustarMenu();
    configurarEventos();
});

document.addEventListener('DOMContentLoaded', botoesMenu);
window.onload = botoesMenu;
function botoesMenu() {
    const Bhome = document.querySelectorAll( '.h')
    const Bprojetos = document.querySelectorAll( '.p')
    const BsobreMim = document.querySelectorAll( '.s')
    const Bajuda = document.querySelectorAll( '.a')

    const header = document.getElementById("cabeçalho")
    const h2projetos = document.getElementById("tituloP")
    const h2sobreMim = document.getElementById("tituloS")
    const h2ajuda = document.getElementById("tituloA")

    Bhome.forEach(botao => {
        botao.addEventListener('click', function(){
            header.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    
    Bprojetos.forEach(botoes => {
        botoes.addEventListener('click', function(){
            h2projetos.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    })

    BsobreMim.forEach(botoes => {
        botoes.addEventListener('click', function(){
            h2sobreMim.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    })

    Bajuda.forEach(botoes => {
        botoes.addEventListener('click', function(){
            h2ajuda.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    })

}

function menus() {
    const menuHorizontal = document.getElementById('horizontal');

    function rolagemMenu() {
        if (window.scrollY >= 593) {
            menuHorizontal.classList.add('show');
            menuHorizontal.style.display = 'flex'; 
        } else {
            menuHorizontal.classList.remove('show');
            menuHorizontal.style.display = 'none';
        }
    }

    window.addEventListener('scroll', rolagemMenu);
    rolagemMenu();
}
document.addEventListener('DOMContentLoaded', menus);
