function ajustarMenu() {
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

  function aplicarEventos() {
    if (window.innerWidth < 990) {
      // --- MODO MOBILE ---
      sanduiche.style.display = 'block';
      menu.style.display = 'none';
      frase.style.marginRight = '5px';

      sanduiche.onclick = () => {
        menu.style.display = 'block';
        sanduiche.style.display = 'none';
        frase.style.marginRight = '165px';
      };

      x.onclick = () => {
        menu.style.display = 'none';
        sanduiche.style.display = 'block';
        frase.style.marginRight = '5px';
      };

      // Fechar menu clicando fora dele
      document.addEventListener('click', function fecharAoClicarFora(e) {
        if (window.innerWidth < 990) {
          if (!menu.contains(e.target) && !sanduiche.contains(e.target) && !x.contains(e.target)) {
            menu.style.display = 'none';
            sanduiche.style.display = 'block';
            frase.style.marginRight = '5px';
          }
        }
      });

    } else {
      // --- MODO DESKTOP ---
      menu.style.display = 'block';
      sanduiche.style.display = 'none';
      frase.style.marginRight = '';
    }
  }

  aplicarEventos();
  window.addEventListener('resize', aplicarEventos);
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

    const header = document.getElementById("cabecalho")
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

function rolagemMenu() {
    const menuHorizontal = document.getElementById('horizontal');

    window.addEventListener('scroll', () => {
    if (window.scrollY <= 500) {
        menuHorizontal.style.display = 'none';
    } else {
        menuHorizontal.style.display = 'flex';
    }
    });
}
rolagemMenu()

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

function traducao() {
    const es = document.querySelectorAll('.espanhol')
    const en = document.querySelectorAll('.ingles')
    const pt = document.querySelectorAll('.portugues')

    function ingles() {
        document.querySelector('#frase').textContent = "I’m a full-stack developer, bringing performance, design, and functionality together in a single codebase!"
    
        document.querySelector('#resumo').innerHTML = "Hello! I'm <strong>Felippy Benicio Joaquim Braga</strong>, a full-stack developer specializing in <strong>PHP, JavaScript, HTML, and CSS</strong>. I can help turn your dreams into code!"
    
        
    
        document.querySelector('#H').textContent = "Home"
        document.querySelector('#P').textContent = "My Projects"
        document.querySelector('#S').textContent = "About Me"
        document.querySelector('#A').textContent = "How can I help you?"
        document.querySelector('#idi').textContent = "Lenguage"
        document.querySelector('#idiHori').textContent = "Lenguage"
        document.querySelector('#horiH').textContent = "Home"
        document.querySelector('#horiP').textContent = "My Projects"
        document.querySelector('#horiS').textContent = "About Me"
        document.querySelector('#horiA').textContent = "How can I help you?"
        document.querySelector('#tituloP').textContent = "My Projects"
        document.querySelector('#tituloS').textContent = "About Me"
        document.querySelector('#tituloA').textContent = "How can I help you?"
    
        document.querySelector('#mim').innerHTML = "<p>Hello! My name is <strong>Felippy Benicio Joaquim Braga</strong>, an early-career software developer passionate about technology — a journey that began in 2020, while I was still in high school.<br><br>Since then, I have been dedicated to self-directed learning through free online content and courses on platforms such as YouTube and Udemy. Along this path, I have developed skills in <strong>algorithms, C, C++, C#, Java, Python, PHP, JavaScript, databases, HTML, and CSS</strong>, as well as <strong>graphic design</strong> principles applied to user interface development, enabling me to build functional systems with clear structure, usability, and visual consistency.<br><br>I am focused on consolidating my career as a developer, with an emphasis on <strong>web and backend development</strong>, creating <strong>efficient, secure, and scalable solutions</strong>.<br><br>Currently, I am pursuing a degree in <strong>Systems Analysis and Development</strong>, deepening my knowledge of data structures and algorithms — a fundamental foundation for continuous technical growth.<br><br>I have an <strong>advanced level of English</strong> and I am learning <strong>Spanish</strong>, aiming to collaborate on international projects and exchange experiences with developers from around the world.<br><br>💻 Interested in exploring my projects and following my professional growth? Visit my GitHub and see how I am contributing to the future of technology.</p>"

    
        document.querySelector('#recrutador01').textContent = "I am a recruiter for a company"
        document.querySelector('#freelancer01').textContent = "I need help with my project"
        document.querySelector('#recrutador02').textContent = "I am a recruiter for a company"
        document.querySelector('#freelancer02').textContent ="I need help with my project"
    
        document.querySelector('#skills').textContent = "My skills"
        document.querySelector('#cv').textContent = "My resume/CV"
        document.querySelector('#formal').textContent = "Formal resume, no photo"
        document.querySelector('#informal').textContent = "Informal resume, with photo"
    
    
        document.querySelector('#TextoRecrutador').textContent  = "Hello, Recruiter! If you're looking for a motivated full-stack developer with a strong desire to grow, I could be an excellent addition to your team. I am a dedicated young professional with great enthusiasm for learning new technologies and receiving feedback. I believe in the power of collaboration and am always committed to adapting to challenges and contributing to the success of the team and the company."
        document.querySelector('#textoFreelancer').textContent  = "Looking for someone to bring your project to life? I can help! I’m a developer specializing in creating responsive and dynamic websites, with skills in both front-end and back-end development. My focus is on delivering customized and functional solutions that meet your needs and provide a great user experience. Shall we talk about how to turn your ideas into reality?"
    
        document.querySelector('#contato').textContent = "Find me on the following platforms"
        document.querySelector('#direitos').innerHTML = "© 2024 <strong>Felippy Benicio Joaquim Braga</strong>. All rights reserved."
    } 
    

    function espanhol() {
        document.querySelector('#frase').textContent = "Soy desarrollador full-stack, combinando rendimiento, diseño y funcionalidad en un solo código."
    
        document.querySelector('#resumo').innerHTML = "¡Hola! Soy <strong>Felippy Benicio Joaquim Braga</strong>, desarrollador full-stack especializado en PHP<strong>, JavaScript, HTML y CSS</strong>. ¡Puedo ayudarte a convertir tus sueños en código!"
    
        document.querySelector('#H').textContent = "Inicio"
        document.querySelector('#P').textContent = "Mis Proyectos"
        document.querySelector('#S').textContent = "Acerca de Mí"
        document.querySelector('#A').textContent = "¿Como Puedo Ayudarte?"
        document.querySelector('#idi').textContent = "Linguagem"
        document.querySelector('#idi').style.padding = "10px 20px"
        document.querySelector('#idiHori').textContent = "Linguagem"
        document.querySelector('#horiH').textContent = "Inicio"
        document.querySelector('#horiP').textContent = "Mis Proyectos"
        document.querySelector('#horiS').textContent = "Acerca de Mí"
        document.querySelector('#horiA').textContent = "¿Como Puedo Ayudarte?"
        document.querySelector('#tituloP').textContent = "Mis Proyectos"
        document.querySelector('#tituloS').textContent = "Acerca de Mí"
        document.querySelector('#tituloA').textContent = "¿Como Puedo Ayudarte?"
    
        document.querySelector('#mim').innerHTML = "¡Hola! Mi nombre es <strong>Felippy Benicio Joaquim Braga</strong>, soy un desarrollador de software en inicio de carrera, apasionado por la tecnología — un camino que comenzó en 2020, cuando aún cursaba la educación secundaria.<br><br>Desde entonces, me he dedicado al aprendizaje autodidacta a través de contenidos gratuitos en línea y cursos en plataformas como YouTube y Udemy. A lo largo de esta trayectoria, he desarrollado habilidades en <strong>algoritmos, C, C++, C#, Java, Python, PHP, JavaScript, bases de datos, HTML y CSS</strong>, además de conocimientos en <strong>diseño gráfico</strong> aplicados al desarrollo de interfaces, lo que me permite crear sistemas funcionales con buena organización visual y usabilidad.<br><br>Mi objetivo es consolidar mi carrera como desarrollador, con enfoque en <strong>desarrollo web y backend</strong>, creando soluciones <strong>eficientes, seguras y escalables</strong>.<br><br>Actualmente, estudio <strong>Análisis y Desarrollo de Sistemas</strong>, profundizando mis conocimientos en estructuras de datos y algoritmos — una base esencial para el crecimiento técnico continuo.<br><br>Tengo un <strong>nivel avanzado de inglés</strong> y estoy aprendiendo <strong>español</strong>, con el objetivo de colaborar en proyectos internacionales y compartir experiencias con desarrolladores de todo el mundo.<br><br>"
    
        document.querySelector('#recrutador01').textContent = "Soy reclutador para una empresa"
        document.querySelector('#freelancer01').textContent = "Necesito ayuda con mi proyecto"
        document.querySelector('#recrutador02').textContent = "Soy reclutador para una empresa"
        document.querySelector('#freelancer02').textContent = "Necesito ayuda con mi proyecto"
    
        document.querySelector('#skills').textContent = "Mis habilidades"
        document.querySelector('#cv').textContent = "Currículum Vitae"
        document.querySelector('#formal').textContent = "CV formal, sin foto"
        document.querySelector('#informal').textContent = "CV informal, con foto"
    
        document.querySelector('#TextoRecrutador').textContent  = "¡Hola, Reclutador! Si buscas un desarrollador full-stack motivado y con un gran deseo de crecer, podría ser una excelente elección para tu equipo. Soy un joven dedicado, con gran entusiasmo por aprender nuevas tecnologías y recibir retroalimentación. Creo en el poder de la colaboración y siempre estoy comprometido a adaptarme a los desafíos y contribuir al éxito del equipo y la empresa."
        document.querySelector('#textoFreelancer').textContent  = "¿Estás buscando a alguien que le dé vida a tu proyecto? ¡Puedo ayudarte! Soy un desarrollador especializado en la creación de sitios web responsivos y dinámicos, con habilidades tanto en front-end como en back-end. Mi enfoque es ofrecer soluciones personalizadas y funcionales que se adapten a tus necesidades y brinden una excelente experiencia de usuario. ¿Hablamos sobre cómo convertir tus ideas en realidad?"
    
        document.querySelector('#contato').textContent = "Encuéntrame en las siguientes plataformas:"
        document.querySelector('#direitos').innerHTML = "© 2024 <strong>Felippy Benicio Joaquim Braga</strong>. Todos los derechos reservados."
    }

    es.forEach(btn => {
        btn.addEventListener('click', espanhol)
    })

    en.forEach(btn => {
        btn.addEventListener('click', ingles)
    })

    pt.forEach(btn => {
        btn.addEventListener('click', () => location.reload())
    })
}
document.addEventListener("DOMContentLoaded", traducao)

function ajuda() {
    const btRecrutador1 = document.getElementById('recrutador01')
    const btRecrutador2 = document.getElementById('recrutador02')
    const btFrelancer1 = document.getElementById('freelancer01')
    const btFrelancer2 = document.getElementById('freelancer02')

    const textorecrutar = document.getElementById('TextoRecrutador')
    const textofrela = document.getElementById('textoFreelancer')

    const Bajuda = document.querySelectorAll('.textos')
    const h2ajuda = document.getElementById('tituloA')

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
                h2ajuda.scrollIntoView({
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
                h2ajuda.scrollIntoView({
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
                h2ajuda.scrollIntoView({
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
                h2ajuda.scrollIntoView({
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

function projetos() {
    const btnLandingPage = document.getElementById('btnLandingPage')
    const btnSites = document.getElementById('btnSites')
    const btnSistemas = document.getElementById('btnSistemas')

    const iframeLandingPage = document.getElementById('landingPage')
    const iframeSites = document.getElementById('sites')
    const iframeSistemas = document.getElementById('sistemas')

    btnLandingPage.classList.add('active');

    function resetBtns() {
        btnLandingPage.classList.remove('active');
        btnSites.classList.remove('active');
        btnSistemas.classList.remove('active');
    }

    // Função para esconder todos os iframes
    function resetIframes() {
        iframeLandingPage.style.display = 'none';
        iframeSites.style.display = 'none';
        iframeSistemas.style.display = 'none';
    }

    // Eventos de clique
    btnLandingPage.addEventListener('click', function() {
        resetBtns();
        resetIframes();

        btnLandingPage.classList.add('active');
        iframeLandingPage.style.display = 'block';
    });

    btnSites.addEventListener('click', function() {
        resetBtns();
        resetIframes();

        btnSites.classList.add('active');
        iframeSites.style.display = 'block';
    });

    btnSistemas.addEventListener('click', function() {
        resetBtns();
        resetIframes();

        btnSistemas.classList.add('active');
        iframeSistemas.style.display = 'block';
    });

}
projetos()