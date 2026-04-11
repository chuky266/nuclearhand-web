# NH_PRIORITY2_PATCH_PLAN

- **OBJETIVO**: Implementar un ritmo vertical consistente y un espaciado equilibrado en toda la Home para mejorar la legibilidad y la experiencia de scroll ("Quiet Tech" feeling).

- **SECCIONES AFECTADAS**: 
  - Hero / Valor
  - Manifiesto / Arquitectura
  - LocoShop
  - ADN Nuclear / Tecnología
  - Ecosistema / Contacto

- **ARCHIVOS A TOCAR**: 
  - `css/styles.css`

- **SELECTORES / BLOQUES PROBABLES**:
  - `.section` (Padding maestro)
  - `.section h2` (Margen inferior normalizado)
  - `.grid` (Gaps y márgenes de bloque)
  - `.tech-container`, `.value-items`, `.locoshop-hero-block` (Espaciados internos)

- **CAMBIOS PROPUESTOS**:
  - **Normalización de Padding**: Definir una variable `--section-padding: 80px 0;` (o similar) en `:root` y aplicarla a `.section` para asegurar que el aire entre bloques sea uniforme.
  - **Jerarquía de Títulos**: Unificar el `margin-bottom` de todos los `h2` de sección a un valor fijo (ej: `48px`) para que el inicio de cada bloque sea predecible.
  - **Equilibrio de Subtítulos**: Ajustar el margen de los párrafos introductorios bajo los títulos de sección para que no queden ni muy pegados al título ni muy alejados del contenido.
  - **Optimización de Grids**: Revisar el `gap` en los layouts de tarjetas para evitar que el contenido se sienta "aplastado" en pantallas medianas.

- **RIESGOS**:
  - **Mobile Over-padding**: Un padding excesivo puede requerir demasiado scroll en móviles. Se usarán `clamp()` o media queries.
  - **Hero Desync**: Alterar el padding de las secciones superiores podría desequilibrar el impacto visual del Hero.

- **VALIDACIÓN VISUAL**:
  - Verificación mediante scroll continuo en `localhost:5174`.
  - Auditoría de "aire visual" entre el final de una sección y el título de la siguiente.
  - Comprobación de responsive (móvil/tablet).

- **QUÉ NO TOCAR**:
  - `index.html` (salvo que sea estrictamente necesario para envolver bloques).
  - Rutas de imágenes en `./assets/` o `./images/`.
  - Lógica de carrito, skus o WhatsApp.
  - Navegación de la cabecera.
