# Plan de Foco: Sesión Ejecutiva (Nuclear Hand 5)

**Objetivo de sesión:** Dejar lista la infraestructura operativa (precios, validación web/producto y legal) para desbloquear el siguiente sprint de ventas.

---

## 🔝 Top 5 Tareas Prioritarias

### 1. [NH-BANK] Crear "Maestra de Precios" (La Verdad Financiera)
*El 'The Vault' necesita datos reales para validar viabilidad.*
*   **Tiempo estimado:** Medio (30-45 min)
*   **Archivos:** `../03_Finanzas_y_Pricing/Instrucciones_Maestra_Precios.md`, `maestra_precios.csv`.
*   **Resumen de sesión (ACTUALIZADO):**
    *   [x] **DONE**: CSV estandarizado (ES) e introducido en Sheets.
    *   [x] **DONE**: Fórmulas (N->T) calculando Beneficio, ROAS y Semáforo.
    *   [x] **DONE**: "La Verdad Financiera" activada. Sabemos qué productos son VERDES.
    *   *Nota*: Ajustar `Comision_Pasarela_fija` a número si se importa como texto.

*   **PRÓXIMO PASO:** Usar estos datos para validar Unit Economics reales (Task 2).

### 2. [NH-WEB] Validación Móvil de `index_dynamic.html`
*La web se ve bien en escritorio, pero el tráfico será 90% móvil.*
*   **Tiempo estimado:** Corto (15 min)
*   **Archivos:** `index_dynamic.html`.
*   **Comando de Arranque:** `npm run dev` (en terminal VS Code).
*   **URL Local:** `http://localhost:5173/index_dynamic.html`
*   **Checklist de Validación (5 Pasos):**
    *   [ ] **1. Responsive (iPhone SE)**: Abre F12 > Dimensiones: 375x667. ¿Se corta el logo o el título?
    *   [ ] **2. Legibilidad**: ¿El texto "Nuclear Hand" se lee bien sobre el vídeo/fondo? (Contraste).
    *   [ ] **3. Menú Hamburguesa**: Clic en el icono de menú. ¿Se abre? ¿Cubre toda la pantalla? ¿Se puede cerrar?
    *   [ ] **4. CTAs (Dedo)**: Clic en "Explorar Ecosistema". ¿Es fácil de pulsar? (>44px).
    *   [ ] **5. Enlaces**: Verifica que "Manifiesto" y "Productos" bajen a su sección y no salten error 404.
*   **DONE:** Confirmación de "Visualmente Aprobado" o lista de ajustes CSS.

### 3. [NH-PRODUCTO] Validación Fichas: Diferenciación Absoluta
*Evitar canibalización entre Band X y LuxeVibe.*
*   **Tiempo estimado:** Corto (20 min)
*   **Archivos:** `../02_Producto_y_Catálogo/Fichas_Productos_NH.md`.
*   **Pasos Exactos:**
    *   [ ] Revisar promesa de Band X: "Domina tu tiempo" (Gestión, Pantalla, Notif. filtradas).
    *   [ ] Revisar promesa de LuxeVibe: "Conoce tu cuerpo" (Salud, Invisible, Sin pantalla).
    *   [ ] **Tabla comparativa mental:**
        *   ¿Quiero ver la hora? -> Band X.
        *   ¿Quiero saber mi sueño sin ver nada? -> LuxeVibe.
    *   [ ] Verificar que el copy de "Venta" no se solape.
*   **DONE:** Confirmación de que un usuario entiende la diferencia en 5 segundos.

### 4. [NH-IDENTIDAD] Disclaimer Legal "Internal OS"
*Protección legal ante el uso de la palabra 'Bank'.*
*   **Tiempo estimado:** Corto (10 min)
*   **Archivos:** `../01_Identidad_y_Estrategia/BankIdentity.md`.
*   **Pasos Exactos:**
    *   [ ] Copiar bloque: *"NuclearBank es la denominación operativa interna... no es una entidad comercial."*
    *   [ ] Insertarlo en el footer de documentos internos y en `BankIdentity.md` (si no está visible).
    *   [ ] **Validación:** Comprobar que NO aparezca "NuclearBank" como marca pública en la Web (Solo en Footer como 'Powered by...'' si acaso, mejor oculto).
*   **DONE:** Texto legal estándar definido y copiado en la raíz de documentación.

### 5. [NH-WEB] Footer + "Tu Segunda Mente" (Navegación)
*Cerrar el ciclo de navegación.*
*   **Tiempo estimado:** Corto (15 min)
*   **Archivos:** `../../index_dynamic.html`.
*   **Pasos Exactos:**
    *   [ ] Sección "Tu Segunda Mente": Verificar copy final (ya está en `index_dynamic.html`, revisar si gusta).
    *   [ ] **Footer Links:** Decidir destino de enlaces muertos (`#`).
        *   Privacidad -> Crear `privacy.html` (o `TODO`).
        *   Términos -> Crear `terms.html` (o `TODO`).
    *   [ ] Probar enlaces en entorno local.
*   **DONE:** Sitemap claro de qué falta crear (probablemente las páginas legales).

---

## 🚧 Bloqueadores y Dependencias
*   **Datos Financieros:** Sin costes reales de producto (Alibaba/Fabricante), el Pricing es ficción. Tienes que buscar esos datos.
*   **Legal Pages:** Los enlaces del footer no llevan a ningún sitio. Faltan los textos legales reales.

## ⏭️ Siguiente Acción Inmediata
Pasa al punto **2. Validación Móvil** de la web. Cierra Sheets un momento, abre `index_dynamic.html` en tu navegador local y activa el modo móvil (F12). Valida que se pueda leer el Manifiesto.
