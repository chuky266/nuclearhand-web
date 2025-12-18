# Plan de Sesión: "Infraestructura & Cierre" (Nuclear Hand)

**Objetivo de sesión:** Dejar operativa la "verdad financiera" (Pricing) y cerrar el primer automatismo de captación (n8n), eliminando deuda técnica antes de vender.

---

## 🔝 Top 5 Tareas para Mañana

### 1. [CRÍTICO] Maestra de Precios (Google Sheets) ✅
*Sin esto no sabemos si ganamos dinero. Es la prioridad absoluta.*
*   **Definition of Done:** Una hoja de cálculo con los 4 productos principales, costes reales (o estimados con buffer) y un "semáforo" de margen calculado.
*   **Pasos exactos:**
    1.  Crear Sheet nueva `NuclearBank_Pricing_Master`.
    2.  Configurar columnas y fórmulas (ver detalle abajo).
    3.  Rellenar datos de Alibaba/Proveedores para Vision X, Band X y LuxeVibe.
    4.  Ajustar PVP hasta que el semáforo salga Verde.
*   **Necesito:** `Finanzas_Pricing_NuclearHand.md`, Acceso a Alibaba/Proveedores.
*   **Riesgo:** Usar costes "optimistas". *Solución:* Añadir siempre un +15% de "Buffer de Importación" al coste del producto.

### 2. [CIERRE] Flujo n8n "Investor Intake v1" ✅
*Que el formulario de la web guarde datos y avise.*
*   **Definition of Done:** Relleno el form en local -> Aparece fila en Google Sheets -> Se guarda PDF en carpeta Drive -> Me llega alerta (Slack/Email).
*   **Pasos exactos:**
    1.  Verificar que el Webhook en n8n está en modo `Production` (no Test).
    2.  Mandar una submission de prueba desde la web.
    3.  Comprobar carpeta `OnePager_Exports` en Drive para ver el PDF generado.
*   **Necesito:** Acceso a n8n, Credenciales Google Cloud (Service Account).
*   **Riesgo:** Token de Google caducado. *Solución:* Re-conectar cuenta en n8n Credentials.

### 3. [WEB] Test Móvil de `index_dynamic.html` ✅
*Validación visual en pantalla pequeña.*
*   **Definition of Done:** Lista de 3 cambios CSS aplicados para que en móvil no se rompa el texto ni el fondo.
*   **Pasos exactos:**
    1.  Inspeccionar Elemento -> Emular iPhone 12.
    2.  Verificar paddings laterales (que no toque bordes).
    3.  Verificar tamaño de fuente de párrafos (mínimo 16px).
*   **Necesito:** `index_dynamic.html`, VS Code.

### 4. [PRODUCTO] Tabla Diferencial (Band vs Ring) ✅
*Claridad mental para el cliente.*
*   **Definition of Done:** Un bloque de texto markdown comparativo insertado en `Fichas_Productos_NH.md`.
*   **Pasos exactos:**
    1.  Abrir `Fichas_Productos_NH.md`.
    2.  Añadir sección "Comparativa Rápida" bajo LuxeVibe.
    3.  Pegar la tabla de diferenciación (Gestión vs Salud).
*   **Necesito:** `Fichas_Productos_NH.md`.

### 5. [LEGAL] Disclaimer "Internal OS" en Footer ✅
*Protección de marca.*
*   **Definition of Done:** El texto legal aparece sutilmente en el footer de la web y documentos.
*   **Pasos exactos:**
    1.  Editar `index_dynamic.html`.
    2.  Pegar el texto legal en el footer (clase `.legal-text` pequeña).
*   **Necesito:** Texto aprobado del plan de ayer.

---

## 💰 Detalle Tarea 1: Estándar "Maestra de Precios"

**Columnas Obligatorias (Google Sheets):**
1.  **Producto** (Nombre comercial)
2.  **Coste Fábrica (COGS)** (Precio unitario proveedor + Packaging)
3.  **Buffer Import (15%)** (Fórmula: `=B2*0.15`) -> *¡Importante!*
4.  **Coste Envío** (Last mile delivery)
5.  **Coste Pasarela (3%)** (Stripe/Shopify. Fórmula: `=PVP*0.03`)
6.  **IVA (21%)** (Sólo si vendes en Europa. Fórmula: `=PVP - (PVP/1.21)`)
7.  **PVP Objetivo** (El precio que paga el cliente)
8.  **Margen Neto (€)** (Fórmula: `PVP - IVA - Pasarela - Envío - (COGS + Buffer)`)
9.  **Margen %** (Fórmula: `Margen € / (PVP - IVA)`)
10. **SEMÁFORO** (Formato Condicional)

**Regla del Semáforo (Rentabilidad):**
*   🟢 **VERDE:** Margen > 30% (Negocio sano, permite ads y escalar).
*   🟡 **AMARILLO:** Margen 15-29% (Peligroso, solo orgánico, poco margen de error).
*   🔴 **ROJO:** Margen < 15% (No vender. Pierdes dinero con cualquier imprevisto).

**Checklist Datos:**
*   [ ] Alibaba/Aliexpress para referencias de precio base (coge el rango ALTO).
*   [ ] Packlink/Correos para estimar envío nacional (pon 5-6€ media).

---

## 🤖 Detalle Tarea 2: Checklist Cierre n8n

**Nivel: Operativo / Debug**

*   [ ] **Webhook:** ¿La URL en el código JS de la web coincide exactamente con la del nodo Webhook en n8n? (Ojo: `test/` vs `production/`).
*   [ ] **Google Sheets:** ¿El nodo "Append" tiene el ID de hoja correcto? (A veces cambia si duplicas hojas).
*   [ ] **PDF Generation:** ¿El HTML que se manda a generar tiene las variables mapeadas (`{{Name}}`) o está en blanco?
*   [ ] **Permisos:** ¿El email de la Service Account (`iam.gserviceaccount...`) está añadido como **Editor** en la carpeta de Drive y en el Sheet? (Fallo clásico).
*   [ ] **Prueba de Humo:** Rellena el form con nombre "TEST FINAL". Si en 5 segundos no tienes un PDF nuevo en Drive, algo falla.
