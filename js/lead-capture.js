import {
  createFormPayload,
  FORM_SUBMIT_ERROR,
  scheduleStatusUpdate,
  setSubmitButtonState,
  submitFormPayload,
  updateStatusNode,
} from './form-submit.js';

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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!btn) return;

    // 1. Rellenar timestamp
    if (hiddenTime) hiddenTime.value = new Date().toISOString();

    // 2. UI: Transmisión iniciada
    setSubmitButtonState(btn, {
      disabled: true,
      html: `<span class="spinner"></span> Transmitiendo...`,
    });
    updateStatusNode(statusContainer, {
      className: 'form-status-message',
      styleCssText: '',
      html: '',
    });
    if (!statusContainer) {
      setSubmitButtonState(btn, {
        disabled: false,
        html: originalBtnText,
      });
      return;
    }

    const payload = createFormPayload(form);

    // Captura segura del origen o producto para distinguir leads en n8n
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('product')) {
      payload.targetProduct = urlParams.get('product');
    }
    if (document.referrer && !document.referrer.includes('investor-access')) {
      payload.referrerPage = document.referrer;
    }

    try {
      await submitFormPayload(payload);

      // 4. UI: Éxito
      statusContainer.className = 'form-status-message success';
      statusContainer.innerHTML = '⚡ TRANSMISIÓN ENCRIPTADA COMPLETADA.';
      form.reset();
    } catch (error) {
      // 5. UI: Error
      statusContainer.className = 'form-status-message error';
      if (error.code === FORM_SUBMIT_ERROR.TIMEOUT) {
        statusContainer.innerHTML = '⚠️ TIEMPO DE ESPERA EXCEDIDO. REINTENTE.';
      } else {
        statusContainer.innerHTML = '⚠️ ERROR DE TRANSMISIÓN. REINTENTE.';
      }
    } finally {
      setSubmitButtonState(btn, {
        disabled: false,
        html: originalBtnText,
      });
      scheduleStatusUpdate(statusContainer, {
        className: 'form-status-message',
        styleCssText: '',
        html: '',
      });
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
