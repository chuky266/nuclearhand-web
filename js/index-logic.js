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

    // view_item_list event
    trackGAEvent('view_item_list', {
        item_list_id: 'locoshop_main',
        item_list_name: 'LocoShop Main Grid'
    });
}

// New helper for future backend integration
window.sendContact = async function (payload) {
    console.log('[NH] Payload ready for backend:', payload);
    // Future: fetch(WEBHOOK_URL, ...)
    return new Promise((resolve) => setTimeout(resolve, 1500));
};

// CONTACT FORM LOGIC
function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        status.textContent = '> Processing request...';
        status.className = 'form-status';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Basic validation check
        if (!data.name || !data.email || !data.message) {
            status.textContent = '> ERROR: Missing required parameters.';
            status.className = 'form-status error';
            return;
        }

        try {
            await window.sendContact(data);
            status.textContent = '> SUCCESS: Message transmitted to Terminal NH. Enviado ✓';
            status.className = 'form-status success';

            trackGAEvent('generate_lead', {
                event_category: 'Contact',
                event_label: 'Main Page Form'
            });

            form.reset();
        } catch (err) {
            status.textContent = '> ERROR: Transmission failed.';
            status.className = 'form-status error';
        }
    });
}

// select_promo & navigation tracking
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
