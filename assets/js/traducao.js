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
            } else {
                idiomasVertical.style.display = 'flex';
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


const $ = (id) => document.querySelector(id);
let estadoOriginal = {};
// Textos por idioma
const idiomas = {
    

    en: {
        frase: "I’m a full-stack<br>developer, bringing<br><span>performance, design, and functionality together in a single codebase!</span>",
        resumo: "Hello! I'm <strong>Felippy Benicio Joaquim Braga</strong>, a full-stack developer specializing in <strong>C, C++, C#, Java, Python, PHP, JavaScript, HTML e CSS</strong>. I can help turn your dreams into code!",

        menu: {
          H: "Home",
          P: "My Projects",
          S: "About Me",
          A: "How can I help you?",
          idi: "Lenguage",
          idiHori: "Lenguage",
          horiH: "Home",
          horiP: "My Projects",
          horiS: "About Me",
          horiA: "How can I help you?"
        },

        titulos: {
          P: "My Projects",
          S: "About Me",
          A: "How can I help you?"
        },

        btnSistemas: "<strong>Systems</strong>",

        destaques: "Highlights",
        sobreTexto: "<li>Early-career Software Developer</li><li>ADS — Systems Analysis and Development</li><li>Self-taught learning with continuous practice</li><li>Backend & Web Development</li><li>Algorithms and Data Structures</li><li>Languages: C, C++, C#, Java, Python, PHP, JavaScript</li><li>HTML, CSS & basic UI/UX knowledge</li><li>Advanced English | Basic Spanish</li><li><a href='https://github.com/felippybraga?tab=repositories' target='_blank'>GitHub with my practical learning and evolution in each technology</a></li>",

        maisDeMim: "A bit about me",
        mim: "<p>Hello! My name is <strong>Felippy Benicio Joaquim Braga</strong>, an early-career software developer passionate about technology — a journey that began in 2020, while I was still in high school.<br><br>Since then, I have been dedicated to self-directed learning through free online content and courses on platforms such as YouTube and Udemy. Along this path, I have developed skills in <strong>algorithms, C, C++, C#, Java, Python, PHP, JavaScript, databases, HTML, and CSS</strong>, as well as <strong>graphic design</strong> principles applied to user interface development, enabling me to build functional systems with clear structure, usability, and visual consistency.<br><br>I am focused on consolidating my career as a developer, with an emphasis on <strong>web and backend development</strong>, creating <strong>efficient, secure, and scalable solutions</strong>.<br><br>Currently, I am pursuing a degree in <strong>Systems Analysis and Development</strong>, deepening my knowledge of data structures and algorithms — a fundamental foundation for continuous technical growth.<br><br>I have an <strong>advanced level of English</strong> and I am learning <strong>Spanish</strong>, aiming to collaborate on international projects and exchange experiences with developers from around the world.<br><br>💻 Interested in exploring my projects and following my professional growth? Visit my GitHub and see how I am contributing to the future of technology.</p>",

        recrutador: "I am a recruiter for a company",
        freelancer: "I need help with my project",

        skills: "My skills",
        cv: "My resume/CV",

        textoRecrutador: "<i class='material-icons fecharTextos'>close</i>Hello, Recruiter! If you're looking for a motivated full-stack developer with a strong desire to grow, I could be an excellent addition to your team. I am a dedicated young professional with great enthusiasm for learning new technologies and receiving feedback. I believe in the power of collaboration and am always committed to adapting to challenges and contributing to the success of the team and the company.",

        textoFreelancer: "<i class='material-icons fecharTextos'>close</i>Looking for someone to bring your project to life? I can help! I’m a developer specializing in creating responsive and dynamic websites, with skills in both front-end and back-end development. My focus is on delivering customized and functional solutions that meet your needs and provide a great user experience. Shall we talk about how to turn your ideas into reality?",

        contato: "Find me on the following platforms",
        direitos: "© 2024 <strong>Felippy Benicio Joaquim Braga</strong>. All rights reserved."
    },

    es: {
        frase: "Soy desarrollador<br>full-stack, combinando <span>rendimiento, diseño y funcionalidad en un solo código!</span>",
        resumo: "¡Hola! Soy <strong>Felippy Benicio Joaquim Braga</strong>, desarrollador full-stack especializado en <strong>C, C++, C#, Java, Python, PHP, JavaScript, HTML e CSS</strong>. ¡Puedo ayudarte a convertir tus sueños en código!",

        menu: {
        H: "Inicio",
        P: "Mis Proyectos",
        S: "Acerca de Mí",
        A: "¿Como Puedo Ayudarte?",
        idi: "Linguagem",
        idiHori: "Linguagem",
        horiH: "Inicio",
        horiP: "Mis Proyectos",
        horiS: "Acerca de Mí",
        horiA: "¿Como Puedo Ayudarte?"
        },

        titulos: {
        P: "Mis Proyectos",
        S: "Acerca de Mí",
        A: "¿Como Puedo Ayudarte?"
        },

        btnSistemas: "<strong>Sistemas</strong>",

        destaques: "Destacados",
        sobreTexto: "<li>Desarrollador de software en inicio de carrera</li><li>ADS — Análisis y Desarrollo de Sistemas</li><li>Aprendizaje autodidacta y práctica continua</li><li>Backend y Desarrollo Web</li><li>Algoritmos y Estructuras de Datos</li><li>Lenguajes: C, C++, C#, Java, Python, PHP, JavaScript</li><li>HTML, CSS y nociones básicas de UI/UX</li><li>Inglés avanzado | Español básico</li><li><a href='https://github.com/felippybraga?tab=repositories' target='_blank'>GitHub con mi evolución práctica en cada tecnología</a></li>",

        maisDeMim: "Un poco más sobre mí",
        mim: "¡Hola! Mi nombre es <strong>Felippy Benicio Joaquim Braga</strong>, soy un desarrollador de software en inicio de carrera, apasionado por la tecnología — un camino que comenzó en 2020, cuando aún cursaba la educación secundaria.<br><br>Desde entonces, me he dedicado al aprendizaje autodidacta a través de contenidos gratuitos en línea y cursos en plataformas como YouTube y Udemy. A lo largo de esta trayectoria, he desarrollado habilidades en <strong>algoritmos, C, C++, C#, Java, Python, PHP, JavaScript, bases de datos, HTML y CSS</strong>, además de conocimientos en <strong>diseño gráfico</strong> aplicados al desarrollo de interfaces, lo que me permite crear sistemas funcionales con buena organización visual y usabilidad.<br><br>Mi objetivo es consolidar mi carrera como desarrollador, con enfoque en <strong>desarrollo web y backend</strong>, creando soluciones <strong>eficientes, seguras y escalables</strong>.<br><br>Actualmente, estudio <strong>Análisis y Desarrollo de Sistemas</strong>, profundizando mis conocimientos en estructuras de datos y algoritmos — una base esencial para el crecimiento técnico continuo.<br><br>Tengo un <strong>nivel avanzado de inglés</strong> y estoy aprendiendo <strong>español</strong>, con el objetivo de colaborar en proyectos internacionales y compartir experiencias con desarrolladores de todo el mundo.<br><br>💻 ¿Te interesa explorar mis proyectos y seguir mi crecimiento profesional? Visita mi GitHub y descubre cómo estoy contribuyendo al futuro de la tecnología.",

        recrutador: "Soy reclutador para una empresa",
        freelancer: "Necesito ayuda con mi proyecto",

        skills: "Mis habilidades",
        cv: "Currículum Vitae",

        textoRecrutador: "<i class='material-icons fecharTextos'>close</i>¡Hola, Reclutador! Si buscas un desarrollador full-stack motivado y con un gran deseo de crecer, podría ser una excelente elección para tu equipo. Soy un joven dedicado, con gran entusiasmo por aprender nuevas tecnologías y recibir retroalimentación. Creo en el poder de la colaboración y siempre estoy comprometido a adaptarme a los desafíos y contribuir al éxito del equipo y la empresa.",

        textoFreelancer: "<i class='material-icons fecharTextos'>close</i>¿Estás buscando a alguien que le dé vida a tu proyecto? ¡Puedo ayudarte! Soy un desarrollador especializado en la creación de sitios web responsivos y dinámicos, con habilidades tanto en front-end como en back-end. Mi enfoque es ofrecer soluciones personalizadas y funcionales que se adapten a tus necesidades y brinden una excelente experiencia de usuario.",

        contato: "Encuéntrame en las siguientes plataformas:",
        direitos: "© 2024 <strong>Felippy Benicio Joaquim Braga</strong>. Todos los derechos reservados."
    }
    };

    // Aplica idioma no DOM
    function aplicarIdioma(lang) {
    const t = idiomas[lang];
    if (!t) return;

    localStorage.setItem("idioma", lang);

    $('#frase').innerHTML = t.frase;
    $('#resumo').innerHTML = t.resumo;

    $('#H').textContent = t.menu.H;
    $('#P').textContent = t.menu.P;
    $('#S').textContent = t.menu.S;
    $('#A').textContent = t.menu.A;
    $('#idi').textContent = t.menu.idi;
    $('#idiHori').textContent = t.menu.idiHori;

    $('#horiH').textContent = t.menu.horiH;
    $('#horiP').textContent = t.menu.horiP;
    $('#horiS').textContent = t.menu.horiS;
    $('#horiA').textContent = t.menu.horiA;

    $('#tituloP').textContent = t.titulos.P;
    $('#tituloS').textContent = t.titulos.S;
    $('#tituloA').textContent = t.titulos.A;

    $('#btnSistemas').innerHTML = t.btnSistemas

    $('#destaques').textContent = t.destaques;
    $('#sobreTexto').innerHTML = t.sobreTexto;
    $('#maisDeMim').textContent = t.maisDeMim;
    $('#mim').innerHTML = t.mim;

    $('#recrutador01 > strong').textContent = t.recrutador;
    $('#recrutador02 > strong').textContent = t.recrutador;
    $('#freelancer01 > strong').textContent = t.freelancer;
    $('#freelancer02 > strong').textContent = t.freelancer;

    $('#skills').textContent = t.skills;
    $('#cv').textContent = t.cv;

    $('#TextoRecrutador').innerHTML = t.textoRecrutador;
    $('#textoFreelancer').innerHTML = t.textoFreelancer;

    $('#contato').textContent = t.contato;
    $('#direitos').innerHTML = t.direitos;
}


const idsTraduziveis = [
  'frase',
  'resumo',
  'H',
  'P',
  'S',
  'A',
  'tituloP',
  'tituloS',
  'tituloA',
  'destaques',
  'maisDeMim',
  'mim',
  'contato',
  'direitos'
];

function restaurarPortugues() {
  idsTraduziveis.forEach(id => {
    const el = document.getElementById(id);
    if (el && estadoOriginal[id]) {
      el.innerHTML = estadoOriginal[id];
    }
  });

  localStorage.removeItem("idioma");
}

function restaurarPortugues() {
  idsTraduziveis.forEach(id => {
    const el = document.getElementById(id);
    if (el && estadoOriginal[id]) {
      el.innerHTML = estadoOriginal[id];
    }
  });

  localStorage.removeItem("idioma");
}

document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Salva o português ORIGINAL
  idsTraduziveis.forEach(id => {
    const el = document.getElementById(id);
    if (el) estadoOriginal[id] = el.innerHTML;
  });

  // 2️⃣ Aplica idioma salvo (SE existir)
  const idiomaSalvo = localStorage.getItem("idioma");
  if (idiomaSalvo) {
    aplicarIdioma(idiomaSalvo);
  }

  // 3️⃣ Eventos
  document.querySelectorAll('.ingles')
    .forEach(btn => btn.addEventListener('click', () => aplicarIdioma('en')));

  document.querySelectorAll('.espanhol')
    .forEach(btn => btn.addEventListener('click', () => aplicarIdioma('es')));

  document.querySelectorAll('.portugues')
    .forEach(btn => btn.addEventListener('click', restaurarPortugues));
});

