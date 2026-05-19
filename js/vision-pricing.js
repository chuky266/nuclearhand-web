import { fetchPrices, formatPrice } from './pricing.js';

async function initProductPricing() {
  const pricingCard = document.querySelector('[data-sku="NH-VX-001"]');
  const priceElement = pricingCard?.querySelector('.product-price');

  if (!pricingCard || !priceElement) {
    return;
  }

  const prices = await fetchPrices();
  const sku = pricingCard.getAttribute('data-sku').trim().toUpperCase();

  if (Object.prototype.hasOwnProperty.call(prices, sku)) {
    priceElement.textContent = formatPrice(prices[sku]);
  } else {
    console.warn(`[Pricing] SKU not found in CSV: ${sku}`);
  }
}

initProductPricing();
