# NH_PRIORITY1_PATCH_PLAN: NORMALIZACIÓN DE TÍTULOS

## OBJETIVO
Eliminar la deuda técnica de los estilos inline en los encabezados `h2` y `h3` de la Home, centralizando la jerarquía visual en `css/styles.css`. Esto garantiza que cualquier cambio futuro en la marca se aplique de forma global y automática.

## ARCHIVOS A TOCAR
1.  `index.html`: Limpieza de atributos `style`.
2.  `css/styles.css`: Actualización de selectores de encabezado.

## SELECTORES / BLOQUES EXACTOS
En `index.html`:
- **L108**: Secundario "Manifiesto Nuclear"
- **L126**: Terciario "Arquitectura del Sistema"
- **L155**: Secundario "LocoShop"
- **L231**: Secundario "Simbiosis Absoluta"
- **L267**: Secundario "Tecnología Nuclear Hand"
- **L320**: Secundario "Contacto del Sistema"

En `css/styles.css`:
- Selector `.section h2` (Alrededor de la línea 284)
- Selector `.section h3` (A crear o actualizar si existe)

## CAMBIOS CSS/HTML PROPUESTOS

### 1. PROPUESTA CSS (`css/styles.css`)
Sustituir o expandir el bloque actual de `.section h2` por:
```css
.section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(28px, 5vw, 42px); /* Normaliza el rango 2.5em - 3em */
  margin-bottom: 24px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text);
}

.section h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(20px, 3vw, 28px);
  margin-bottom: 20px;
  text-align: center;
  color: var(--primary);
}
```

### 2. PROPUESTA HTML (`index.html`)
- **Eliminar `style="..."`** de todos los `h2` mencionados.
- **Eliminar `style="..."`** de todos los `h3` mencionados.
- Mantener los contenedores `<div>` que ya gestionan el centrado si es necesario, aunque la nueva regla CSS lo hará redundante (pero seguro de mantener).

## RIESGOS
- **Riesgo Bajo**: Posible desajuste menor de 4-8px en el margen inferior si no se calcula bien el `margin-bottom` global.
- **Riesgo Visual**: Cambio en el tamaño percibido en pantallas medianas si el `clamp` no es preciso.

## VALIDACIÓN VISUAL
1.  **Consistencia**: Navegar por la home y comprobar que "Manifiesto", "LocoShop" y "Tecnología" tienen exactamente el mismo tamaño y aire.
2.  **Responsive**: Reducir el ancho de la ventana y verificar que los títulos escalan suavemente sin romperse en 2 líneas de forma abrupta.

## QUÉ NO TOCAR
- No tocar el logo ni la clase `.brand`.
- No tocar los `h1` del Hero (tienen su propio degradado complejo).
- No tocar las rutas de assets ni nombres de clases existentes (`nh-card-glass`, etc.).
