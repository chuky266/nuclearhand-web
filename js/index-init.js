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
        const payload = Object.fromEntries(formData.entries());
        payload.interestType = 'general_contact'; // Identificador para n8n
        payload.sourcePage = window.location.pathname;
        payload.submittedAt = new Date().toISOString();

        submitBtn.disabled = true;
        status.textContent = 'Transmitiendo...';
        status.className = 'form-status';

        const API_ENDPOINT = (window.NH_ENV && window.NH_ENV.WEBHOOK_URL) || 'https://nuclearhand.app.n8n.cloud/webhook/investor-intake';

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 12000);

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (!response.ok) throw new Error('Network error');

            status.textContent = '⚡ TRANSMISIÓN COMPLETADA.';
            status.style.color = '#00f2ff';
            form.reset();

            trackGAEvent('generate_lead', {
                method: 'contact_form',
                location_id: 'footer'
            });
        } catch (err) {
            status.textContent = '⚠️ ERROR DE TRANSMISIÓN. REINTENTE.';
            status.style.color = '#ff3366';
        } finally {
            submitBtn.disabled = false;
            setTimeout(() => { if(status) status.textContent = ''; }, 6000);
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
