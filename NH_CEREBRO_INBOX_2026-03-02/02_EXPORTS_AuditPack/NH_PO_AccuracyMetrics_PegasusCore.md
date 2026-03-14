# NH_PO_AccuracyMetrics_PegasusCore.md

## Métricas de Exactitud - Pegasus Core INV2025

A continuación se detallan las métricas de exactitud extraídas del Control Log para la validación financiera:

```csv
timestamp,event_id,run_id,trace_id,notebook_id,tipo_registro,modulo_canonico,artefacto,version,accion,responsable,fuente_ref,evidence_url,hash_sha256,estado,observaciones,accuracy_score,margin_of_error,accuracy_method,dataset_id,backtest_window,aprobado_por,revisado_por
2025-11-01T00:00:00Z,EVT-1001,RUN-A01,TRC-001,Notebook 1,inversor,Pegasus_Vault,Copia Maestra Integral INV2025,v1.0,Respaldo Integral,Aprobador/Ejecutivo,Activación Pegasus Vault,https://sys.nh/vault/master_inv2025.pdf,e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855,OK,Respaldo inicial completado,,,,,,,Ejecutivo Nuclear Hand,Firma_Auditor_NH
2025-11-02T10:00:00Z,EVT-1003,RUN-A02,TRC-003,Notebook 1,inversor,Pegasus_QuantumCore,Predicción Cuántica Financiera INV2025,v1.0,Predicción,Revisor/Auditor,Activación Pegasus QuantumCore,https://sys.nh/docs/quantum_forecast.pdf,1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b,OK,Generación de modelo,0.95,0.05,backtest,DS-INV2025-V1,30d,,Firma_Auditor_NH
2025-11-12T16:45:00Z,EVT-1008,RUN-A07,TRC-008,Notebook 1,inversor,Pegasus_QuantumCore,Validación Cruzada INV2025,v1.0,Validación,Revisor/Auditor,Sincronización y Validación Cruzada Pegasus Core INV2025,https://sys.nh/docs/cross_validation.pdf,d4e5f6a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9,OK,Validación cruzada exitosa,0.987,0.013,cross_validation,DS-INV2025-V2,90d,,Firma_Auditor_NH
```
