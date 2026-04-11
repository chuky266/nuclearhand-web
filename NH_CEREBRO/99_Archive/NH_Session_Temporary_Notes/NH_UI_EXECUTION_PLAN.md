# NH_UI_EXECUTION_PLAN.md

## RESUMEN
Plan de ejecución para el refinamiento visual y de UX de la sección LocoShop y el Hero de Nuclear Vision X. El foco está en aumentar la inmersión "Cyberpunk Premium" sin comprometer la estabilidad técnica ni la integridad de los assets.

## MEJORA 1
- **Nombre corto**: Inmersión Hero Overlay
- **Objetivo**: Suavizar la transición visual entre la imagen de producto y el contenido mediante un gradiente estructurado y desenfoque de fondo.
- **Archivo exacto a revisar**: `css/styles.css`
- **Bloque/Selector probable**: `.locoshop-hero-overlay` (línea ~1085)
- **Dificultad**: Baja
- **Riesgo**: Bajo
- **Cómo validar visualmente**: El texto debe ser legible sobre un degradado que no corte la imagen bruscamente, usando un `backdrop-filter: blur(5px)`.

## MEJORA 2
- **Nombre corto**: Shimmer CTA Hardware
- **Objetivo**: Añadir un barrido de luz animado a los botones para evocar la calidad de materiales premium (titanio/cristal).
- **Archivo exacto a revisar**: `css/styles.css`
- **Bloque/Selector probable**: `.btn` (línea ~251) y pseudo-elemento `::after`.
- **Dificultad**: Media
- **Riesgo**: Bajo
- **Cómo validar visualmente**: Un sutil destello de luz debe recorrer el botón de izquierda a derecha.

## MEJORA 3
- **Nombre corto**: Unificación CTA & Tooltip Alpha
- **Objetivo**: Estandarizar la comunicación de acciones y reforzar el concepto de exclusividad "Alpha Access".
- **Archivo exacto a revisar**: `index.html` y `css/styles.css`
- **Bloque/Selector probable**: Enlaces `<a>` dentro de `.card` e `.locoshop-hero-overlay`.
- **Dificultad**: Baja
- **Riesgo**: Medio
- **Cómo validar visualmente**: Comprobar que todos los botones usen "Explorar Specs" y muestren el aviso de exclusividad al hover.

## ORDEN DE IMPLEMENTACIÓN
1. Ajustes de estilos globales y animaciones en `styles.css`.
2. Refactorización de textos en el DOM de `index.html`.
3. Verificación de reglas de responsividad.

## CHECKLIST DE VALIDACIÓN
- [ ] Hero correcto (gradiente suave).
- [ ] Botones correctos (shimmer activo).
- [ ] Hover correcto (feedback visual).
- [ ] Móvil correcto (sin desbordamientos).
- [ ] Sin romper LocoShop (IDs `data-sku` intactos).
- [ ] Sin romper rutas de imágenes (assets intactos).

## QUÉ NO TOCAR
- Rutas de archivos en `./assets/locoshop/`.
- Atributos `data-sku` vinculados a `pricing.js`.
- Estructura de clases de la grid principal.
