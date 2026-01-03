function traducao() {
    const es = document.querySelectorAll('.espanhol')
    const en = document.querySelectorAll('.ingles')
    const pt = document.querySelectorAll('.portugues')

    function ingles() {
        document.querySelector('#frase').textContent = "I’m a full-stack developer, bringing performance, design, and functionality together in a single codebase!"
    
        document.querySelector('#resumo').innerHTML = "Hello! I'm <strong>Felippy Benicio Joaquim Braga</strong>, a full-stack developer specializing in <strong>C, C++, C#, Java, Python PHP, JavaScript, HTML e CSS</strong>. I can help turn your dreams into code!"
    
        
    
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

        document.querySelector('#destaques').textContent = "Highlights"
        document.querySelector('#sobreTexto').innerHTML = "<li>Early-career Software Developer</li><li>ADS — Systems Analysis and Development</li><li>Self-taught learning with continuous practice</li><li>Backend & Web Development</li><li>Algorithms and Data Structures</li><li>Languages: C, C++, C#, Java, Python, PHP, JavaScript</li><li>HTML, CSS & basic UI/UX knowledge</li><li>Advanced English | Basic Spanish</li><li><a href='https://github.com/felippybraga?tab=repositories' target='_blank'>GitHub with my practical learning and evolution in each technology</a></li>"
    
        document.querySelector('#maisDeMim').textContent = "A bit about me"
        document.querySelector('#mim').innerHTML = "<p>Hello! My name is <strong>Felippy Benicio Joaquim Braga</strong>, an early-career software developer passionate about technology — a journey that began in 2020, while I was still in high school.<br><br>Since then, I have been dedicated to self-directed learning through free online content and courses on platforms such as YouTube and Udemy. Along this path, I have developed skills in <strong>algorithms, C, C++, C#, Java, Python, PHP, JavaScript, databases, HTML, and CSS</strong>, as well as <strong>graphic design</strong> principles applied to user interface development, enabling me to build functional systems with clear structure, usability, and visual consistency.<br><br>I am focused on consolidating my career as a developer, with an emphasis on <strong>web and backend development</strong>, creating <strong>efficient, secure, and scalable solutions</strong>.<br><br>Currently, I am pursuing a degree in <strong>Systems Analysis and Development</strong>, deepening my knowledge of data structures and algorithms — a fundamental foundation for continuous technical growth.<br><br>I have an <strong>advanced level of English</strong> and I am learning <strong>Spanish</strong>, aiming to collaborate on international projects and exchange experiences with developers from around the world.<br><br>💻 Interested in exploring my projects and following my professional growth? Visit my GitHub and see how I am contributing to the future of technology.</p>"

    
        document.querySelector('#recrutador01 > strong').textContent = "I am a recruiter for a company"
        document.querySelector('#freelancer01 > strong').textContent = "I need help with my project"
        document.querySelector('#recrutador02 > strong').textContent = "I am a recruiter for a company"
        document.querySelector('#freelancer02 > strong').textContent ="I need help with my project"
    
        document.querySelector('#skills').textContent = "My skills"
        document.querySelector('#cv').textContent = "My resume/CV"
    
    
        document.querySelector('#TextoRecrutador').innerHTML  = "<i class='material-icons fecharTextos'>close</i>Hello, Recruiter! If you're looking for a motivated full-stack developer with a strong desire to grow, I could be an excellent addition to your team. I am a dedicated young professional with great enthusiasm for learning new technologies and receiving feedback. I believe in the power of collaboration and am always committed to adapting to challenges and contributing to the success of the team and the company."
        document.querySelector('#textoFreelancer').innerHTML  = "<i class='material-icons fecharTextos'>close</i>Looking for someone to bring your project to life? I can help! I’m a developer specializing in creating responsive and dynamic websites, with skills in both front-end and back-end development. My focus is on delivering customized and functional solutions that meet your needs and provide a great user experience. Shall we talk about how to turn your ideas into reality?"
    
        document.querySelector('#contato').textContent = "Find me on the following platforms"
        document.querySelector('#direitos').innerHTML = "© 2024 <strong>Felippy Benicio Joaquim Braga</strong>. All rights reserved."
    } 
    

    function espanhol() {
        document.querySelector('#frase').textContent = "Soy desarrollador full-stack, combinando rendimiento, diseño y funcionalidad en un solo código."
    
        document.querySelector('#resumo').innerHTML = "¡Hola! Soy <strong>Felippy Benicio Joaquim Braga</strong>, desarrollador full-stack especializado en <strong>C, C++, C#, Java, Python PHP, JavaScript, HTML e CSS</strong>. ¡Puedo ayudarte a convertir tus sueños en código!"
    
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

        document.querySelector('#destaques').textContent = "Destacados"
        document.querySelector('#sobreTexto').innerHTML = "<li>Desarrollador de software en inicio de carrera</li><li>ADS — Análisis y Desarrollo de Sistemas</li><li>Aprendizaje autodidacta y práctica continua</li><li>Backend y Desarrollo Web</li><li>Algoritmos y Estructuras de Datos</li><li>Lenguajes: C, C++, C#, Java, Python, PHP, JavaScript</li><li>HTML, CSS y nociones básicas de UI/UX</li><li>Inglés avanzado | Español básico</li><li><a href='https://github.com/felippybraga?tab=repositories' target='_blank'>GitHub con mi evolución práctica en cada tecnología</a></li>"
    
        document.querySelector('#maisDeMim').textContent = "Un poco más sobre mí"
        document.querySelector('#mim').innerHTML = "¡Hola! Mi nombre es <strong>Felippy Benicio Joaquim Braga</strong>, soy un desarrollador de software en inicio de carrera, apasionado por la tecnología — un camino que comenzó en 2020, cuando aún cursaba la educación secundaria.<br><br>Desde entonces, me he dedicado al aprendizaje autodidacta a través de contenidos gratuitos en línea y cursos en plataformas como YouTube y Udemy. A lo largo de esta trayectoria, he desarrollado habilidades en <strong>algoritmos, C, C++, C#, Java, Python, PHP, JavaScript, bases de datos, HTML y CSS</strong>, además de conocimientos en <strong>diseño gráfico</strong> aplicados al desarrollo de interfaces, lo que me permite crear sistemas funcionales con buena organización visual y usabilidad.<br><br>Mi objetivo es consolidar mi carrera como desarrollador, con enfoque en <strong>desarrollo web y backend</strong>, creando soluciones <strong>eficientes, seguras y escalables</strong>.<br><br>Actualmente, estudio <strong>Análisis y Desarrollo de Sistemas</strong>, profundizando mis conocimientos en estructuras de datos y algoritmos — una base esencial para el crecimiento técnico continuo.<br><br>Tengo un <strong>nivel avanzado de inglés</strong> y estoy aprendiendo <strong>español</strong>, con el objetivo de colaborar en proyectos internacionales y compartir experiencias con desarrolladores de todo el mundo.<br><br>"
    
        document.querySelector('#recrutador01 > strong').textContent = "Soy reclutador para una empresa"
        document.querySelector('#freelancer01 > strong').textContent = "Necesito ayuda con mi proyecto"
        document.querySelector('#recrutador02 > strong').textContent = "Soy reclutador para una empresa"
        document.querySelector('#freelancer02 > strong').textContent = "Necesito ayuda con mi proyecto"
    
        document.querySelector('#skills').textContent = "Mis habilidades"
        document.querySelector('#cv').textContent = "Currículum Vitae" 
    
        document.querySelector('#TextoRecrutador').innerHTML  = "<i class='material-icons fecharTextos'>close</i>¡Hola, Reclutador! Si buscas un desarrollador full-stack motivado y con un gran deseo de crecer, podría ser una excelente elección para tu equipo. Soy un joven dedicado, con gran entusiasmo por aprender nuevas tecnologías y recibir retroalimentación. Creo en el poder de la colaboración y siempre estoy comprometido a adaptarme a los desafíos y contribuir al éxito del equipo y la empresa."
        document.querySelector('#textoFreelancer').innerHTML  = "<i class='material-icons fecharTextos'>close</i>¿Estás buscando a alguien que le dé vida a tu proyecto? ¡Puedo ayudarte! Soy un desarrollador especializado en la creación de sitios web responsivos y dinámicos, con habilidades tanto en front-end como en back-end. Mi enfoque es ofrecer soluciones personalizadas y funcionales que se adapten a tus necesidades y brinden una excelente experiencia de usuario. ¿Hablamos sobre cómo convertir tus ideas en realidad?"
    
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