# Plan de Producción: Clips IA Alpha Launch

Este documento detalla la estrategia de generación de contenidos visuales dinámicos (vídeo) mediante IA para los productos clave de Nuclear Hand.

## Objetivos
- **Impacto Visual:** Sustituir o complementar imágenes estáticas con clips futuristas de alta calidad.
- **Demostración de Uso:** Mostrar el "POV" (punto de vista) de las Vision X y el "Feel" de la Band X.
- **Formatos:** Optimizar para Web (16:9), Instagram/TikTok (9:16) y Ads/Feed (1:1).

---

## 📽️ Definición de Clips por Producto

### 1. Nuclear Vision X (POV & Lifestyle)
- **Concepto:** Ver el HUD (Heads-Up Display) minimalista integrado en el mundo real.
- **Clips Sugeridos:**
    - `VX_Hero_Web`: (16:9) Paneado lento de las gafas sobre una mesa de metal oscuro con luces de neón azules.
    - `VX_POV_Navigation`: (9:16) Caminando por una ciudad moderna, se ven flechas de navegación sutiles flotando.
    - `VX_Detail_Lens`: (1:1) Macro del cristal mostrando el micro-parpadeo de los LEDs monocromos.

### 2. NuclearBand X (Focus & Aesthetics)
- **Concepto:** El dispositivo que protege tu tiempo del ruido digital.
- **Clips Sugeridos:**
    - `BX_Hero_Web`: (16:9) Alguien trabajando en un teclado mecánico, la banda en la muñeca muestra una notificación de "Focus Mode".
    - `BX_Ink_Transition`: (9:16) Primer plano del refresco de la pantalla E-Ink cambiando de "Reloj" a "Biometría".
    - `BX_Material_Macro`: (1:1) Detalle del acabado del aluminio aeroespacial y la textura de la correa.

---

## 🛠️ Especificaciones Técnicas
- **Duración:** 3-6 segundos por clip (perfecto para loops en web y clips cortos en RRSS).
- **Herramientas de Generación:** Kling AI / Runway Gen-3 / Luma Dream Machine.
- **Estética:** "Cyberpunk Luminoso" - Iluminación limpia, altos contrastes, minimalismo radical.

---

## 📂 Mapa de Implementación
| Formato | Destino | Uso Principal |
| :--- | :--- | :--- |
| **16:9** | Web Hero | Fondos de sección `product-hero` en fichas de producto. |
| **9:16** | Reels / TikTok | Teasers de lanzamiento y demostración de POV. |
| **1:1** | IG Feed / Cards | Imágenes dinámicas dentro de las tarjetas de producto (si el ancho de banda lo permite). |

---

## 📋 Próximas Tareas (Action Items)
- [ ] Redactar prompts maestros para cada clip basándose en el look actual de la web.
- [ ] Ejecutar primer set de generaciones en Kling/Runway.
- [ ] Selección y post-procesado (color grading básico para coincidir con `styles.css`).
- [ ] Integración en `nuclear-vision-x.html` y `nuclearband-x.html`.
