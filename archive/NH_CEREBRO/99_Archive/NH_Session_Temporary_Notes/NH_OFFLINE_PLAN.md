# NH_OFFLINE_PLAN.md
## MODO OPERADOR: OFFLINE PREP (2026-02-20)

Este documento garantiza que el repositorio `nuclear-hand 5` sea funcional y productivo mañana sin acceso a internet.

### 📋 Checklist de 15 Pasos (Mañana)

1.  **[ ] Desconexión Física:** Desactivar Wi-Fi/Ethernet para forzar entorno local.
2.  **[ ] Carga de Assets:** Verificar que todos los archivos en `/nh5/assets/locoshop/` existen físicamente.
3.  **[ ] Nodo Local:** Ejecutar `node --version` para validar entorno de ejecución.
4.  **[ ] Iniciar Servidor:** Ejecutar comando de validación (ver sección final).
5.  **[ ] Sync Interno:** Comparar `index.html` con `deploy_ready/index.html` para asegurar paridad.
6.  **[ ] Verificación de Rutas:** Abrir consola (F12) y confirmar 0 errores de red en local.
7.  **[ ] Backup Seguro:** Copiar carpeta `nuclear-hand 5` a un USB o disco externo hoy.
8.  **[ ] Registro en el Cerebro:** Actualizar `NH_CEREBRO/04_Operaciones_y_Flujos/next_steps.md` con avances offline.
9.  **[ ] Git Local:** Realizar commits locales frecuentes aunque no haya push.
10. **[ ] Revisión de Blog:** Validar carga de `blog-1.html` y sus imágenes asociadas.
11. **[ ] Auditoría de Precios:** Revisar `Instrucciones_Maestra_Precios.md` para cambios de mañana.
12. **[ ] Estabilidad Visual:** Comprobar que el CSS inyectado no depende de CDNs externos (Google Fonts está en preconnect, pero puede fallar offline).
13. **[ ] Documentación Local:** Usar este archivo y `walkthrough.md` como única fuente de verdad.
14. **[ ] Limpieza de Caché:** Hacer Hard Refresh (Ctrl+F5) en el primer arranque para limpiar basura online.
15. **[ ] Cierre Limpio:** Al terminar mañana, ejecutar `STOP_LOCOSHOP.bat`.

---
**ESTADO: LISTO PARA DESCONEXIÓN ✅**
