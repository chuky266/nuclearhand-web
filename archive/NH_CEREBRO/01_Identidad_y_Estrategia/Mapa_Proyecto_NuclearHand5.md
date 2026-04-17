# Mapa del Proyecto NuclearHand5

Este documento conecta la estructura técnica del proyecto con el "cerebro operativo" de Nuclear Hand.

## 1. Estructura del Proyecto (Árbol)

```text
NuclearHand5/
├── index.html              # [CRÍTICO] Página principal (Landing Page). Contiene la estructura, textos y estilos base.
├── package.json            # [CRÍTICO] Configuración del proyecto (Vite) y dependencias.
├── css/                    # Estilos adicionales (aunque index.html tiene estilos embebidos actualmente).
├── js/                     # Lógica frontend (interacciones, animaciones).
├── images/                 # Recursos gráficos. Logo principal: /images/logo.png
├── studio/                 # Sub-proyecto / Herramienta interna.
│   ├── index.html          # Entry point del studio.
│   └── package.json        # Dependencias del studio.
├── nuclear-hand/           # Carpeta anidada (parece una versión anterior o backup).
│   └── index_old.html
└── backup_old_site/        # Copia de seguridad del sitio antiguo.
```

## 2. Explicación de Carpetas y Archivos Clave

### Archivos Críticos (⚠️ No tocar sin supervisión)
*   **`package.json`**: Controla cómo se inicia y construye el proyecto. Si se rompe, el comando `npm run dev` dejará de funcionar.
*   **`index.html`**: Es el corazón de la web ahora mismo. Contiene el HTML y gran parte del CSS crítico.
*   **`studio/`**: Parece ser un entorno separado. Hay que tratarlo como un "mini-proyecto" dentro del principal.

### Carpetas Principales
*   **`css/` y `js/`**: Aquí deberíamos mover el código que ahora está "suelto" en `index.html` para limpiar el proyecto.
*   **`images/`**: Repositorio de assets visuales.
*   **`backup_old_site/`**: Archivo histórico. Útil para consultar, pero no debe subirse a producción.

## 3. Conexión con el Cerebro Operativo

Aquí vinculamos los documentos de gestión (Markdown) con el código real.

| Documento del Cerebro | Parte del Proyecto Web (`NuclearHand5`) | Acción / Relación |
| :--- | :--- | :--- |
| **BankIdentity.md** | `index.html` (CSS :root, Fonts) | Define la paleta de colores (`--primary`, `--bg`), tipografías (Inter, Orbitron) y el tono de los textos. |
| **Catálogo** | `index.html` (#productos) | Los productos definidos en el catálogo (Nuclear Vision X, etc.) deben actualizarse aquí. |
| **Finanzas** | `studio/` (Posiblemente) | Si el "Studio" es un dashboard, aquí se visualizarían métricas. Si no, Finanzas es solo gestión externa. |
| **Guía de Fuentes** | `index.html` (<head>) | Asegura que se carguen las fuentes correctas de Google Fonts. |
| **Plan de hoy MD** | Todo el proyecto | Define qué archivos se tocan hoy. Es el "driver" de la ejecución técnica. |

---
> **Nota:** Actualmente los documentos del cerebro (`BankIdentity.md`, etc.) no están físicamente en la carpeta raíz del código. Se recomienda centralizarlos en una carpeta `docs/` o mantenerlos en el "Cerebro" (Antigravity Brain) y usarlos como referencia.
