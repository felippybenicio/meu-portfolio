window.idiomas = window.idiomas || {};

// ⚠️ NÃO criamos pt

window.idiomas.en = {
  landingPage: {
    lp1: 'Psychology Clinic',
    lp2: 'Clothing Store',
    lp3: 'Barbershop'
  }
};

window.idiomas.es = {
  landingPage: {
    lp1: 'Clínica de Psicología',
    lp2: 'Tienda de Ropa',
    lp3: 'Barbería'
  }
};

// 🔹 Mapeamento
const map = {
  piscicologia1: 'lp1',
  lojaRoupas1: 'lp2',
  barbearia1: 'lp3'
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

// 🔹 Restaura português (HTML puro)
function restaurarPortuguesIframe() {
  Object.entries(estadoOriginalIframe).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

// 🔹 Aplica idioma
function aplicarIdiomaIframe(lang) {
  if (lang === 'pt' || !window.idiomas[lang]) {
    restaurarPortuguesIframe();
    return;
  }

  const t = window.idiomas[lang].landingPage;

  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.textContent = t[key];
  });
}

// 🔹 Inicialização
document.addEventListener('DOMContentLoaded', () => {
  salvarEstadoOriginal();

  const idioma = localStorage.getItem('idioma') || 'pt';
  aplicarIdiomaIframe(idioma);
});

// 🔥 ATUALIZA INSTANTÂNEA (sem reload)
window.addEventListener('storage', (e) => {
  if (e.key === 'idioma') {
    aplicarIdiomaIframe(e.newValue || 'pt');
  }
});
