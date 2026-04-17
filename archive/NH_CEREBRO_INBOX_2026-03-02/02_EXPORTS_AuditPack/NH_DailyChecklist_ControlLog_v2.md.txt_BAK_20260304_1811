Aquí tienes la rutina diaria estructurada en formato checklist, basada en los Procedimientos Operativos Estándar (SOP) y las reglas de validación del esquema `DataSchema_v2.json` para el Control Log:
### ⏱️ Rutina Diaria de 7 Minutos: Mantenimiento ControlLog v2
**Fase 1: Captura de Eventos (Minuto 1-2) — Rol: Operador (System)**
* [ ] **Registrar Timestamp:** Capturar el momento exacto de la operación en formato estricto ISO 8601 UTC (ej. `2025-11-30T23:59:00Z`).
* [ ] **Asignar IDs:** Generar los códigos de trazabilidad cumpliendo los patrones obligatorios: `event_id` (EVT-####), `run_id` (RUN-[A-Z0-9]+) y `trace_id` (TRC-###).
* [ ] **Clasificar Módulo y Origen:** Definir el `notebook_id` (`Notebook 1` para inversores/finanzas o `Notebook 4` para logs internos).
* [ ] **Desambiguar Términos:** Estandarizar el `modulo` utilizando la nomenclatura canónica **Pegasus Vault** para operaciones de copia maestra, descartando el uso de "Pegasus SecureVault" para evitar duplicidades.
* [ ] **Calcular Hash:** Generar el `hash_sha256` del artefacto y asegurar que sea estrictamente una cadena hexadecimal minúscula de 64 caracteres exactos.
**Fase 2: Validación Estructural (Minuto 3-4) — Rol: Revisor / Auditor**
* [ ] **Validar Evidencia URL:** Comprobar que el enlace físico (`evidencia_url`) esté presente. Es **forzoso** si el evento pertenece al `Notebook 1`; si falta o dice `N/A`, se debe marcar como FAIL. Solo se permite `N/A` para los eventos del `Notebook 4`.
* [ ] **Evaluar Criterios de Estado:** Contrastar el resultado de la operación para asignar uno de los estados permitidos: `OK` (ejecución perfecta), `WARN` (vacíos de evidencia) o `FAIL` (violación del esquema o URL faltante).
**Fase 3: Corrección de Alertas WARN (Minuto 5-6) — Rol: Revisor / Auditor**
* [ ] **Auditar Métricas Matemáticas:** Si un evento de *Pegasus Core* o *QuantumCore* arroja un estado `WARN` (ej. "Faltan métricas de accuracy documentadas"), detener la validación.
* [ ] **Aplicar Corrección P0:** Exigir e incorporar el anexo técnico con métricas reales (MAE, RMSE o % de accuracy) antes de validar predicciones financieras a inversores.
* [ ] **Justificar en Observaciones:** Añadir en el campo `observaciones` el contexto técnico detallado que explica el motivo del estado WARN o FAIL (ej. "Faltan métricas de accuracy documentadas").
**Fase 4: Cierre y Aprobación (Minuto 7) — Rol: Aprobador (Ejecutivo Nuclear Hand)**
* [ ] **Transicionar Responsabilidad:** Modificar el campo `responsable` de "System" a un aprobador humano (ej. "Ejecutivo Nuclear Hand") para hitos críticos y cierres de dossier, como la *Exportación Pegasus para Inversores INV2025*.
* [ ] **Firma y Bloqueo:** Emitir la firma digital o certificado de validación ejecutiva para autorizar el cierre del evento.
* [ ] **Sellar Registro:** Una vez contrastada la fila contra el `DataSchema_v2.json` sin errores, considerar el evento como "cerrado" e inmutable, integrándolo definitivamente al `ControlLog_Sample_v2.csv`.
