# NH_CEREBRO - Cerebro Operativo de Nuclear Hand (Architecture v2.0)

Este directorio contiene la inteligencia central del proyecto ("NuclearBank Internal OS"). Aquí reside todo lo que no es código fuente directo (estrategia, finanzas, producto).

## 🚀 Resumen del Proyecto: Nuclear Hand 5
Nuclear Hand es un ecosistema de hardware y software diseñado para amplificar las capacidades humanas sin invadir su atención. Esta web es la plataforma principal de la marca, con un enfoque en estética Cyberpunk Premium y una arquitectura modular de datos (especialmente en pricing).

---

## 📅 Log de la Sesión de Hoy (Limpieza & UX)

### Bloque 1: Limpieza y organización
*   **Purga Total**: Hemos movido archivos residuales a `backup_old_site/`.
*   **Master HTML**: Se ha establecido `index.html` como el archivo maestro.

### Bloque 2: Mejora Visual / UX
*   **Corección de Imágenes**: Hemos sustituido las rutas `.webp` inexistentes por los archivos `.png` reales de los productos, eliminando errores 404.
*   **Estilo Premium**: Se ha mejorado el `object-fit` y el diseño de las tarjetas de productos.

### Bloque 3: Rediseño de Contacto
*   **Panel Futurista**: Se ha eliminado el estilo "ventana antigua" y se ha implementado un panel minimalista con **glassmorphism**, bordes redondeados y tipografía Orbitron, alineado con la marca.

### Bloque 5: Puesta en Escena & UX (24-12-2025)
*   **Scroll Reveal**: Animaciones suaves (`fade-in-up`) integradas.
*   **Branding**: Favicon oficial NH integrado.
*   **Identidad Digital**: Optimización SEO y meta-tags.

### Bloque 6: Finalización UX + Legal (26-12-2025)
*   **Footer Unificado**: Todas las páginas (Home, Productos, Legal) comparten una base de navegación coherente y enlaces de soporte (`mailto`).
*   **Capa Legal Premium**: Creación y maquetación de `privacy.html` y `terms.html` con estética futurista.
*   **Checklist de Lanzamiento**: Verificación de navegación 360º y estados hover interactivos.

---

## 📂 Archivos Principales
*   **`index.html`**: El corazón de la web. Versión maestra y estable.
*   **`css/styles.css`**: Todos los tokens de diseño y efectos premium.
*   **`js/pricing.js`**: Lógica que conecta el CSV de precios con la UI.
*   **`images/products/`**: Imágenes de alta calidad de los dispositivos.
*   **`NH_CEREBRO/`**: Toda la documentación estratégica (estás aquí).

---

## 🛠 Cómo arrancar el proyecto
1.  **Entorno Local**: Abre la terminal en la carpeta raíz y ejecuta `npm run dev` para iniciar el servidor Vite.
2.  **Acceso**: Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador.
3.  **Desarrollo**: Para cambios en CSS o JS, se recomienda refrescar la caché (Ctrl+F5).
4.  **Precios**: Los precios se actualizan editando el archivo `public/prices.csv` (o donde esté alojado el CSV maestro).

---

## Estructura de Carpetas (Detalle)

### 📂 01_Identidad_y_Estrategia (The Brain)
*   **Archivos clave:** `BankIdentity.md`, `Dossier_OnePager_NuclearHand_v1.md`.

### 📂 02_Producto_y_Catálogo (The Engine)
*   **Archivos clave:** `Catalogo_NuclearHand.md`, `Fichas_Productos_NH.md`.

### 📂 03_Finanzas_y_Pricing (The Vault)
*   **Archivos clave:** `Finanzas_Pricing_NuclearHand.md`.

### 📂 04_Operaciones_y_Flujos (The Dashboard)
*   **Archivos clave:** `next_steps.md` (Tareas pendientes), `CHANGELOG.md`.

### 📂 05_Lecturas_y_Referencia
*   **Referencia**: Zero to One, notas de hardware.

### 📂 99_Archive
*   **Backups**: Versiones obsoletas y material de descarte.
