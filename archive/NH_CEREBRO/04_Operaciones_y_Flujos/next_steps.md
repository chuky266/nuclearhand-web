# ⚡ OPERACIÓN ESTABLE LOCOSHOP

### 🚀 ARRANQUE RÁPIDO (30s)
1. **Ejecutar `START_LOCOSHOP.bat`** (Raíz del proyecto).
2. **Espera Autómata:** El script limpiará puertos previos y lanzará Vite.
3. **Verificación:** Se abrirá automáticamente [http://127.0.0.1:5173](http://127.0.0.1:5173).
   - *Si ves 404:* Asegúrate de estar en la raíz `/` y no en rutas como `/studio`.
   - *Si ves Conn Refused:* El script ha fallado al iniciar el proceso Node; ciérralo y repite.

### 🛑 CIERRE LIMPIO (10s)
1. **Ejecutar `STOP_LOCOSHOP.bat`**.
2. **Resultado:** El puerto 5173 quedará libre inmediatamente, evitando procesos fantasma.
3. **Limpieza:** Puedes cerrar las ventanas de terminal que hayan quedado abiertas.

---

### 🛠️ SI FALLA (1 min)
- **¿Puerto ocupado?** Ejecuta `netstat -ano | findstr :5173`. Si hay un PID, `STOP_LOCOSHOP.bat` lo matará por ti.
- **¿Error 404?** La configuración en `vite.config.js` está fijada a `root: './'`. No entres por rutas manuales, usa el enlace directo.
- **¿Varios agentes abiertos?** Cierra todas las pestañas de navegador y reinicia con el script de ARRANQUE RÁPIDO.

---

# ✅ ESTABILIZACIÓN LOCOSHOP (21/01/2026)
- **URL Oficial Confirmada:** http://127.0.0.1:5173/

---

- [x] **Locashop:** acceso y ruta de apertura confirmada. [DONE 21/01/2026]

### 📅 Próxima sesión: Fase 2 de Distribución
- [ ] **Data Review:** Revisar estadísticas iniciales del Clip 1 en YouTube y TikTok.
- [ ] **Producción Batch 2:** Preparar la producción del siguiente clip del reloj (formato vertical).
- [ ] **Networking LinkedIn:** Empezar a trabajar una pequeña lista de contactos objetivo en LinkedIn (IA, wearables y automatización).

### 🚀 Prioridades Post-Lanzamiento Clip 1
1. [ ] **Clip 2 (NVX Vertical):** Preparar y producir el teaser vertical de Nuclear Vision X para TikTok/Reels.
2. [ ] **Clip 3 (Band X):** Preparar el primer clip oficial de NuclearBand X (reloj) para YouTube y TikTok.
3. [ ] **Templates:** Crear una mini plantilla de copy reutilizable para publicaciones (YouTube, TikTok, LinkedIn).

---

### 🎥 Producción Clips IA – Batch 1
- [x] **Generar Clip 1:** HERO 16:9 (NVX) – 【PRODUCIDO 19/01】
- [ ] **Generar Clip 2:** Teaser vertical 9:16 (NVX).
- [x] **Generar Clip 3:** HERO 16:9 (Band X) – 【PRODUCIDO 19/01】
- [ ] **Pasos para publicar Clip 3 (YouTube):**
    - [ ] **Subida:** Cargar `nbx_hero_alpha_v1.mp4`.
    - [ ] **SEO:** Aplicar título y descripción de `plan_publicacion_clips_alpha.md`.
    - [ ] **Playlist:** Añadir a "Nuclear Vision X & NuclearBand X – IA Clips (Alpha)".
    - [ ] **Miniatura:** Seleccionar frame con pantalla E-Ink en alto contraste (miniatura automática sugerida: segundo 0:02 o 0:08).
    - [ ] **Audience:** Marcar como "No es contenido para niños".
    - [ ] **Visibility:** Público.
- [ ] **Promoción Social (Copys Cortos):**
    - [ ] **LinkedIn:** "Tu centro de control biométrico en la muñeca. La NuclearBand X llega para demostrar que la IA local es el futuro del bienestar. ⌚🦾 [nuclearhand.online]"
    - [ ] **Instagram:** "Datos que importan. Privacidad que protege. NuclearBand X: hardware para el nuevo humano. ⚡🕶️ Link en Bio. #NuclearHand #Biohacking #AIGadget"
- [ ] **Generar Clip 4:** Mix 1:1 NVX + NuclearBand X.
- [ ] **Publicar Clip 1 en TikTok** (según checklist Alpha Launch).
- [ ] **Publicar Clip 1 en LinkedIn** (según checklist Alpha Launch).
- [x] **Guardar:** Clips finales en `Documentos/NH_Assets_Kling/`.

#### Siguiente foco

**Hoy (Distribución Clip 1):**
- [ ] Publicar Clip 1 en TikTok con música synthwave nativa.
- [ ] Publicar Clip 1 en LinkedIn (Post nativo de video).
- [ ] Crear Post de Comunidad en YouTube para dar visibilidad al video.

**Próximos días (Preparación Clips 2 y 3):**
- [ ] **Clip 2 (Teaser Vertical NVX):** Revisar prompt de Gemini Video y generar versión v1.
- [ ] **Clip 3 (Hero NuclearBand X):** Finalizar detalles del loop y preparar metadatos de publicación.
- [ ] **SEO:** Refinar etiquetas para "IA Local" y "Cyberpunk Privacy" en YouTube.

---

### 🚀 Próximos pasos prioritarios:
1. **Publicación y Test A/B en redes:** Usar `plan_publicacion_clips_alpha.md` para subir clips a TikTok/Shorts/Reels.
2. **Producción de clips IA restantes:** (Clip 2 y Clip 4 de la Batch 1).
3. **Production Kit:** Finalizar el montaje de los Shorts de validación.

---

### 🟢 Estado de los Bloques de Trabajo (03/01/2026)
- [x] **Bloque 1**: Revisión Visual Final Home.
- [x] **Bloque 2**: Páginas de Producto (SEO, Consistencia, 4K).
- [x] **Bloque 3**: Checklist Técnico Lanzamiento (Favicon, Responsive).
- [x] **Bloque 4**: Copy de Lanzamiento (X, IG, LinkedIn).

---

### 🟢 Estado de los Bloques de Trabajo (06/01/2026)
- [x] **Bloque 1**: Expansión de Contenido (Guiones de Vídeo & SEO YouTube).
- [x] **Bloque 2**: Refinamiento LinkedIn & Fichas Web.
- [x] **Bloque 3**: Operaciones (Hashtags & Calendario 14 días).

---

---

### 🎥 SESIÓN 2: Postproducción (Ensamblaje y Ritmo)
**Prioridad: Alta**
- [ ] **Triaje de Brutos:** Clasificar clips en `Rodaje_NH5` como A-Roll, B-Roll y Best-Takes.
- [ ] **Rough Cut YouTube:** Unir las partes de Carlos con el Teaser de Kling. Validar que el mensaje fluye.
- [ ] **Edición Shorts de Alto Impacto:** 
    - Finalizar Short 1 (Impacto Visual).
    - Finalizar Short 3 (Privacidad Radical).
- [ ] **Selección Musical:** Elegir base Synth/Cyberpunk para el vídeo principal.

---

### 🎬 SESIÓN 3: Mastering y Ajustes Web para Lanzamiento
**Prioridad: Media**
- [ ] **Final Polish (Vídeo):** Color grading (Cian/Ámbar), diseño de sonido y overlays de interfaz.
- [ ] **Exportación Final:** Generar versiones 4K (YouTube) y Verticales (RRSS).
- [ ] **Sugerencias de Ajustes Web (Preparación para Lanzamiento):**
    - [ ] **Identidad:** Migrar textos de `BankIdentity.md` a la sección Manifiesto en `index.html`.
    - [ ] **Precios:** Conectar visualmente la UI con los precios de `maestra_precios.csv`.
    - [ ] **QA Final:** Revisar enlaces a la Lista Alpha y responsividad móvil en las landing de producto.
- [ ] **Preparación SEO:** Títulos, descripciones y hashtags listos en un documento de texto.

---

### 🚀 Definición de "Listo para Publicar"
- Vídeo principal de 2-3 minutos en 4K.
- 5 Shorts/Reels con subtítulos dinámicos.

---

# ✅ OPERACIÓN DEFINITIVA LOCOSHOP (24/01/2026)

### 🚀 ARRANQUE RÁPIDO:
- Doble clic `START_LOCOSHOP.bat`
- Esperar 5–15s
- Abrir [http://127.0.0.1:5173](http://127.0.0.1:5173)

### 🛑 CIERRE SEGURO:
- Cerrar pestaña del navegador
- Cerrar la ventana negra del servidor (si está abierta)
- En VS Code: Terminal → Kill All Terminals

### 🆘 SI FALLA (ERR_CONNECTION_REFUSED):
- Ejecutar `STOP_LOCOSHOP.bat`
- Ejecutar `START_LOCOSHOP.bat` de nuevo
