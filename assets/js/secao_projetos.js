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