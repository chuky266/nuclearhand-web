import { NH_CONFIG } from './config.js';

export function createFormPayload(form, extraFields = {}) {
  return {
    ...Object.fromEntries(new FormData(form).entries()),
    ...extraFields,
  };
}

export async function submitFormPayload(payload) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), NH_CONFIG.FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(NH_CONFIG.WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error('Network error');
    }

    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}
