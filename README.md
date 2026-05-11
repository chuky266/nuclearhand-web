# Nuclear Hand 5 Alpha

Wearables de IA local radicalmente privada. Project "Nuclear Hand 5" - Ready-to-Share.

## Requisitos

- Node.js (v18+)
- npm

## Instalación y Desarrollo

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Entorno de desarrollo:**
   ```bash
   npm run dev
   ```
   Acceso local: `http://127.0.0.1:5173`

## Producción y Despliegue

### Build Local
```bash
npm run build
```
El resultado se generará en la carpeta `/dist`.

### Previsualizar Build
```bash
npm run preview
```

---

## Despliegue en Vercel

### Opción A: Importar Repositorio (Recomendado)
1. Ve a [vercel.com](https://vercel.com).
2. Haz clic en **"New Project"**.
3. Importa el repositorio de GitHub de `nuclear-hand 5`.
4. **Configuración de Vercel:**
   - **Framework Preset:** `Vite` (o `Other` si no lo detecta).
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Root Directory:** `./`
5. Haz clic en **Deploy**.

### Opción B: Vercel CLI
```bash
vercel deploy --prod
```

## Seguridad y Privacidad
- El proyecto utiliza **IA Local**; no se envían datos sensibles a la nube.
- No se han incluido archivos `.env` ni claves privadas en este repositorio.

---
© 2026 Nuclear Hand. Designed in Barcelona.
