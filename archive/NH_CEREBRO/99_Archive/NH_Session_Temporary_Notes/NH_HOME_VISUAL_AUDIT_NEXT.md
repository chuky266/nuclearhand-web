# AUDITORÍA VISUAL: HOME NUCLEAR HAND 5

## ESTADO ACTUAL
La home de Nuclear Hand 5 presenta una identidad visual **Cyberpunk / High-Tech** muy sólida. La paleta de colores (Deep Blue, Cyan, Magenta) y la tipografía (Orbitron para impacto, Inter para lectura) están bien integradas. Sin embargo, existe una dependencia excesiva de estilos inline y una variabilidad en el ritmo vertical y consistencia de componentes (títulos y tarjetas) que puede ser optimizada para un acabado más "premium" y cohesivo.

## QUÉ FUNCIONA MUY BIEN
1.  **Identidad Atmosférica**: El uso de capas dinámicas (`bg-grid`, `bg-rays`, `bg-particles`) y glassmorphism crea una experiencia inmersiva inmediata.
2.  **Jerarquía del Hero**: El bloque principal comunica eficazmente la propuesta de valor con un contraste tipográfico excelente.
3.  **Modularidad de Secciones**: La estructura de la página (Hero → Manifesto → Arquitectura → LocoShop) fluye de lo aspiracional a lo tangible de forma lógica.

## MEJORAS PRIORITARIAS (Bajo Riesgo / Alto Impacto)

| Mejora | Archivo Probable | Sección Afectada | Impacto Esperado | Riesgo |
| :--- | :--- | :--- | :--- | :--- |
| **Normalización de Títulos** | `index.html` / `styles.css` | Secciones Manifiesto y LocoShop | Mejorar el ritmo visual y la consistencia de marca eliminando tamaños dispares inline. | Bajo |
| **Ajuste de Ritmo Vertical** | `styles.css` / `index.html` | Espaciado entre bloques (Hero/Manifesto/LocoShop) | Sensación de amplitud y profesionalismo al estandarizar el padding de secciones. | Bajo |
| **Unificación de Footer Buttons** | `index.html` | LocoShop / Contacto | Consistencia en la acción de usuario (CTA) en las tarjetas de producto y botones de formulario. | Bajo |
| **Refinanciamiento de Cards** | `styles.css` | ADN Nuclear / Tecnología | Cohesión visual entre los diferentes tipos de tarjetas mediante balance de bordes y sombras. | Bajo |
| **Optimización de Legibilidad** | `styles.css` | Subtítulos y textos `var(--muted)` | Mejorar la experiencia de usuario (UX) en pantallas con diferentes calibraciones de color. | Bajo |

## QUÉ NO TOCAR
1.  **Rutas de Assets/Imágenes**: Mantener `./assets/locoshop/` y `./images/` intactos para evitar roturas de links.
2.  **Lógica LocoShop**: No modificar atributos `data-sku` ni la estructura de los `article` que contienen productos.
3.  **Core de Animaciones**: Respetar las clases `scroll-reveal` y los scripts `scroll-animations.js` para mantener la fluidez actual.

## ORDEN RECOMENDADO DE EJECUCIÓN
1.  **Fase 1: Consistencia Tipográfica**: Extraer estilos inline de `h2/h3` a clases CSS globales en `styles.css`.
2.  **Fase 2: Espaciado Maestro**: Definir variables de espaciado o clases de sección (`section-standard`) para unificar el padding.
3.  **Fase 3: Pulido de Componentes**: Ajustar hover effects y alineación de botones en cards de LocoShop y ADN Nuclear.
4.  **Fase 4: Verificación Visual**: Testeo en diferentes anchos de pantalla (Responsive) para asegurar que la nueva jerarquía se mantiene.
