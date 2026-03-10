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

const textosOriginais = {};

document.querySelectorAll("[data-key]").forEach(el => {
    textosOriginais[el.dataset.key] = el.innerHTML;
});

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
        navIdi: "Lenguage",
        cardEn: "English",
        cardEs: "Espenish",
        cardPt: "Portuguese",

        //PROJETOS
        meusProjetosH3: "My Projects",
        h4Aplicaoes: "Applications",
        h4Interfaces: "Interfaces",
        pQrCode: "<span class='material-symbols-outlined' >qr_code_2</span>To access by QR Code",
        acessoProjeto: "<span class='material-symbols-outlined' >open_in_new</span>Access the project",
        codigo: " <span class='material-symbols-outlined'>code</span>View code",

        //sistema estoque
        h5Etoque: "Stock Control System<br><em>#Web Aplication</em>",
        infoProjetoEstoque: "Web applications developed for product management and inventory organization, with features for registering, editing, and controlling data stored in a database.",

        //LP barbearia elegance
        h5Elegance: "Elegance Barber Shop<br><em>#Landing Page</em>",
        infoProjetoElegance: "Responsive landing page developed to present a barbershop, with sections for services, institutional information, and contact. The project was created with a focus on layout organization, modern design, and adaptation to different screen sizes.",

        //SOBRE MIM
        sobreMimH3: "About Me",

        destaquesH4: "Highlights",

        item1: "ADS — Systems Analysis and Development",
        item2: "Early-career developer focused on software and full-stack development",
        item3: "Self-taught learning and continuous practice",
        item4: "Backend, Web, Algorithms and Data Structures",
        item5: "Python, PHP and JavaScript",
        item6: "HTML, CSS and basic UI/UX knowledge",
        item7: "Advanced English | Basic Spanish",
        item8: "<a href='https://github.com/felippybraga?tab=repositories' target='_blank'>GitHub documenting my programming progress</a>",

        maisDeMimH4: "A little More About Me",

        pMim: `Hello! I'm <strong>Felippy Benicio</strong>, a software developer in training and a student of <strong>Systems Analysis and Development</strong>.<br><br>
        
        I am interested in software development and the creation of practical applications, working with <strong>interfaces, backend logic, and database integration</strong>.<br><br>

        Since 2020, I have been studying programming through self-learning and specialized courses, developing projects using technologies such as <strong>PHP, JavaScript, Python, HTML, CSS, and MySQL</strong>.<br><br>
        
        I constantly seek to <strong>learn new tools and improve my skills</strong>, exploring different areas of programming and applying good software development practices.<br><br>
        
        I have <strong>intermediate-advanced English</strong>, which allows me to study technical documentation and follow content in the field.`,

        skillsH4: "My Hard Skills",

        CVH4: "Resume",
        pCV: "You can view or download my complete resume in PDF format",
        verCV: "View Resume",
        baixarCV: "Download PDF",

        //AJUDA
        comoAjudarH3: "How I Can Help You",
        btnRecrutador: "<strong>I'm a company recruiter</strong>",
        btnFrela: "<strong>I need a help with my project</strong>",
        textoRecrutador: "Hello, recruiter! If you are looking for a motivated full-stack developer eager to grow, I could be a great addition to your team. I am a dedicated developer, always open to learning new technologies, receiving feedback, and continuously improving my work. I value teamwork and believe that collaboration is essential to tackle challenges and build solutions that truly make a difference.",
        textoFrela: "Looking for someone to bring your project to life? I can help. I develop modern, responsive, and dynamic websites, taking care of both design and functionality. My goal is to create solutions that truly work for your business and provide an excellent experience for users. If you have an idea or project in mind, let's talk and make it a reality.",

        //FOOTER
        navFooterH3: "Find me on the following platforms",
        copyRight: "© 2026 <strong>Felippy Benicio Joaquim Braga</strong>. All rights reserved."
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
        navIdi: "idiomas",
        cardEn: "Inglés",
        cardEs: "Español",
        cardPt: "Portugués",

        //PROJETOS
        meusProjetosH3: "Mis Proyectos",
        h4Aplicaoes: "Aplicaciones",
        h4Interfaces: "Interfaces",
        pQrCode: "<span class='material-symbols-outlined' >qr_code_2</span>Accede por QR Code",
        acessoProjeto: "<span class='material-symbols-outlined' >open_in_new</span>Accede proyestos",
        codigo: " <span class='material-symbols-outlined'>code</span>Ver codigo",

        //sistema estoque
        h5Etoque: "Sistema de control de inventario<br><em>#Sistema Web</em>",
        infoProjetoEstoque: "Sistema web desarrollado para la gestión de productos y organización del inventario, con funcionalidades de registro, edición y control de datos almacenados en una base de datos.",

        //LP barbearia elegance
        h5Elegance: "Barbería Elegance<br><em>#Landing Page</em>",
        infoProjetoElegance: "Landing page responsiva desarrollada para la presentación de una barbería, con secciones de servicios, información institucional y contacto. El proyecto fue creado con enfoque en la organización del layout, diseño moderno y adaptación a diferentes tamaños de pantalla.",

        //SOBRE MIM
        sobreMimH3: "Sobre mí",

        destaquesH4: "Aspectos destacados",

        item1: "ADS — Análisis y Desarrollo de Sistemas",
        item2: "Desarrollador en inicio de carrera con enfoque en software y desarrollo full-stack",
        item3: "Aprendizaje autodidacta y práctica continua",
        item4: "Backend, Web, Algoritmos y Estructuras de Datos",
        item5: "Python, PHP y JavaScript",
        item6: "HTML, CSS y nociones de UI/UX",
        item7: "Inglés avanzado | Español básico",
        item8: "<a href='https://github.com/felippybraga?tab=repositories' target='_blank'>GitHub documentando mi evolución en programación</a>",

        maisDeMimH4: "Un poco más sobre mí",

        pMim: `¡Hola! Soy <strong>Felippy Benicio</strong>, desarrollador de software en formación y estudiante de <strong>Análisis y Desarrollo de Sistemas</strong>.<br><br>

        Tengo interés en el desarrollo de software y en la creación de aplicaciones prácticas, trabajando con <strong>interfaces, lógica de backend e integración con bases de datos</strong>.<br><br>
        
        Desde 2020 estudio programación de forma autodidacta y mediante cursos especializados, desarrollando proyectos que utilizan tecnologías como <strong>PHP, JavaScript, Python, HTML, CSS y MySQL</strong>.<br><br>
        
        Busco constantemente <strong>aprender nuevas herramientas y mejorar mis habilidades</strong>, explorando diferentes áreas de la programación y aplicando buenas prácticas en el desarrollo de software.<br><br>
        
        Poseo <strong>inglés intermedio-avanzado</strong>, lo que me permite estudiar documentación técnica y seguir contenidos del área.`,

        skillsH4: "Mis Habilidades",

        CVH4: "Currículum",
        pCV: "Puedes ver mi CV o descargar la versión completa en PDF.",
        verCV: "Ver CV",
        baixarCV: "Descargar PDF",

        //AJUDA
        comoAjudarH3: "Cómo puedo ayudarte",
        btnRecrutador: "<strong>Soy un reclutador de una empresa</strong>",
        btnFrela: "<strong>Necesito ayuda con mi proyecto</strong>",
        textoRecrutador: "¡Hola, reclutador! Si buscas un desarrollador full-stack motivado y con muchas ganas de crecer, puedo ser una gran adición a tu equipo. Soy un desarrollador dedicado, siempre abierto a aprender nuevas tecnologías, recibir retroalimentación y mejorar continuamente mi trabajo. Valoro el trabajo en equipo y creo que la colaboración es esencial para enfrentar desafíos y construir soluciones que realmente marquen la diferencia.",
        textoFrela: "¿Buscas a alguien para llevar tu proyecto a la realidad? Puedo ayudarte. Desarrollo sitios web modernos, responsivos y dinámicos, cuidando tanto del diseño como del funcionamiento del sitio. Mi objetivo es crear soluciones que realmente funcionen para tu negocio y ofrezcan una excelente experiencia para los usuarios. Si tienes una idea o proyecto en mente, hablemos y hagámoslo realidad.",

        //FOOTER
        navFooterH3: "Encuéntrame en las siguientes plataformas",
        copyRight: "© 2026 <strong>Felippy Benicio Joaquim Braga</strong>. Todos los derechos reservados.",
    }
}

const btnEnglish = document.querySelectorAll('.ingles')
const btnEspanol = document.querySelectorAll('.espanhol')
const btnPortugues = document.querySelector('.portugues')
function trocarIdioma(idioma){

    document.querySelectorAll("[data-key]").forEach(el => {

        const chave = el.dataset.key

        if(idioma !== "pt" && traducoes[idioma]?.[chave]){
            el.innerHTML = traducoes[idioma][chave]
        }else{
            el.innerHTML = textosOriginais[chave]
        }

    })
}

btnEnglish.forEach(btn => {
    btn.addEventListener('click', () => trocarIdioma('en'))
})

btnEspanol.forEach(btn => {
    btn.addEventListener('click', () => trocarIdioma('es'))
})

btnPortugues.addEventListener('click', () => trocarIdioma('pt'))

