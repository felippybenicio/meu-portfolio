window.idiomas = window.idiomas || {};

window.idiomas.en = {
  landingPage: {
    lp1: 'Psychology Clinic',
    lp2: 'Clothing Store',
    lp3: 'Barbershop'
  },

  sistemas: {
    s1: 'inventory Management'
  },

  codigo: '< CODE >'
};

window.idiomas.es = {
  landingPage: {
    lp1: 'Clínica de Psicología',
    lp2: 'Tienda de Ropa',
    lp3: 'Barbería'
  },

  sistemas: {
    s1: 'gestión de Inventario'
  },

  codigo: '< CÓDIGO >'
};

// 🔹 Mapeamento
const map = {
  piscicologia1: 'landingPage.lp1',
  lojaRoupas1: 'landingPage.lp2',
  barbearia1: 'landingPage.lp3',

  gestaoEstoque: 'sistemas.s1',

  codigo: 'codigo'
};

const mapClasses = {
  codigo: 'codigo'
};


// 🔹 Guarda o português original
const estadoOriginalIframe = {};

// 🔹 Salva texto original
function salvarEstadoOriginal() {
  Object.keys(map).forEach(id => {
    const el = document.getElementById(id);
    if (el) estadoOriginalIframe[id] = el.textContent;
  });
}

function salvarEstadoOriginalClasses() {
  Object.keys(mapClasses).forEach(className => {
    document.querySelectorAll(`.${className}`).forEach((el, index) => {
      const key = `${className}_${index}`;
      estadoOriginalIframe[key] = el.textContent;
    });
  });
}


// 🔹 Restaura português (HTML puro)
function restaurarPortuguesIframe() {
  Object.entries(estadoOriginalIframe).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

function restaurarPortuguesClasses() {
  Object.keys(mapClasses).forEach(className => {
    document.querySelectorAll(`.${className}`).forEach((el, index) => {
      const key = `${className}_${index}`;
      if (estadoOriginalIframe[key]) {
        el.textContent = estadoOriginalIframe[key];
      }
    });
  });
}


function getValor(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}


// 🔹 Aplica idioma
function aplicarIdiomaIframe(lang) {
  if (lang === 'pt' || !window.idiomas[lang]) {
    restaurarPortuguesIframe();
    restaurarPortuguesClasses();
    return;
  }

  const idiomaAtual = window.idiomas[lang];

  // IDs
  Object.entries(map).forEach(([id, path]) => {
    const el = document.getElementById(id);
    const valor = getValor(idiomaAtual, path);
    if (el && valor) el.textContent = valor;
  });

  // CLASSES
  aplicarIdiomaClasses(lang);
}


function aplicarIdiomaClasses(lang) {
  const idiomaAtual = window.idiomas[lang];
  if (!idiomaAtual) return;

  Object.entries(mapClasses).forEach(([className, path]) => {
    const valor = getValor(idiomaAtual, path);
    if (!valor) return;

    document.querySelectorAll(`.${className}`).forEach(el => {
      el.textContent = valor;
    });
  });
}



document.addEventListener('DOMContentLoaded', () => {
  salvarEstadoOriginal();
  salvarEstadoOriginalClasses();

  const idioma = localStorage.getItem('idioma') || 'pt';
  aplicarIdiomaIframe(idioma);
});


// 🔥 ATUALIZA INSTANTÂNEA (sem reload)
window.addEventListener('storage', (e) => {
  if (e.key === 'idioma') {
    aplicarIdiomaIframe(e.newValue || 'pt');
  }
});
