import {
  createFormPayload,
  FORM_SUBMIT_ERROR,
  scheduleStatusUpdate,
  setSubmitButtonState,
  submitFormPayload,
  updateStatusNode,
} from './form-submit.js';

const PRODUCT_OPTIONS = {
  VisionX: {
    code: 'VisionX',
    label: 'Nuclear Vision X',
  },
  BandX: {
    code: 'BandX',
    label: 'NuclearBand X',
  },
  Ecosystem: {
    code: 'Ecosystem',
    label: 'Ecosistema Nuclear Hand',
  },
};

const PRODUCT_OPTIONS_BY_LABEL = Object.fromEntries(
  Object.values(PRODUCT_OPTIONS).map((product) => [product.label, product]),
);

function getSafeProductSelection(searchParams) {
  const rawProduct = searchParams.get('product');
  return PRODUCT_OPTIONS[rawProduct] || PRODUCT_OPTIONS.Ecosystem;
}

function syncProductField(productField, product) {
  if (!productField) return;
  productField.value = product.label;
}

function getSelectedProduct(productField) {
  if (!productField) return PRODUCT_OPTIONS.Ecosystem;
  return PRODUCT_OPTIONS_BY_LABEL[productField.value] || PRODUCT_OPTIONS.Ecosystem;
}

export function initLeadCapture() {
  const form = document.getElementById('leadCaptureForm');
  if (!form) return;

  const btn = form.querySelector('button[type="submit"]');
  if (!btn) return;
  const originalBtnText = btn.innerHTML;

  const statusContainer = document.createElement('div');
  statusContainer.className = 'form-status-message';
  form.appendChild(statusContainer);

  const hiddenTime = document.getElementById('submittedAtField');
  const productField = document.getElementById('lead_product_interest');
  const urlParams = new URLSearchParams(window.location.search);
  const initialProduct = getSafeProductSelection(urlParams);

  syncProductField(productField, initialProduct);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!btn) return;

    if (hiddenTime) hiddenTime.value = new Date().toISOString();

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

    const selectedProduct = getSelectedProduct(productField);
    syncProductField(productField, selectedProduct);

    const payload = createFormPayload(form, {
      targetProduct: selectedProduct.code,
      targetProductLabel: selectedProduct.label,
    });

    if (document.referrer && !document.referrer.includes('investor-access')) {
      payload.referrerPage = document.referrer;
    }

    try {
      await submitFormPayload(payload);

      statusContainer.className = 'form-status-message success';
      statusContainer.innerHTML = 'âš¡ TRANSMISIÃ“N ENCRIPTADA COMPLETADA.';
      form.reset();
      syncProductField(productField, initialProduct);
    } catch (error) {
      statusContainer.className = 'form-status-message error';
      if (error.code === FORM_SUBMIT_ERROR.TIMEOUT) {
        statusContainer.innerHTML = 'âš ï¸ TIEMPO DE ESPERA EXCEDIDO. REINTENTE.';
      } else {
        statusContainer.innerHTML = 'âš ï¸ ERROR DE TRANSMISIÃ“N. REINTENTE.';
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

  const heroBtn = document.getElementById('btn-solicitar-alpha');
  if (heroBtn) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('alpha-request');
      if (target) {
        document.documentElement.style.scrollBehavior = 'smooth';
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        const firstInput = document.getElementById('lead_name');
        if (firstInput) {
          setTimeout(() => firstInput.focus(), 500);
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initLeadCapture);
