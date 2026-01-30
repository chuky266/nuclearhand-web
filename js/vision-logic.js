import { fetchPrices, formatPrice } from './pricing.js';

async function initPricing() {
    const prices = await fetchPrices();
    const priceElement = document.querySelector('.product-price');
    const skuElement = document.querySelector('[data-sku]');
    if (!skuElement) return;

    const sku = skuElement.getAttribute('data-sku');

    if (prices[sku]) {
        priceElement.textContent = formatPrice(prices[sku]);
    }

    // view_item event
    if (typeof gtag === 'function') {
        gtag('event', 'view_item', {
            currency: 'EUR',
            value: prices[sku] || 0,
            items: [{
                item_id: sku,
                item_name: 'Nuclear Vision X'
            }]
        });
        console.log('[GA4] Event Tracked: view_item', sku);
    }
}

document.addEventListener('DOMContentLoaded', initPricing);
