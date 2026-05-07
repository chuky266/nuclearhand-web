import { submitFormPayload, FORM_SUBMIT_ERROR } from './form-submit.js';

class Telecito {
  constructor() {
    if (document.querySelector('.telecito-widget')) return;
    this.isOpen = false;
    this.hasBeenClosed = sessionStorage.getItem('telecito_closed_session') === 'true';
    this.container = null;
    this.init();
  }

  init() {
    this.createDOM();
    this.bindEvents();
    
    // Auto-open after 800ms if never closed
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
            Hola, soy Telecito 👋 ¿Quieres que te ayude a encontrar la mejor opción?
          </div>
          <div class="telecito-options" id="telecitoOptions">
            <button class="telecito-option-btn" data-action="info">Quiero más información</button>
            <button class="telecito-option-btn" data-action="services">Ver servicios</button>
            <button class="telecito-option-btn" data-action="talk">Hablar con alguien</button>
            <button class="telecito-option-btn" data-action="lead">Dejar mis datos</button>
          </div>
        </div>
      </div>
      <button class="telecito-btn" id="telecitoBtn" aria-label="Abrir asistente">
        <!-- Chat icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        <!-- Close icon -->
        <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>
    `;
    
    document.body.appendChild(this.container);
  }

  bindEvents() {
    const btn = this.container.querySelector('#telecitoBtn');
    btn.addEventListener('click', () => this.togglePanel());

    const optionsContainer = this.container.querySelector('#telecitoOptions');
    optionsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.telecito-option-btn');
      if (!btn) return;
      
      const action = btn.dataset.action;
      const text = btn.textContent;
      
      this.addUserMessage(text);
      this.handleAction(action);
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

  addUserMessage(text) {
    const body = this.container.querySelector('#telecitoBody');
    const optionsContainer = this.container.querySelector('#telecitoOptions');
    if (optionsContainer) {
      optionsContainer.remove(); // Remove options after selection
    }

    const msg = document.createElement('div');
    msg.className = 'telecito-message user';
    msg.textContent = text;
    body.appendChild(msg);
    this.scrollToBottom();
  }

  addSystemMessage(text) {
    const body = this.container.querySelector('#telecitoBody');
    const msg = document.createElement('div');
    msg.className = 'telecito-message';
    msg.innerHTML = text;
    body.appendChild(msg);
    this.scrollToBottom();
  }

  scrollToBottom() {
    const body = this.container.querySelector('#telecitoBody');
    body.scrollTop = body.scrollHeight;
  }

  handleAction(action) {
    switch(action) {
      case 'info':
        this.addSystemMessage('Nuclear Hand ofrece tecnología neuromórfica y privacidad radical. Explora la <a href="tecnologia.html" style="color:var(--primary)">sección de tecnología</a> para más detalles.');
        this.showRestartOptions();
        break;
      case 'services':
        this.addSystemMessage('Nuestros productos insignia son Nuclear Vision X y NuclearBand X. Revisa el <a href="index.html#locoshop" style="color:var(--primary)">LocoShop</a>.');
        this.showRestartOptions();
        break;
      case 'talk':
        this.addSystemMessage('Estamos disponibles para soporte Alpha. Usa el formulario de contacto en la página de inicio o déjanos tus datos aquí mismo.');
        this.showRestartOptions();
        break;
      case 'lead':
        this.showLeadForm();
        break;
    }
  }

  showRestartOptions() {
    setTimeout(() => {
      const body = this.container.querySelector('#telecitoBody');
      const options = document.createElement('div');
      options.className = 'telecito-options';
      options.id = 'telecitoOptions';
      options.innerHTML = `
        <button class="telecito-option-btn" data-action="lead">Dejar mis datos</button>
      `;
      body.appendChild(options);
      this.scrollToBottom();
    }, 1000);
  }

  showLeadForm() {
    setTimeout(() => {
      this.addSystemMessage('Genial, ¿cómo te llamamos y a dónde te contactamos?');
      
      const body = this.container.querySelector('#telecitoBody');
      const formContainer = document.createElement('form');
      formContainer.className = 'telecito-form';
      formContainer.innerHTML = `
        <input type="text" name="name" class="telecito-input" placeholder="Tu nombre" aria-label="Tu nombre" required />
        <input type="text" name="email" class="telecito-input" placeholder="Email o WhatsApp" aria-label="Email o WhatsApp" required />
        <textarea name="message" class="telecito-input" placeholder="Mensaje (opcional)" aria-label="Mensaje opcional" rows="2"></textarea>
        <button type="submit" class="telecito-submit">Enviar Datos</button>
        <div class="telecito-privacy-note">Al enviar, aceptas ser contactado.</div>
      `;
      
      formContainer.addEventListener('submit', (e) => this.handleFormSubmit(e, formContainer));
      body.appendChild(formContainer);
      this.scrollToBottom();
    }, 500);
  }

  async handleFormSubmit(e, form) {
    e.preventDefault();
    const btn = form.querySelector('.telecito-submit');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      interestType: 'telecito-lead',
      sourcePage: window.location.pathname,
      submittedAt: new Date().toISOString()
    };

    try {
      await submitFormPayload(payload);
      form.remove();
      this.addSystemMessage('Perfecto, ya tengo tus datos. El equipo podrá contactarte pronto. 🚀');
    } catch (error) {
      console.warn('Telecito form submission error, using fallback:', error);
      // Fallback a localStorage si falla o no hay internet
      const leads = JSON.parse(localStorage.getItem('telecito_leads') || '[]');
      leads.push(payload);
      localStorage.setItem('telecito_leads', JSON.stringify(leads));
      
      form.remove();
      this.addSystemMessage('Perfecto, he guardado tus datos localmente por seguridad. Te contactaremos en breve. 🚀');
    }
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new Telecito());
} else {
  new Telecito();
}
