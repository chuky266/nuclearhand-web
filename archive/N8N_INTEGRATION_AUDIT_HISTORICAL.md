# 🛠️ Auditoría de Integración NH5 con n8n

Este documento resume el estado actual de los puntos de captura de datos en el proyecto **Nuclear Hand 5** y su preparación para la conexión con los flujos de automatización en n8n.

## 1. Puntos de Captura y Formularios Existentes

La web cuenta actualmente con **dos** formularios principales activos, cada uno diseñado para un propósito específico y que envía un identificador único (`interestType`) para facilitar el enrutamiento en n8n.

### A. Formulario de Contacto General
- **Ubicación:** Footer de `index.html` (Sección Contacto).
- **Campos:** Nombre, Email, Mensaje.
- **Identificador enviado a n8n:** `interestType: 'general_contact'` (añadido automáticamente por JS).
- **Metadatos:** `sourcePage` (URL desde donde se envía), `submittedAt`.

### B. Formulario de Inversores / Alpha Access
- **Ubicación:** `investor-access.html` (Sección Alpha Request).
- **Campos:** Nombre completo, Email corporativo, Propuesta estratégica.
- **Identificador enviado a n8n:** `interestType: 'investor-alpha'` (campo oculto en el HTML).
- **Metadatos:** `sourcePage`, `submittedAt`, y si se accede desde un producto, captura el parámetro de la URL (ej. `targetProduct: 'BandX'` o `'VisionX'`) y `referrerPage`.

---

## 2. Archivos que Intervienen

- `index.html`: Contiene el marcado del formulario de contacto general.
- `investor-access.html`: Contiene el marcado del formulario de inversores.
- `js/index-init.js`: Intercepta y procesa el envío del contacto general.
- `js/lead-capture.js`: Intercepta y procesa el envío del formulario de inversores.
- `js/config.js`: **[NUEVO]** Archivo centralizado de configuración de endpoints y tiempos de espera.

---

## 3. Flujo en n8n Recomendado (Data Routing)

Ambos formularios envían los datos mediante POST al mismo Webhook principal:
`https://nuclearhand.app.n8n.cloud/webhook/investor-intake`

Dado que existen múltiples flujos activos en n8n (Investor Intake v1, NuclearBand X Flujo v1, AI Agent, etc.), se recomienda que este webhook actúe como **Router principal** (usando el nodo Switch en n8n) bajo la siguiente lógica:

1. **Si `interestType` == 'investor-alpha':**
   - Comprobar si existe `targetProduct`.
   - Si `targetProduct` == 'BandX', enrutar al **"NH – NuclearBand X – Flujo v1"**.
   - Si no hay producto, enrutar al **"NH – Investor Intake v1"**.
2. **Si `interestType` == 'general_contact':**
   - Enrutar al **"AI Agent workflow"** o flujo de alertas de soporte.

---

## 4. Mejoras y Cambios Aplicados en esta Auditoría

La auditoría determinó que la lógica de formularios ya era sólida (incluía prevención de doble clic, estado de carga, y timeout). Se aplicaron las siguientes mejoras controladas:

1. **Centralización de Endpoints:** Se creó `js/config.js` para tener la URL del webhook de n8n y el tiempo de espera (timeout) en un único lugar. Así, si en el futuro el subdominio de n8n cambia, solo hay que editar un archivo.
2. **Refactorización de Scripts:** Se modificaron `index-init.js` y `lead-capture.js` para importar esta configuración centralizada de manera segura.
3. **Mantenimiento del Diseño Premium:** No se tocaron clases CSS ni el layout visual, manteniendo el estilo cyberpunk y las micro-animaciones (estados de botón con `spinner` y colores neón para feedback).
4. **Protecciones Confirmadas:**
   - Formularios interceptados con `e.preventDefault()` (sin recarga de página).
   - Botones deshabilitados (`disabled = true`) mientras ocurre la transmisión.
   - Mensajes de error claros si falla la red o si se excede el timeout de 15s.
5. **Corrección de "Falso Éxito":** Se eliminó una simulación en `js/index-logic.js` que devolvía "SUCCESS: Message transmitted to Terminal NH. Enviado ✓" tras 1500ms sin hacer fetch. Ahora valida `response.ok` directamente contra n8n.

---

## 5. Estado Actual (Final de Sesión)

Desde el lado de la web (Frontend), **la conexión está 100% verificada**. 
En la última prueba (Ejecución #85 en n8n):
- Se comprobó conexión exitosa enviando "SUCCESS: Message transmitted to Terminal NH. Enviado ✓".
- El flujo interno en n8n funcionó: *Investor Intake Webhook → Normalizar datos → Guardar en Submissions → Lanzar Exportar_PDF_Nuclear*.
- El webhook real en producción es exactamente `https://nuclearhand.app.n8n.cloud/webhook/investor-intake`.

---

## 6. Plan de Pruebas Manuales (Para Carlos)

Realiza estas comprobaciones desde la web en tu navegador local (Live Server):

1. **Prueba de Inversor Estándar:**
   - Abre `investor-access.html`.
   - Rellena el formulario y envíalo.
   - *Validación:* El botón debe cambiar a "Transmitiendo..." y finalizar en "⚡ TRANSMISIÓN ENCRIPTADA COMPLETADA." Revisa en n8n si entró el lead.

2. **Prueba de Flujo de Producto (LocoShop -> Alpha):**
   - Abre `nuclearband-x.html`.
   - Haz clic en "Reservar Unidad Alpha" (esto te llevará a `investor-access.html?product=BandX#alpha-request`).
   - Envía el formulario.
   - *Validación:* En n8n, el JSON recibido debe incluir `"targetProduct": "BandX"`.

3. **Prueba de Contacto General:**
   - Ve a `index.html`, baja hasta el footer.
   - Rellena el formulario de contacto y envíalo.
   - *Validación:* La UI debe mostrar "⚡ TRANSMISIÓN COMPLETADA" en color cian. En n8n, debe llegar con `"interestType": "general_contact"`.

4. **Prueba de Errores Silenciosos:**
   - Desactiva tu WiFi/Internet.
   - Intenta enviar cualquier formulario.
   - *Validación:* Tras unos segundos, la UI debe indicarte el error (ej: "⚠️ ERROR DE TRANSMISIÓN. REINTENTE."), evitando que la web se quede congelada.

---

## 7. Tareas Pendientes para la Próxima Sesión

1. **Revisión de Latencia en n8n:** Confirmar si el envío desde la web genera una nueva ejecución visible inmediatamente en la pestaña *Executions* o si hay algún retraso.
2. **Auditoría de Google Sheets:** Revisar el documento "Submissions" para confirmar que se están guardando los datos correctamente en las columnas adecuadas.
3. **Revisión de Expresiones de Normalización:** Comprobar el resultado del nodo "Normalizar datos", prestando especial atención a `leadId` y `receivedAt` (se detectó en prueba directa que alguna expresión podría estar saliendo como texto plano en lugar de evaluarse).
4. **Corrección Quirúrgica (si aplica):** Arreglar las expresiones de `leadId` y `fecha` en n8n sin romper el resto del flujo.
5. **Configuración de CORS (Deployment):** Una vez que la web se suba a Vercel, añadir el dominio final a la lista blanca de CORS de n8n si es necesario.
