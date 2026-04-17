**TÍTULO:** SOP: Registro de Eventos en ControlLog_Sample_v2.csv (Esquema v2.0)
**OBJETIVO:** Establecer un procedimiento estandarizado para registrar eventos operativos y financieros asegurando el cumplimiento estricto de las reglas técnicas definidas en DataSchema_v2.json.
**ALCANCE:** Aplica a todas las entradas de auditoría, sincronizaciones, activaciones y exportaciones vinculadas a los ecosistemas operativos y de inversores (Notebook 1 y Notebook 4).
**ROLES Y RESPONSABILIDADES:**
- **Operador (System):** Ejecuta la acción en el ecosistema Pegasus, genera el artefacto y crea la fila de registro inicial.
- **Revisor/Auditor:** Valida sintácticamente el registro contra el DataSchema_v2.json (verificación de patrones, longitud de hash y reglas de URL).
- **Aprobador (Ejecutivo Nuclear Hand):** Autoriza el cierre del evento, asume la responsabilidad en hitos críticos (ej. Exportación INV2025) y aprueba el bloqueo del log.
**PASOS (1–10):**
**1. Captura del Timestamp**
- **Qué se hace:** Registrar el momento exacto de la operación en formato estricto ISO 8601 UTC (ej. `2025-11-30T23:59:00Z`).
- **Quién lo hace:** Operador.
- **Evidencia:** Sello de tiempo automático del sistema de origen.
**2. Asignación de Identificadores (IDs)**
- **Qué se hace:** Asignar los tres códigos de trazabilidad cumpliendo los patrones del esquema: `event_id` (secuencial, formato `EVT-####`, ej. EVT-1001), `run_id` (instancia general, formato `RUN-[A-Z0-9]+`, ej. RUN-A01), y `trace_id` (trazabilidad de proceso, formato `TRC-###`, ej. TRC-001).
- **Quién lo hace:** Operador.
- **Evidencia:** Secuencia alfanumérica generada por el Control Log.
**3. Clasificación de Origen y Módulo**
- **Qué se hace:** Definir el `notebook_id` (`Notebook 1` para inversores/finanzas o `Notebook 4` para logs de sistema interno) y el `modulo` canónico (ej. `Pegasus Vault`, resolviendo la ambigüedad con SecureVault).
- **Quién lo hace:** Operador.
- **Evidencia:** Documentación de arquitectura de los Notebooks.
**4. Definición de Artefacto y Acción**
- **Qué se hace:** Registrar el nombre del `artefacto` generado (ej. "Copia Maestra Integral"), su `version` (ej. `v1.0`), la `accion` (ej. "Respaldo Integral") y la `fuente_ref` literal ("Activación Pegasus Vault").
- **Quién lo hace:** Operador.
- **Evidencia:** Metadatos del archivo de salida o del reporte del sistema.
**5. Validación de Evidencia URL**
- **Qué se hace:** Adjuntar el enlace físico en `evidencia_url` (ej. `https://sys.nh/vault/master_inv2025.pdf`). **Regla obligatoria:** Si el evento pertenece al `Notebook 1` (inversores / INV2025), el enlace es forzoso. Si falta o es `N/A`, se marca automáticamente como FAIL. Solo en eventos internos del `Notebook 4` se permite el valor `N/A`.
- **Quién lo hace:** Operador.
- **Evidencia:** URL del repositorio seguro.
**6. Cálculo del Hash Criptográfico (SHA-256)**
- **Qué se hace:** Calcular el `hash_sha256` a partir del texto o archivo binario exacto del artefacto generado. El resultado debe verificarse para garantizar que es estrictamente una cadena hexadecimal minúscula de 64 caracteres de longitud (`[a-f0-9]{64}`).
- **Quién lo hace:** Operador (automatizado).
- **Evidencia:** Cadena criptográfica de 64 caracteres.
**7. Definición de Responsabilidad**
- **Qué se hace:** Completar el campo `responsable`. Usar `System` para procesos técnicos automatizados. Para firmas digitales y exportaciones finales del dossier de inversores, asignar obligatoriamente a un aprobador humano (ej. `Ejecutivo Nuclear Hand`).
- **Quién lo hace:** Operador / Aprobador.
- **Evidencia:** Firma digital, token de sesión o certificado de validación ejecutiva.
**8. Asignación de Estado (OK / WARN / FAIL)**
- **Qué se hace:** Evaluar el resultado de la operación bajo los criterios estrictos del esquema:
- `OK`: Ejecución perfecta sin desviaciones (ej. Backup completado exitosamente).
- `WARN`: Ejecución completada pero con vacíos de evidencia secundaria (ej. Faltan métricas de accuracy en la Validación Cruzada de Pegasus Core).
- `FAIL`: Operación fallida o violación crítica del esquema (ej. Falta URL en Notebook 1 o hash menor a 64 caracteres).
- **Quién lo hace:** Revisor/Auditor.
- **Evidencia:** Logs de salida y evaluación de reglas estructurales.
**9. Registro de Observaciones**
- **Qué se hace:** Añadir contexto técnico o justificación en `observaciones` (texto libre), explicando detalladamente el motivo si el evento resultó en WARN o FAIL (ej. "Faltan métricas de accuracy documentadas").
- **Quién lo hace:** Revisor/Auditor.
- **Evidencia:** Análisis técnico del evento.
**10. Flujo de Revisión y Cierre**
- **Qué se hace:** El Revisor/Auditor contrasta la fila contra `DataSchema_v2.json`. Si no hay errores, el Aprobador emite su firma (ej. "Dossier cerrado y bloqueado"). El evento se considera "cerrado" e inmutable, integrándose de manera definitiva al `ControlLog_Sample_v2.csv`.
- **Quién lo hace:** Revisor/Auditor y Aprobador.
- **Evidencia:** Sello de validación sin errores de validación de esquema.
