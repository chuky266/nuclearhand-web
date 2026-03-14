# NOTEBOOKLM_TEST_PLAN.md

### 🧪 Protocolo de Pruebas (Scroll Fix)

| Test | Acción | Resultado Esperado |
| :--- | :--- | :--- |
| **Test A** | Abrir NotebookLM en **Incógnito** (`Ctrl+Shift+N`) sin extensiones. | Scroll fluido. Si falla, el problema no son las extensiones. |
| **Test B** | Crear un **Perfil nuevo** en Chrome (Icono perfil → Añadir). | Configuración de fábrica. Si funciona, tu perfil principal está corrupto. |
| **Test C** | Abrir en **Microsoft Edge** (u otro motor Chromium limpio). | Descarte total de bugs específicos de la instalación de Chrome. |

### 🔍 Resultados y Decisiones

1.  **Si funciona en Incógnito (Test A OK):**
    - Una extensión (AdBlock, VPN, Dark Mode) está bloqueando el renderizado.
    - **Decisión:** Desactivar extensiones una a una en el perfil principal.

2.  **Si funciona en Perfil Nuevo (Test B OK):**
    - La caché profunda o flags de Chrome están interfiriendo.
    - **Decisión:** Reset total de configuración de Chrome (Configuración → Restablecer).

3.  **Si falla en TODOS (A, B y C):**
    - El problema es la Aceleración de Hardware de Windows o el Driver de Video.
    - **Decisión:** Forzar renderizado por software (Fix #1 de Windows en la guía).

### 🆘 ¿Qué hago si nada funciona?
1.  Baja la resolución de pantalla temporalmente.
2.  Usa la versión móvil para lectura si es urgente.
3.  Descarga el contenido como Markdown y úsalo en VS Code offline.
