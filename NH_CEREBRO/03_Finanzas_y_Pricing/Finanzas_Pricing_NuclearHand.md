# NuclearBank: Estructura de Pricing & Márgenes

Este documento define la lógica financiera para establecer los precios de los productos **Nuclear Hand**. Úsalo como base para tu hoja de cálculo "Maestra de Precios".

---

## 1. El Modelo de Pricing (La Fórmula)

Para asegurar la rentabilidad, cada producto debe analizarse bajo esta estructura de costes antes de fijar su PVP.

### Conceptos Clave
*   **Coste Producto (COGS):** Lo que pagas al proveedor por fabricar una unidad (incluyendo packaging).
*   **Logística (Fulfillment):** Coste de almacenar y enviar esa unidad al cliente final.
*   **Comisiones (Pasarela):** Tarifa de Shopify Payments / Stripe / PayPal (aprox. 1.5% - 3%).
*   **Impuestos (IVA):** Parte del precio que recauda el estado (no es tuyo). *En este modelo asumimos PVP con IVA incluido.*
*   **PVP (Precio Venta Público):** El precio final que paga el cliente.
*   **Margen Bruto (€):** Dinero limpio que queda tras restar todos los costes directos.
*   **Margen Bruto (%):** Porcentaje de rentabilidad sobre el PVP sin IVA.

### La Fórmula de Margen
> **Margen (€)** = (PVP - IVA) - (Coste Producto + Logística + Comisiones)

---

## 2. Plantilla para Google Sheets

Copia y pega esta estructura en una hoja de cálculo nueva ([sheets.new](https://sheets.new)).

### Estructura de Columnas
| Columna | Nombre Cabecera | Tipo de Dato | Nota |
| :--- | :--- | :--- | :--- |
| **A** | Producto | Texto | Nombre del modelo |
| **B** | Coste Producto (EUR) | Moneda | Lo que te cobra el chino/proveedor |
| **C** | Coste Envío (EUR) | Moneda | Promedio de envío peninsular/UE |
| **D** | Comisiones (%) | Porcentaje | Pon `0,03` para un 3% (colchón seguridad) |
| **E** | IVA (%) | Porcentaje | Pon `0,21` para España |
| **F** | PVP (EUR) | Moneda | El precio que ve el cliente |
| **G** | Base Imponible (Sin IVA) | Fórmula | Precio real para ti |
| **H** | Coste Comisiones (€) | Fórmula | Dinero que se queda el banco |
| **I** | **Margen Bruto (€)** | Fórmula | **Tu beneficio unitario** |
| **J** | **Margen %** | Fórmula | Rentabilidad del producto |

### Fórmulas para copiar
*(Asumiendo que estás en la fila 2)*

*   **Celda G2 (Base Imponible):** `=F2 / (1 + E2)`
    *   *Explicación:* Quita el IVA del PVP.
*   **Celda H2 (Coste Comisiones):** `=F2 * D2`
    *   *Explicación:* Calcula la comisión sobre el total cobrado.
*   **Celda I2 (Margen Bruto €):** `=G2 - B2 - C2 - H2`
    *   *Explicación:* Base Imponible - Coste prod - Envío - Comisiones.
*   **Celda J2 (Margen %):** `=I2 / G2`
    *   *Explicación:* Qué % del precio real es beneficio.

---

## 3. Estimación por Productos (Catálogo Actual)

Datos pre-rellenados para que solo tengas que poner tus costes reales.

### I. Nuclear Vision X (Gafas IA)
*   **Coste Producto:** `[A rellenar: Ej. 80€]`
*   **Coste Envío:** `[A rellenar: Ej. 5€]`
*   **Comisiones:** 3%
*   **IVA:** 21%
*   **PVP Estimado:** 299€
*   **Margen Esperado:** `?`

### II. NuclearBand X (Smart Watch E-Ink)
*   **Coste Producto:** `[A rellenar: Ej. 40€]`
*   **Coste Envío:** `[A rellenar: Ej. 5€]`
*   **Comisiones:** 3%
*   **IVA:** 21%
*   **PVP Estimado:** 149€
*   **Margen Esperado:** `?`

### III. LuxeVibe Ring (Smart Ring)
*   **Coste Producto:** `[A rellenar: Ej. 35€]`
*   **Coste Envío:** `[A rellenar: Ej. 4€]`
*   **Comisiones:** 3%
*   **IVA:** 21%
*   **PVP Estimado:** 199€
*   **Margen Esperado:** `?`

### IV. Nuclear Core Module [IDEA]
*   **Coste Producto:** `[A rellenar: Ej. 120€]`
*   **Coste Envío:** `[A rellenar: Ej. 8€]`
*   **Comisiones:** 3%
*   **IVA:** 21%
*   **PVP Estimado:** 349€
*   **Margen Esperado:** `?`

---

## 4. Módulo de Pricing en NuclearBank
*Ver definición en `BankIdentity.md` > Sección 7*
