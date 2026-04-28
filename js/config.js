export const NH_CONFIG = {
    // URL del webhook de n8n para captación de leads y contacto
    // En producción, puede ser reemplazado por variables de entorno si se expone globalmente,
    // pero aquí centralizamos el fallback para el entorno actual.
    WEBHOOK_URL: (window.NH_ENV && window.NH_ENV.WEBHOOK_URL) || 'https://nuclearhand.app.n8n.cloud/webhook/investor-intake',
    
    // Timeout para las peticiones en milisegundos
    FETCH_TIMEOUT_MS: 15000,
};
