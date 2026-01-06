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
    if (window.innerWidth < 990) {
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