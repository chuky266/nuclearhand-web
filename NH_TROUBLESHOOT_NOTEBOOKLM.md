# NH_TROUBLESHOOT_NOTEBOOKLM.md

## Scroll congelado — Fix #1, #2, #3 (Windows)

- **Fix #1 (Rápido): Limpiar caché + Desactivar aceleración por hardware + Reinicio**
    - **Chrome:** Menú (3 puntos) → Configuración → Sistema → Desactivar "Usar aceleración de hardware cuando esté disponible".
    - **Edge:** Menú (3 puntos) → Configuración → Sistema y rendimiento → Desactivar "Usar aceleración de hardware cuando esté disponible".
    - **Caché:** Presiona `Ctrl + Shift + Del` → Rango de tiempo: Siempre → Marcar "Archivos e imágenes en caché" → Borrar datos.
    - **Acción:** Cerrar todas las ventanas del navegador y volver a abrir.

- **Fix #2: Desactivar extensiones (Modo Incógnito Limpio)**
    - **Paso 1:** Presiona `Ctrl + Shift + N` para abrir una ventana de incógnito.
    - **Paso 2:** Si el scroll funciona en Incógnito, una extensión es la culpable.
    - **Deshabilitar una a una:** Menú → Extensiones → Gestionar extensiones. Desactiva todas y ve activando de una en una hasta encontrar la que congela el sitio.

- **Fix #3 (Profundo): Reset de "Datos del sitio" + Service Workers**
    - **Ruta exacta:** Configuración → Privacidad y seguridad → Configuración de sitios → Ver permisos y datos almacenados en todos los sitios.
    - **Acción:** Busca `notebooklm.google.com` y haz clic en el icono de papelera (Eliminar datos).
    - **Service Workers:** En NotebookLM, presiona `F12` → Pestaña "Application" → "Service Workers" → Clic en "Unregister" para todos los relacionados con Google.

---

## DIAGNÓSTICO: SCROLL CONGELADO EN NOTEBOOKLM

### Causa Probable
El cuelgue del scroll suele deberse a un conflicto de **Aceleración de Hardware** con el renderizado de PDFs pesados o fuentes complejas, sumado a un leak de memoria en el Service Worker de la aplicación.

### 🛠️ 5 Fixes Concretos (Chrome / Edge)

1.  **Hard Refresh + Clear Cache:** `Ctrl + Shift + R` para forzar la recarga sin usar el Service Worker corrupto.
2.  **Desactivar Aceleración de Hardware:** 
    - Ajustes > Sistema > Desactivar "Usar aceleración de hardware cuando esté disponible".
3.  **Incógnito Test:** Abrir en modo Incógnito (`Ctrl + Shift + N`). Si funciona, es una extensión (probablemente un AdBlocker o Ghostery).
4.  **Reset de Site Data:** F12 > Application > Storage > "Clear site data" (borra cookies y storage local del dominio).
5.  **Flags de Renderizado:** En `chrome://flags`, buscar "Smooth Scrolling" y poner en `Disabled` para probar.

### 🛠️ 5 Fixes de Windows

1.  **Prioridad de Proceso:** Administrador de Tareas > Detalles > Clic derecho en `chrome.exe` / `msedge.exe` > Establecer prioridad > Alta.
2.  **GPU Backend:** Forzar el uso de la GPU integrada en lugar de la dedicada para el navegador (Configuración de Gráficos de Windows).
3.  **Actualización de Drivers:** Asegurar que los drivers de video (NVIDIA/AMD/Intel) están al día.
4.  **Virtual Memory:** Aumentar el tamaño del archivo de paginación si se trabaja con múltiples pestañas de NotebookLM.
5.  **Windows Focus:** Desactivar "Asistente de concentración" que a veces interfiere con el scroll suave.

---
**NOTA:** Si el problema persiste, descargar el contenido del notebook como Markdown y trabajarlo en un editor local durante el modo offline.
