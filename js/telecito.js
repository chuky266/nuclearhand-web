class Telecito {
  constructor() {
    if (document.querySelector('.telecito-widget')) return;
    this.isOpen = false;
    this.hasBeenClosed = sessionStorage.getItem('telecito_closed_session') === 'true';
    this.container = null;
    this.contactEmail = 'info@nuclearhand.com';
    this.init();
  }

  init() {
    this.createDOM();
    this.bindEvents();

    if (!this.hasBeenClosed) {
      setTimeout(() => {
        if (!this.isOpen && !this.hasBeenClosed) {
          this.togglePanel();
        }
      }, 800);
    }
  }

  createDOM() {
    this.container = document.createElement('div');
    this.container.className = 'telecito-widget';

    this.container.innerHTML = `
      <div class="telecito-panel" id="telecitoPanel">
        <div class="telecito-header">
          <div class="telecito-avatar">T</div>
          <div class="telecito-title">Telecito</div>
          <div class="telecito-status"></div>
        </div>
        <div class="telecito-body" id="telecitoBody">
          <div class="telecito-message">
            Hola, soy Telecito. Puedo guiarte por el acceso Alpha de Nuclear Hand.
          </div>
          <div class="telecito-options" id="telecitoOptions">
            <button class="telecito-option-btn" data-action="info">Quiero más información</button>
            <button class="telecito-option-btn" data-action="services">Ver servicios</button>
            <button class="telecito-option-btn" data-action="talk">Hablar con alguien</button>
            <button class="telecito-option-btn" data-action="lead">Dejar mis datos</button>
          </div>
          <div class="telecito-content" id="telecitoContent"></div>
        </div>
      </div>
      <button class="telecito-btn" id="telecitoBtn" aria-label="Abrir asistente">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>
    `;

    document.body.appendChild(this.container);
  }

  bindEvents() {
    const btn = this.container.querySelector('#telecitoBtn');
    btn.addEventListener('click', () => this.togglePanel());

    this.container.addEventListener('click', (e) => {
      const optionBtn = e.target.closest('.telecito-option-btn');
      if (!optionBtn) return;

      this.renderAction(optionBtn.dataset.action);
    });

    this.container.addEventListener('submit', (e) => {
      if (!e.target.matches('.telecito-form')) return;
      this.handleFormSubmit(e, e.target);
    });
  }

  togglePanel() {
    this.isOpen = !this.isOpen;
    const panel = this.container.querySelector('#telecitoPanel');
    const btn = this.container.querySelector('#telecitoBtn');

    if (this.isOpen) {
      panel.classList.add('open');
      btn.classList.add('open');
    } else {
      panel.classList.remove('open');
      btn.classList.remove('open');
      sessionStorage.setItem('telecito_closed_session', 'true');
      this.hasBeenClosed = true;
    }
  }

  scrollToBottom() {
    const body = this.container.querySelector('#telecitoBody');
    body.scrollTop = body.scrollHeight;
  }

  buildMailtoUrl(payload) {
    const subject = 'Nueva solicitud Alpha - Nuclear Hand';
    const body = [
      'Nueva solicitud Alpha - Nuclear Hand',
      '',
      `Nombre: ${payload.name}`,
      `Email: ${payload.email}`,
      `Producto de interés: ${payload.productInterest}`,
      `Mensaje opcional: ${payload.message || 'No indicado'}`,
      `Fecha/hora de envío: ${payload.submittedAt}`,
      'Origen: Telecito / Nuclear Hand 5',
    ].join('\n');

    return `mailto:nuclearhand.info@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  renderAction(action) {
    const content = this.container.querySelector('#telecitoContent');
    if (!content) return;

    switch (action) {
      case 'info':
        content.innerHTML = `
          <article class="telecito-card">
            <span class="telecito-kicker">ALPHA ACCESS</span>
            <h3 class="telecito-card-title">Nuclear Hand Alpha</h3>
            <p class="telecito-card-copy">
              Nuclear Hand es una marca tecnológica enfocada en wearables inteligentes de nueva generación.
              Estamos preparando una línea inicial formada por gafas inteligentes, reloj inteligente y anillo
              inteligente, con estética futurista, uso práctico y acceso bajo invitación.
            </p>
            <a class="telecito-link-btn" href="index.html#locoshop">Ver productos Alpha</a>
          </article>
        `;
        break;
      case 'services':
        content.innerHTML = `
          <article class="telecito-card">
            <span class="telecito-kicker">SERVICIOS ALPHA</span>
            <div class="telecito-service-list">
              <div class="telecito-service-item">
                <h3>Gafas inteligentes</h3>
                <p>Tecnología wearable para asistencia, visión conectada y experiencia futurista.</p>
              </div>
              <div class="telecito-service-item">
                <h3>Reloj inteligente</h3>
                <p>Control, salud, notificaciones y presencia premium en muñeca.</p>
              </div>
              <div class="telecito-service-item">
                <h3>Anillo inteligente</h3>
                <p>Dispositivo compacto para funciones inteligentes, estilo y comodidad diaria.</p>
              </div>
            </div>
            <p class="telecito-note">Disponibilidad inicial bajo invitación.</p>
          </article>
        `;
        break;
      case 'talk':
        content.innerHTML = `
          <article class="telecito-card">
            <span class="telecito-kicker">CONTACTO DIRECTO</span>
            <h3 class="telecito-card-title">Contacto Nuclear Hand</h3>
            <p class="telecito-card-copy">
              Puedes solicitar información sobre el lanzamiento Alpha y el acceso por invitación.
            </p>
            <a class="telecito-link-btn" href="mailto:${this.contactEmail}?subject=Solicitud%20Nuclear%20Hand%20Alpha">
              Enviar mensaje
            </a>
          </article>
        `;
        break;
      case 'lead':
        content.innerHTML = `
          <form class="telecito-form telecito-card" novalidate>
            <span class="telecito-kicker">SOLICITUD ALPHA</span>
            <label class="telecito-label">
              Nombre
              <input type="text" name="name" class="telecito-input" placeholder="Tu nombre" required />
            </label>
            <label class="telecito-label">
              Email
              <input type="email" name="email" class="telecito-input" placeholder="tu@email.com" required />
            </label>
            <label class="telecito-label">
              Producto de interés
              <select name="productInterest" class="telecito-input" required>
                <option value="Gafas inteligentes">Gafas inteligentes</option>
                <option value="Reloj inteligente">Reloj inteligente</option>
                <option value="Anillo inteligente">Anillo inteligente</option>
                <option value="Todos">Todos</option>
              </select>
            </label>
            <label class="telecito-label">
              Mensaje opcional
              <textarea name="message" class="telecito-input" placeholder="Cuéntanos qué te interesa" rows="3"></textarea>
            </label>
            <button type="submit" class="telecito-submit">Solicitar invitación Alpha</button>
            <div class="telecito-form-feedback" aria-live="polite"></div>
          </form>
        `;
        break;
      default:
        content.innerHTML = '';
    }

    this.scrollToBottom();
  }

  handleFormSubmit(e, form) {
    e.preventDefault();
    const btn = form.querySelector('.telecito-submit');
    const feedback = form.querySelector('.telecito-form-feedback');
    const originalText = btn.textContent;
    btn.textContent = 'Registrando...';
    btn.disabled = true;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      productInterest: form.productInterest.value,
      message: form.message.value,
      interestType: 'telecito-alpha-lead',
      sourcePage: window.location.pathname,
      submittedAt: new Date().toISOString(),
    };

    const leads = JSON.parse(localStorage.getItem('telecito_leads') || '[]');
    leads.push(payload);
    localStorage.setItem('telecito_leads', JSON.stringify(leads));
    console.log('Telecito lead saved:', payload);

    const mailtoUrl = this.buildMailtoUrl(payload);

    if (feedback) {
      feedback.textContent = 'Gracias. Tu solicitud Alpha ha quedado registrada en este dispositivo.';
      feedback.classList.add('is-success');
    }

    let fallbackLink = form.querySelector('.telecito-mail-link');
    if (!fallbackLink) {
      fallbackLink = document.createElement('a');
      fallbackLink.className = 'telecito-link-btn telecito-mail-link';
      fallbackLink.textContent = 'Enviar solicitud por correo';
      fallbackLink.style.marginTop = '4px';
      form.appendChild(fallbackLink);
    }
    fallbackLink.href = mailtoUrl;

    window.location.href = mailtoUrl;

    form.reset();
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Telecito());
} else {
  new Telecito();
}
