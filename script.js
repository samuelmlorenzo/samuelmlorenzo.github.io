const projects = [
  { name: "Dantzerti", url: "https://www.dantzerti.eus/es/inicio" },
  { name: "Kerkom 360", url: "https://www.kerkom360.com/es/inicio" },
  { name: "Everent", url: "https://www.everent.es/home" },
  { name: "Savvy Data Systems", url: "https://www.savvydatasystems.com/es/inicio" },
  { name: "Cycle Optimizer", url: "https://cycleoptimizer.com/pagina-principal" },
  { name: "Syslan", url: "https://www.syslan.es/inicio" },
  { name: "Atenda by Syslan", url: "https://atenda.syslan.es/inicio" },
  { name: "TPV Electroson", url: "https://samuelmlorenzo.github.io/electroson-tpv/" },
  /*{ name: "The Local Guide", url: "https://samuelmlorenzo.github.io/thelocalguide-landing/" },*/
];

function renderProjects() {
  const grid = document.getElementById('grid');

  projects.forEach(p => {
    const initials = p.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const hostname = new URL(p.url).hostname.replace('www.', '');

    const card = document.createElement('a');
    card.href = p.url;
    card.target = '_blank';
    card.rel = 'noopener';
    card.className = 'project-card w-25';

    card.innerHTML = `
      <div class="card-preview">
        <div class="card-preview-fallback">${initials}</div>
      </div>
      <div class="card-body">
        <p class="card-name">${p.name}</p>
        <p class="card-url">${hostname}</p>
      </div>
      <div class="card-arrow">
        <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7,7 17,7 17,17"/></svg>
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProjects);
