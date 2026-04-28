import { NH_CONFIG } from './config.js';

export const FORM_SUBMIT_ERROR = {
  TIMEOUT: 'timeout',
  NETWORK: 'network',
};

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
      const error = new Error('Network error');
      error.code = FORM_SUBMIT_ERROR.NETWORK;
      error.response = response;
      throw error;
    }

    return response;
  } catch (error) {
    if (error && error.name === 'AbortError') {
      const timeoutError = new Error('Request timeout');
      timeoutError.code = FORM_SUBMIT_ERROR.TIMEOUT;
      timeoutError.cause = error;
      throw timeoutError;
    }

    if (error && error.code) {
      throw error;
    }

    const networkError = new Error('Network error');
    networkError.code = FORM_SUBMIT_ERROR.NETWORK;
    networkError.cause = error;
    throw networkError;
  } finally {
    clearTimeout(timeoutId);
  }
}

export function setSubmitButtonState(button, { disabled, html } = {}) {
  if (!button) return;

  if (typeof disabled === 'boolean') {
    button.disabled = disabled;
  }

  if (html !== undefined) {
    button.innerHTML = html;
  }
}

export function updateStatusNode(statusNode, {
  className,
  text,
  html,
  color,
  styleCssText,
} = {}) {
  if (!statusNode) return;

  if (className !== undefined) {
    statusNode.className = className;
  }

  if (styleCssText !== undefined) {
    statusNode.style.cssText = styleCssText;
  }

  if (color !== undefined) {
    statusNode.style.color = color;
  }

  if (html !== undefined) {
    statusNode.innerHTML = html;
    return;
  }

  if (text !== undefined) {
    statusNode.textContent = text;
  }
}

export function scheduleStatusUpdate(statusNode, update, delayMs = 6000) {
  return setTimeout(() => {
    updateStatusNode(statusNode, update);
  }, delayMs);
}
