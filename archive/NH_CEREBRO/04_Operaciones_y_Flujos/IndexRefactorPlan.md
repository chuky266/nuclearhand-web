# Plan de Refactorización: Index y Audio

## 1. Análisis del Index y CSS

### Situación Actual (Resumen)
El archivo `index.html` contiene toda la estructura y el estilo del sitio.
- **Estructura**: HTML5 semántico (Header, Section, Footer).
- **Estilos**: ~130 líneas de CSS incrustadas en el `<head>` dentro de una etiqueta `<style>`.
- **Estado**: Funcional pero desordenado. Mezcla contenido y presentación, lo que dificulta el mantenimiento.

### Problemas Detectados
- [ ] **CSS Embebido**: Los estilos están en el HTML, impidiendo que el navegador los guarde en caché independientemente.
- [ ] **Uso de `!important`**: En `body` hay un `!important` para forzar el fondo, lo cual es una mala práctica (indica conflictos con estilos heredados o viejos).
- [ ] **Estilos en línea**: Hay algunos `style="..."` dispersos en el HTML (ej: `style="margin-top:0"`).
- [ ] **Mezcla de conceptos**: Definiciones de variables CSS (`:root`) mezcladas con resets y componentes.

### Propuesta de Estructura Limpia
- **Archivos**:
    - `index.html`: Solo estructura (HTML).
    - `css/styles.css`: Todos los estilos globales y de componentes.
    - `css/variables.css` (Opcional): Para `:root` y colores, si crece mucho.
- **Organización CSS**:
    1. Variables (`:root`)
    2. Reset básico
    3. Tipografía
    4. Layout / Estructura
    5. Componentes (.btn, .card, .hero)
    6. Utilidades

### Plan Paso a Paso para la Limpieza
1. [TODO] Crear archivo `css/styles.css`.
2. [TODO] Mover todo el contenido de `<style>` del `index.html` a `css/styles.css`.
3. [TODO] Eliminar la etiqueta `<style>` del `index.html`.
4. [TODO] Añadir `<link rel="stylesheet" href="css/styles.css">` en el `<head>`.
5. [TODO] Revisar y eliminar estilos en línea (`style="..."`) moviéndolos a clases de utilidad o componentes.
6. [TODO] Verificar que el sitio se ve idéntico al original.

### CSS a Extraer
Todo el bloque entre `<style>` y `</style>` (líneas 12-146) se moverá a `css/styles.css`.

## 3. Cambios Aplicados (Ejecutados 2025-12-06)

### Archivos Modificados
- `index.html`: Eliminado bloque `<style>` y añadido `<link>`.
- `css/styles.css`: Creado con los estilos extraídos.
- `index_backup_2025-12-06.html`: Copia de seguridad creada.

### Resumen de Acciones
1.  **Backup**: Se creó copia exacta del index original.
2.  **Extracción**: CSS movido a archivo externo.
3.  **Limpieza**: El `head` del HTML ahora está limpio.

### Revisar Manualmente
- Comprobar que la carga de fuentes (Google Fonts) sigue funcionando bien antes del CSS.
- Verificar que el fondo (`background`) se ve igual, ya que tenía un `!important` que se ha mantenido en el CSS pero ahora carga externamente.

---

---

## 4. Diagnóstico visual index_dynamic (2025-12-08)

### Problema
El usuario reportó que el archivo se veía como texto plano, sin estilos ni fondo dinámico.

### Causa
- **Falta de CSS**: El head no incluía `<link rel="stylesheet">` apuntando a `css/styles.css` ni `css/dynamic-bg.css`.
- **HTML roto**: Había etiquetas `</div>` huérfanas en el head y el header estaba mal estructurado.
- **Falta de elementos de fondo**: Los `div` con clases `.bg-grid`, `.bg-rays`, `.bg-particles` no estaban presentes en el body.

