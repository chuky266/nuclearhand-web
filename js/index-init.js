import { fetchPrices, formatPrice } from './pricing.js';

// NH: GA4 Event Helpers
function trackGAEvent(name, params) {
    if (typeof gtag === 'function') {
        gtag('event', name, params);
        console.log(`[GA4] Event Tracked: ${name}`, params);
    }
}

async function initPricing() {
    console.log('--- NH Pricing Loader Initialized ---');
    const prices = await fetchPrices();

    document.querySelectorAll('[data-sku]').forEach(card => {
        const sku = card.getAttribute('data-sku').trim().toUpperCase();
        const priceElement = card.querySelector('.product-price');

        if (prices[sku]) {
            priceElement.textContent = formatPrice(prices[sku]);
            console.log(`[Pricing] Updated ${sku}: ${prices[sku]}€`);
        } else {
            console.warn(`[Pricing] SKU not found in CSV: ${sku}`);
        }
    });
}

function initContactForm() {
    const form = document.querySelector('.nh-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const status = form.querySelector('.form-status');
        const submitBtn = form.querySelector('.form-submit');
        const formData = new FormData(form);

        submitBtn.disabled = true;
        status.textContent = 'Enviando...';
        status.className = 'form-status';

        try {
            // Simulación de envío
            await new Promise(resolve => setTimeout(resolve, 1500));
            status.textContent = '¡Mensaje enviado con éxito! Nos contactaremos pronto.';
            status.classList.add('success');
            form.reset();

            trackGAEvent('generate_lead', {
                method: 'contact_form',
                location_id: 'footer'
            });
        } catch (err) {
            status.textContent = 'Error al enviar. Inténtalo de nuevo.';
            status.classList.add('error');
        } finally {
            submitBtn.disabled = false;
        }
    });
}

function initTracking() {
    document.querySelectorAll('a.btn, a[href^="nuclear-"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const label = link.textContent.trim() || link.getAttribute('aria-label');
            trackGAEvent('select_promo', {
                promotion_name: label,
                location_id: 'index_page'
            });
        });
    });
}

// Global initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initPricing();
        initContactForm();
        initTracking();
    });
} else {
    initPricing();
    initContactForm();
    initTracking();
}
