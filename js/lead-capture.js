export function initLeadCapture() {
  const form = document.getElementById('leadCaptureForm');
  if (!form) return;

  const btn = form.querySelector('button[type="submit"]');
  if (!btn) return;
  const originalBtnText = btn.innerHTML;

  // Contenedor de estado dinámico
  const statusContainer = document.createElement('div');
  statusContainer.className = 'form-status-message';
  form.appendChild(statusContainer);

  const hiddenTime = document.getElementById('submittedAtField');

  // --- CONFIGURACIÓN DE ENDPOINT ---
  // Endpoint definitivo para recolección de Leads:
  // Permitimos la inyección por variable de entorno/global, con fallback seguro
  const API_ENDPOINT = (window.NH_ENV && window.NH_ENV.WEBHOOK_URL) || 'https://nuclearhand.app.n8n.cloud/webhook/investor-intake';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!btn) return;

    // 1. Rellenar timestamp
    if (hiddenTime) hiddenTime.value = new Date().toISOString();

    // 2. UI: Transmisión iniciada
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> Transmitiendo...`;
    if (statusContainer) {
      statusContainer.className = 'form-status-message';
      statusContainer.style.cssText = '';
      statusContainer.innerHTML = '';
    }
    if (!statusContainer) {
      btn.disabled = false;
      btn.innerHTML = originalBtnText;
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    // Captura segura del origen o producto para distinguir leads en n8n
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('product')) {
        payload.targetProduct = urlParams.get('product');
    }
    if (document.referrer && !document.referrer.includes('investor-access')) {
        payload.referrerPage = document.referrer;
    }

    // Controller para timeout de prevención (15 segundos)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      // 3. Envío Real
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (!response.ok) throw new Error('Error en la transmisión');

      // 4. UI: Éxito
      statusContainer.className = 'form-status-message success';
      statusContainer.innerHTML = '⚡ TRANSMISIÓN ENCRIPTADA COMPLETADA.';
      form.reset();
    } catch (error) {
      // 5. UI: Error
      statusContainer.className = 'form-status-message error';
      if (error.name === 'AbortError') {
        statusContainer.innerHTML = '⚠️ TIEMPO DE ESPERA EXCEDIDO. REINTENTE.';
      } else {
        statusContainer.innerHTML = '⚠️ ERROR DE TRANSMISIÓN. REINTENTE.';
      }
    } finally {
      clearTimeout(timeoutId);
      btn.innerHTML = originalBtnText;
      btn.disabled = false;

      setTimeout(() => {
        statusContainer.className = 'form-status-message';
        statusContainer.style.cssText = '';
        statusContainer.innerHTML = '';
      }, 6000);
    }
  });

  // Listener para el botón superior "Solicitar credenciales alpha"
  const heroBtn = document.getElementById('btn-solicitar-alpha');
  if (heroBtn) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('alpha-request');
      if (target) {
        // Hacemos scroll nativo más explícito y bloqueante
        document.documentElement.style.scrollBehavior = 'smooth';
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        const firstInput = document.getElementById('lead_name');
        if (firstInput) {
          // Aseguramos el foco tras medio segundo para dar tiempo al scroll
          setTimeout(() => firstInput.focus(), 500);
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initLeadCapture);
