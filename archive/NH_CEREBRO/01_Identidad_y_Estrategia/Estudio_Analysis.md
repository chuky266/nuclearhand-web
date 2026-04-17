# Análisis de Carpeta "Studio"

**Fecha:** 2025-12-06
**Estado:** Análisis completado (Solo lectura)

## 1. Mapa de Contenido

```text
studio/
├── index.html          # [ALTO INTERÉS] Versión avanzada de la web. Contiene animaciones, fondo dinámico y mejor UI.
├── package.json        # [BAJO] Configuración simple para servidor local (lite-server).
├── package-lock.json   # [BAJO] Lockfile de dependencias.
├── node_modules/       # [BAJO] Dependencias de desarrollo.
└── images/             # [MEDIO] Assets gráficos específicos de esta versión.
```

## 2. Código Potencialmente Valioso

La carpeta `studio` contiene una versión de la web **muy superior** a la actual en la raíz.

### A. Fondo Dinámico (CSS + HTML)
*   **Qué es:** Un sistema de 3 capas (`.bg-grid`, `.bg-rays`, `.bg-particles`) con animaciones CSS (`@keyframes`).
*   **Valor:** Aporta esa estética "Nuclear" y futurista que busca la marca.
*   **Integración:** Copiar el bloque CSS "BACKGROUND LAYERS" y los 3 `div` correspondientes al inicio del `body`.

### B. Animaciones "Reveal" (JS + CSS)
*   **Qué es:** Un script `IntersectionObserver` que hace aparecer los elementos (`.reveal`) suavemente al hacer scroll.
*   **Valor:** Da sensación de fluidez y modernidad.
*   **Integración:** Copiar el script del final del body y la clase CSS `.reveal`.

### C. Formulario con Webhook (JS)
*   **Qué es:** Lógica JavaScript para enviar el formulario a un webhook (n8n/Zapier) sin recargar la página.
*   **Valor:** Funcionalidad real de captación de leads.
*   **Integración:** Reemplazar el formulario estático actual por este y configurar la URL del webhook.

### D. Galería de Imágenes
*   **Qué es:** Grid CSS para mostrar imágenes de inspiración.
*   **Valor:** Contenido visual que falta en la home actual.

## 3. Riesgos y Precauciones

### Riesgos de Integración Directa
*   **Rutas de Imágenes:** `studio/index.html` busca imágenes en `images/`. Si copiamos el código a la raíz, hay que asegurar que las imágenes existan en la carpeta `images` de la raíz.
*   **Conflictos CSS:** Si mezclamos este CSS con el `styles.css` que acabamos de crear, podría haber duplicidades. Lo ideal sería **reemplazar** o fusionar con cuidado, no añadir encima.
*   **Dependencias:** El `package.json` de studio usa `lite-server`. El de la raíz usa `vite`. No afecta al código frontend, pero es bueno saberlo.

### Enfoque Seguro
1.  **Rama/Carpeta de Prueba:** No machacar `index.html` directamente.
2.  **Fusión Incremental:** Traer primero el fondo (Background), probar. Luego las animaciones. Luego el formulario.

## 4. Conclusión
La carpeta `studio` **NO es basura**. Es, de hecho, el **candidato a ser la nueva versión oficial** de la web. Se recomienda planificar su promoción a la carpeta raíz.