### Cambios aplicados para reparación de index_dynamic
1.  **Backup**: Se creó copia de seguridad en `index_dynamic_backup_2025-12-08.html`.
2.  **Inyección de CSS**: Añadidos links a `styles.css` (base) y `dynamic-bg.css` (animaciones).
3.  **Estructura HTML**:
    - Limpieza de etiquetas huérfanas.
    - Reconstrucción del `<header class="site-header">` para coincidir con los estilos.
    - Inserción de los 3 divs del fondo dinámico al inicio del `<body>`.

### Integración de Logo (2025-12-08)
- **Archivo**: `index_dynamic.html`
- **Cambio**: Añadido `<img src="images/logo.png">` dentro de `.logo-wrap`.
- **Estilos**: Modificado `.logo-wrap` en `css/styles.css` para usar `flex-direction: row` y ajustado tamaño de logo a 48px.
- **Backup**: Creado `index_dynamic_logoBackup.html`.

---

## 2. Carpeta Audio

### Inspección
> **Nota**: Tras revisar la estructura de carpetas (`list_dir` y búsqueda), **NO se ha encontrado ninguna carpeta llamada `audio`** en la raíz ni en subdirectorios visibles.

### Recomendaciones
- **Crear carpeta**: Si tienes archivos de audio previstos, crea una carpeta `audio/` en la raíz.
- **Formatos**: Usa MP3 para música de fondo (si la hubiera) y WAV/OGG para efectos cortos de UI.
- **Uso en Web**:
    - *Feedback sonoro*: Sonidos sutiles al hacer hover o click en botones (estilo futurista).
    - *Ambiente*: Loop de fondo (con cuidado, siempre muteado por defecto).

---

## 5. Actualización de Contenidos Soft Launch (2025-12-09)

### Objetivo
Aplicar la identidad "Cyberpunk Comercial" y los productos definidos en `Copy_Web_Home_NH.md` al archivo `index_dynamic.html`.

### Cambios Realizados
1.  **Backup**: Creado `index_dynamic_backup_v2.html` antes de las modificaciones.
2.  **Styles.css**:
    *   Añadida clase `.btn.secondary` para el botón "Manifiesto".
    *   Añadidas clases `.value-block`, `.value-items`, `.value-item` para la nueva sección de identidad.
3.  **Index_dynamic.html**:
    *   **HERO**: H1 "EL FUTURO NO SE ESPERA..." y botones actualizados.
    *   **VALOR**: Insertada sección "High Tech. High Life." después del Hero.
    *   **PRODUCTOS**: Grid actualizada con Vision X (Flagship), NuclearBand X (Best Seller) y LuxeVibe (Próximamente).
    *   **ECOSISTEMA**: Sección "Tu Segunda Mente" reemplaza a la antigua sección de Categorías.
    *   **FOOTER**: Texto de copyright 2025 y enlaces simplificados (eliminada sección Contacto).

### Verificación
*   Revisar `index_dynamic.html` en navegador.
*   Comprobar responsive de la grid de valores y productos.

> [!VIDEO]
> **MILESTONE CONFIRMADO (2025-12-09):** `index_dynamic.html` es ahora la **BASE OFICIAL** de la home.
> Se han eliminado las secciones "Categorías" y "Contacto" antiguas.
> Próximos pasos: Verificar enlaces del footer y sección de Ecosistema.

---

## 6. Refinamiento Final Home (2025-12-10)

### Objetivo
Pulir texto de sección Ecosistema y Footer para elevar el tono a "Cyberpunk Comercial" y reforzar la confianza (Privacidad Radical).

### Cambios Realizados
1.  **Ecosistema ("Tu Segunda Mente")**:
    *   Reescrito para enfatizar privacidad local y "red neuronal privada".
    *   Tono más asertivo: "Basta de smart devices que te roban la atención".
2.  **Footer**:
    *   Reemplazados enlaces genéricos o internos (NuclearBank) por enlaces de confianza: Privacidad Radical, Términos, Manifiesto, Soporte.
    *   Mantenido el claim final "Control total. Sin fricción."

### Estado
*   `index_dynamic.html` actualizado y listo para revisión final.
