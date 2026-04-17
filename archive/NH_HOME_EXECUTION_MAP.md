# NH_HOME_EXECUTION_MAP

## RESUMEN EJECUTIVO
Este documento traduce la auditoría visual en un plan de acción técnico. El objetivo es profesionalizar la Home de Nuclear Hand 5 mediante la eliminación de deuda técnica visual (estilos inline) y la estandarización de componentes core, asegurando un diseño "pixel-perfect" y consistente.

## MEJORA 1
- **Nombre corto**: Normalización de Títulos
- **Objetivo**: Centralizar el estilo de h2 y h3 en CSS para eliminar la inconsistencia de los estilos inline.
- **Archivo exacto probable**: `index.html` (limpieza) y `css/styles.css` (definición).
- **Selector o bloque probable**: `.section h2`, `.section h3`, `.hero h1`.
- **Dificultad**: Baja
- **Riesgo**: Bajo
- **Validación visual manual**: Verificar que los títulos de "LocoShop", "Manifiesto" y "Tecnología" tengan el mismo peso y espaciado.

## MEJORAs 2
- **Nombre corto**: Ajuste de Ritmo Vertical
- **Objetivo**: Implementar un espaciado consistente (Padding) entre secciones para mejorar la legibilidad y el flujo visual.
- **Archivo exacto probable**: `css/styles.css`
- **Selector o bloque probable**: `.section`, `.container`.
- **Dificultad**: Baja
- **Riesgo**: Bajo
- **Validación visual manual**: Medir visualmente que el aire entre bloques sea uniforme en scroll continuo.

## MEJORA 3
- **Nombre corto**: Unificación de Footer Buttons / CTA
- **Objetivo**: Estandarizar todos los botones de acción para que usen la clase `.btn` de forma consistente, eliminando variaciones ad-hoc.
- **Archivo exacto probable**: `index.html`
- **Selector o bloque probable**: `.card .btn`, `.nh-form .btn`.
- **Dificultad**: Baja
- **Riesgo**: Bajo
- **Validación visual manual**: Comparar el botón de "Ver Detalles" con el de "Enviar Comando" para asegurar paridad visual.

## ARCHIVOS A REVISAR
1.  `index.html`
2.  `css/styles.css`

## SELECTORES / BLOQUES PROBABLES
- `.section` (padding global)
- `.section h2` (font-size, margin-bottom)
- `.card article` (border-radius, flex-grow)
- `.btn` (box-shadow, transform)

## ORDEN DE IMPLEMENTACIÓN
1.  **Limpieza HTML**: Identificar y marcar todos los `style="..."` en encabezados.
2.  **Actualización CSS**: Definir las reglas maestras en `styles.css`.
3.  **Refactorización**: Aplicar las clases y eliminar los estilos inline.
4.  **Ajuste de Cards**: Unificar el comportamiento flex de las tarjetas.

## CHECKLIST DE VALIDACIÓN
- [ ] hero correcto
- [ ] títulos correctos
- [ ] cards equilibradas
- [ ] CTA consistentes
- [ ] móvil correcto
- [ ] LocoShop intacto
- [ ] rutas de imágenes intactas

## QUÉ NO TOCAR
- No modificar el atributo `src` de ninguna etiqueta `<img>`.
- No alterar los archivos en `./assets/` o `./images/`.
- No tocar las funciones JavaScript de `scroll-animations.js` o `index-init.js`.
- No cambiar los `data-sku` de los productos de LocoShop.
