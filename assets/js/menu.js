function ajustarMenu() {
    const sanduiche = document.getElementById('sanduiche');
    const menu = document.getElementById('vertical');
    const frase = document.getElementById('p');

    if (window.innerWidth > 1220) {
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
  const sanduiche = document.getElementById('sanduiche');
  const x = document.getElementById('X');
  const menuVertical = document.getElementById('vertical');
  const frase = document.getElementById('p');

  let scrollAtivo = false;

  // ===== SCROLL (MENU HORIZONTAL) =====
  function controlarScroll() {
    if (window.innerWidth < 990) {
      document.body.classList.remove('scrolled');
      return;
    }

    if (scrollAtivo) return;
    scrollAtivo = true;

    requestAnimationFrame(() => {
      if (window.scrollY > 120) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
      scrollAtivo = false;
    });
  }

  // ===== MENU VERTICAL =====
  function abrirMenu() {
    menuVertical.style.display = 'block';
    sanduiche.style.display = 'none';
    frase.style.marginRight = '165px';
  }

  function fecharMenu() {
    menuVertical.style.display = 'none';
    sanduiche.style.display = 'block';
    frase.style.marginRight = '5px';
  }

  // ===== LAYOUT =====
  function aplicarLayout() {
    if (window.innerWidth < 1220) {
      sanduiche.style.display = 'block';
      fecharMenu();
      document.body.classList.remove('scrolled');
    } else {
      menuVertical.style.display = 'block';
      sanduiche.style.display = 'none';
      frase.style.marginRight = '';
      controlarScroll();
    }
  }

  // ===== EVENTOS =====
  sanduiche.addEventListener('click', (e) => {
    e.stopPropagation();
    abrirMenu();
  });

  x.addEventListener('click', (e) => {
    e.stopPropagation();
    fecharMenu();
  });

  document.addEventListener('click', (e) => {
    if (
      window.innerWidth < 990 &&
      !menuVertical.contains(e.target) &&
      !sanduiche.contains(e.target)
    ) {
      fecharMenu();
    }
  });

  aplicarLayout();
  window.addEventListener('resize', aplicarLayout);
  window.addEventListener('scroll', controlarScroll);
}

document.addEventListener('DOMContentLoaded', configurarEventos);







window.addEventListener('resize', ajustarMenu);
window.addEventListener('DOMContentLoaded', () => {
    ajustarMenu();
    configurarEventos();
});

// document.addEventListener('DOMContentLoaded', botoesMenu);
// window.onload = botoesMenu;
// function botoesMenu() {
//     const Bhome = document.querySelectorAll( '.h')
//     const Bprojetos = document.querySelectorAll( '.p')
//     const BsobreMim = document.querySelectorAll( '.s')
//     const Bajuda = document.querySelectorAll( '.a')

//     const header = document.getElementById("cabecalho")
//     const h3projetos = document.getElementById("tituloP")
//     const h3sobreMim = document.getElementById("tituloS")
//     const h3ajuda = document.getElementById("tituloA")

//     Bhome.forEach(botao => {
//         botao.addEventListener('click', function(){
//             header.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         });
//     });
    
    
//     Bprojetos.forEach(botoes => {
//         botoes.addEventListener('click', function(){
//             h3projetos.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         })
//     })

//     BsobreMim.forEach(botoes => {
//         botoes.addEventListener('click', function(){
//             h3sobreMim.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         })
//     })

//     Bajuda.forEach(botoes => {
//         botoes.addEventListener('click', function(){
//             h3ajuda.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         })
//     })

// }