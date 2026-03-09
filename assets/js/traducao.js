function botoesidioma() {
    const botaoIdiomaVerti = document.getElementById('idi')
    const botaoIdiHorizon = document.getElementById('idiHori')
    const idiomasVertical = document.getElementById('idioma')
    const idiomasHorizontal = document.getElementById('idiomaHori')

    botaoIdiomaVerti.addEventListener('mouseenter', function () {
        idiomasVertical.style.display = 'flex';
    });

    botaoIdiomaVerti.addEventListener('mouseout', function () {
        idiomasVertical.style.display = 'none';
    });

    botaoIdiomaVerti.addEventListener('click', function () {
        botaoIdiomaVerti.addEventListener('mouseout', function () {
            if (idiomasVertical.style.display === 'flex') {
                idiomasVertical.style.display = 'none';
                botaoIdiomaVerti.style.color = 'white'
            } else {
                idiomasVertical.style.display = 'flex';
                botaoIdiomaVerti.style.color = '#031630'
            }
        });
    });


    botaoIdiHorizon.addEventListener('mouseenter', function () {
        idiomasHorizontal.style.display = 'flex';
        idiomasHorizontal.style.transition = '1s'
    });

    botaoIdiHorizon.addEventListener('mouseout', function () {
        idiomasHorizontal.style.display = 'none';
    });

    botaoIdiHorizon.addEventListener('click', function () {
        botaoIdiHorizon.addEventListener('mouseout', function () {
            if (idiomasHorizontal.style.display === 'flex') {
                idiomasHorizontal.style.display = 'none';
            } else {
                idiomasHorizontal.style.display = 'flex';
            }
        });
    });

}
botoesidioma()


const traducoes = {
  en: {
    //HEADER
    headerH2: "Software Developer",
    impacto: "//Turning study and practice into continuous growth in programming.",
    resumo: "I bild <strong>applications</strong> and <strong>systems</strong> focused on data organization, automation, and database integration.",

    //NAV
    navHome: "<i class='material-icons'>home</i> Home",
    navProjetos: "<i class='material-icons'>description</i> Projects",
    navSobre: "<i class='material-icons'>face_6</i> About Me",
    navAjuda: "<i class='material-icons'>question_mark</i> How I Can Help You",

    //PROJETOS
    meusProjetosH3: "My Projects",
    h4Aplicaoes: "Applications",
    h4Interfaces: "Interfaces",
    pQrCode: "To access by QR Code",
    acessoProjeto: "Access the project",
    codigo: "View code",

    //sistema estoque
    h5Etoque: "Stock Control System<br><em>#Web Aplication</em>",
    infoProjetoEstoque: "Web applications developed for product management and inventory organization, with features for registering, editing, and controlling data stored in a database.",

    //LP barbearia elegance
    h5Elegance: "Elegance Barber Shop<br><em>#Landing Page</em>",
    infoProjetoElegance: "Responsive landing page developed to present a barbershop, with sections for services, institutional information, and contact. The project was created with a focus on layout organization, modern design, and adaptation to different screen sizes.",
  },

  es: {
    //HEADER
    headerH2: "Desarrollador de Software",
    impacto: "//Transformando estudio y práctica en evolución constante en la programación.",
    resumo: "Desarrollo <strong>aplicaciones</strong> y <strong>sistemas</strong> enfocados en organización de datos, automatización e integración con bases de datos.",

    //NAV
    navHome: "<i class='material-icons'>home</i> Home",
    navProjetos: "<i class='material-icons'>description</i> Proyectos",
    navSobre: "<i class='material-icons'>face_6</i> Sobre Mí",
    navAjuda: "<i class='material-icons'>question_mark</i> Comó Puedo Ayudarte",

    //PROJETOS
    meusProjetosH3: "Mis Proyectos",
    h4Aplicaoes: "Aplicaciones",
    h4Interfaces: "Interfaces",
    pQrCode: "Accede por QR Code",
    acessoProjeto: "Accede proyestos",
    codigo: "Ver codigo",

    //sistema estoque
    h5Etoque: "Sistema de control de inventario<br><em>#Sistema Web</em>",
    infoProjetoEstoque: "Sistema web desarrollado para la gestión de productos y organización del inventario, con funcionalidades de registro, edición y control de datos almacenados en una base de datos.",

    //LP barbearia elegance
    h5Elegance: "Barbería Elegance<br><em>#Landing Page</em>",
    infoProjetoElegance: "Landing page responsiva desarrollada para la presentación de una barbería, con secciones de servicios, información institucional y contacto. El proyecto fue creado con enfoque en la organización del layout, diseño moderno y adaptación a diferentes tamaños de pantalla."
  }
}

const btnEnglish = document.querySelectorAll('.ingles')
const btnEspanol = document.querySelectorAll('.espanhol')

function trocarIdioma(idioma) {
    

    document.querySelectorAll("[data-key]").forEach(el => {

        const chave = el.getAttribute("data-key")

        el.innerHTML = traducoes[idioma][chave]

    })
}

btnEnglish.forEach(btn => {
    btn.addEventListener('click', () => trocarIdioma('en'))
})

btnEspanol.forEach(btn => {
    btn.addEventListener('click', () => trocarIdioma('es'))
})