import { fetchPrices, formatPrice } from './pricing.js';

function trackGAEvent(name, params) {
    if (typeof gtag === 'function') {
        gtag('event', name, params);
        console.log(`[GA4] Event Tracked: ${name}`, params);
    }
}

async function initPricing() {
    const prices = await fetchPrices();
    const priceElement = document.querySelector('.current-price');
    const skuElement = document.querySelector('[data-sku]');

    if (skuElement && priceElement) {
        const sku = skuElement.getAttribute('data-sku').trim().toUpperCase();
        if (prices[sku]) {
            priceElement.textContent = formatPrice(prices[sku]);
        }
    }
}

function initActionTracking() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const label = btn.textContent.trim();
            trackGAEvent('select_item', {
                item_name: label,
                location_id: 'product_page'
            });
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initPricing();
        initActionTracking();
    });
} else {
    initPricing();
    initActionTracking();
}
