/**
 * Pricing Helper for Nuclear Hand
 * Fetches maestra_precios.csv, parses it, and returns a price map.
 */

export async function fetchPrices() {
  try {
    const response = await fetch('/prices.csv');
    const csvText = await response.text();
    const lines = csvText.split('\n');
    const priceMap = {};

    // Skip header (line 0)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const columns = line.split(';');
      if (columns.length < 11) continue;

      const sku = columns[0].trim().toUpperCase();
      let pvpStr = columns[10].trim(); // PVP is at index 10

      // Parse Spanish decimal format (1.234,56 -> 1234.56)
      // Remove thousands separator (dot) and replace decimal comma with dot
      pvpStr = pvpStr.replace(/\./g, '').replace(',', '.');
      const price = parseFloat(pvpStr);

      if (!isNaN(price)) {
        priceMap[sku] = price;
      }
    }
    return priceMap;
  } catch (error) {
    console.error('Error fetching prices:', error);
    return {};
  }
}

export function formatPrice(amount) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}
