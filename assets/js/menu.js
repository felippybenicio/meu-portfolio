function ajustarMenu() {
    const sanduiche = document.getElementById('sanduiche');
    const x = document.getElementById('X');
    const menu = document.getElementById('navVertical');

    if (window.innerWidth > 1220) {
        menu.classList.remove("hidden")
        sanduiche.classList.add('hidden')
        x.classList.add("hidden")
    } else {
        menu.classList.add('hidden')
        sanduiche.classList.remove("hidden")
        x.classList.remove('hidden')
    }
}

function configurarEventos() {
  const sanduiche = document.getElementById('sanduiche');
  const x = document.getElementById('X');
  const menuVertical = document.getElementById('navVertical');

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
    menuVertical.classList.remove('hidden')
    sanduiche.classList.add('hidden')
  }

  function fecharMenu() {
    menuVertical.classList.add('hidden')
    sanduiche.classList.remove('hidden')
  }

  // ===== LAYOUT =====
  function aplicarLayout() {
    if (window.innerWidth < 1220) {
      sanduiche.classList.remove('hidden')
      fecharMenu();
      document.body.classList.remove('scrolled');
    } else {
      menuVertical.classList.remove('hidden')
      sanduiche.classList.add('hidden')
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