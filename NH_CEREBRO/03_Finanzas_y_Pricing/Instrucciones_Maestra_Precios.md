# Instrucciones para la Maestra de Precios (Google Sheets)

**ESTÁNDAR DEFINIDO: Formato Español ( ; como separador de columnas | , como decimal)**

## 1. Importar CSV (Sin romper nada)
1. Abre [Google Sheets](https://sheets.new)
2. Ve a **Archivo > Importar > Subir**
3. Arrastra `maestra_precios.csv`
4. **IMPORTANTE**: En la ventana de configuración:
   - **Tipo de separador**: Selecciona **Personalizado** y escribe `;` (punto y coma).
   - **Convertir texto en números...**: SÍ (marcado).
5. Dale a **Importar datos**.

> ✅ **Verificación rápida**: Si las columnas A, B, C... están separadas y los precios (ej: 0,21) se alinean a la DERECHA, son números. Si se alinean a la IZQUIERDA, son texto (MAL).

---

## 2. Definir Variables Clave (Columnas I y T)
Antes de las fórmulas, asegura que los datos base son correctos:

*   **Columna I (Comision_Pasarela_fija)**: Debe ser número (0,35). Si está a la izquierda (texto), usa el **Plan B** abajo.
*   **Columna T (Margen_Objetivo)**: Escribe, en la celda **T1**, el título `Margen_Objetivo`. En **T2**, pon `0,3` (o tu meta, ej 30%) y arrastra.

---

## 3. Copiar Fórmulas (Bloque Maestro)
Copia estas fórmulas en la **FILA 2** y arrastra.

| Col | Nombre | Fórmula Exacta (ES) | Validar (Ej. aprox) |
| :--- | :--- | :--- | :--- |
| **L** | Ingreso_sin_IVA | `=K2/(1+J2)` | ~329,75 |
| **M** | Coste_Total | `=E2+F2+G2` | ~243 (Suma costes) |
| **N** | Fee_Pasarela | `=K2*H2+I2` | ~11,92 (Ojo: I2 debe ser n°) |
| **O** | Beneficio | `=L2-M2-N2` | ~74 (Cashflow) |
| **P** | Margen_pct | `=SI(L2=0;0;O2/L2)` | ~22% |
| **Q** | **Ad_Max** | `=MAX(0; O2-(L2*T2))` | Tope gastable en Ads |
| **R** | BE_ROAS | `=SI(Q2<=0;"INF";L2/Q2)` | ROAS para no perder |
| **S** | Semaforo | `=SI(P2>=0,25;"VERDE";SI(P2>=0,15;"AMARILLO";"ROJO"))` | Estado |

---

## 4. Checklist de Validación (8 Pasos)

1. [ ] **Test Texto vs Número**: Mira columna **I** (0,35) y **G** (Coste_Extra). ¿Alineados a la derecha?
2. [ ] **Test Ad_Max**: Si tienes Beneficio 74€ y Margen Objetvio 30% (T=0,3), ¿Sale Q positivo?
3. [ ] **Test "Sin Ads"**: Si en T2 pones un margen altísimo (ej 0,8), ¿Q2 se vuelve 0? (Correcto).
4. [ ] **Test Estrés**: Escribe `0` en PVP (K2). ¿Semáforo se pone ROJO?
5. [ ] **Decimales**: Asegura que J2 (IVA) es `0,21` y no `21`.
6. [ ] **Arrastre**: Haz doble clic en la esquina de S2. ¿Llegan los semáforos hasta el final?
7. [ ] **Formato**: Pon formato Moneda (€) a L, M, N, O, Q.
8. [ ] **Limpieza**: Borra filas vacías al final si molestan.

---

## 5. Plan B (Si hay números como Texto)

Si ves que **I (0,35)** o **G (0,5)** están a la izquierda y las fórmulas dan `#VALOR!`:

1.  Selecciona la columna problemática (clic en la letra, ej: **I**).
2.  Menú **Datos > Dividir texto en columnas**.
3.  Aparecerá un selector flotante: elige **"Detectar automáticamente"** o marca **Punto y coma**.
4.  ¡Magia! Se alinearán a la derecha y las fórmulas revivirán.

_(Si falla todo: Selecciona columna > Formato > Número. Y si sigue fallando, re-escirbe el 0,35 a mano)._
