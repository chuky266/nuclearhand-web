# NH_SAFE_TOMORROW_TASKS.md

## ESTADO ACTUAL
El proyecto se encuentra en una fase de estabilidad operativa ("Audit Pack v3" completado). La interfaz web es funcional y respeta la estética **Cyberpunk Premium**, aunque requiere refinamiento en la capa de adaptabilidad móvil y legibilidad contextual. El núcleo financiero (`pricing.js`) y los activos de producto están blindados.

## QUÉ ESTÁ PERFECTO
1. **Identidad Visual:** El uso de **glassmorphism** y la tipografía **Orbitron** en el panel de contacto refuerza la marca de alta tecnología.
2. **Dinámica de Usuario:** Las animaciones **Scroll Reveal** (`fade-in-up`) aportan una navegación fluida y moderna.
3. **Consistencia:** El "Look & Feel" general es coherente; el Favicon y las imágenes de producto (PNG corregidos) eliminan el ruido visual previo.

## QUÉ MEJORAR MAÑANA
Propuestas de bajo riesgo visual:

1. **Ajuste de Responsividad iPhone SE**
   - **Archivo probable:** `css/styles.css`
   - **Impacto esperado:** Evitar cortes visuales en el logo y títulos en pantallas de 375px.
   - **Riesgo:** Bajo

2. **Contraste de Taglines en Hero**
   - **Archivo probable:** `css/styles.css` (clase `.tagline` o `.hero p`)
   - **Impacto esperado:** Asegurar legibilidad sobre fondos de vídeo mediante sombras de texto sutiles.
   - **Riesgo:** Bajo

3. **Optimización de Scroll Performance**
   - **Archivo probable:** `css/dynamic-bg.css`
   - **Impacto esperado:** Suavizar la carga de la GPU al navegar por secciones con muchos gradientes.
   - **Riesgo:** Bajo

4. **Refinamiento de Menú Hamburguesa**
   - **Archivo probable:** `css/styles.css` / `index.html`
   - **Impacto esperado:** Garantizar que el área de clic sea >44px y el cierre sea intuitivo en móviles.
   - **Riesgo:** Medio (requiere validar interacción)

5. **Alineación de Footer Social**
   - **Archivo probable:** `css/styles.css`
   - **Impacto esperado:** Centrado perfecto de enlaces en modo móvil para una estética más equilibrada.
   - **Riesgo:** Bajo

## QUÉ NO TOCAR
1. **Activos LocoShop:** La ruta `/nh5/assets/locoshop/` y sus archivos (`vision-x-hero.png`, etc.) están bajo `STABILITY_LOCK`.
2. **Claim Maestro:** El texto "EL FUTURO NO SE ESPERA, SE PROGRAMA" es innegociable por estrategia de marca.
3. **Lógica de Precios:** El archivo `js/pricing.js` y su conexión con `maestra_precios.csv` es el pilar de la verdad financiera.

## ORDEN RECOMENDADO DE TRABAJO
1. Iniciar servidor local y validar visualmente en DevTools (móvil).
2. Aplicar mejoras de contraste (taglines) y tipografía (line-height).
3. Ajustar márgenes de responsividad en el Header.
4. Refinar el footer móvil.
5. Verificación final de navegación 360º.
