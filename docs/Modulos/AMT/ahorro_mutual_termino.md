---
sidebar_position: 3
sidebar_label: Ahorro mutual a termino
---

# AMT (Ahorro Mutual a Término)

:::tip rol
El módulo AMT del ERP de Mutual Celesol permite la administración integral de los certificados de ahorro a término de los socios.  
Desde este módulo se pueden **emitir certificados**, gestionar **renovaciones**, **anticipos**, **cancelaciones**, consultar **saldos e intereses**, así como obtener **reportes** de cartera y movimientos históricos.
:::

## 📑 1. Vista Principal
### Lista todos los certificados vigentes:

| Campo | Descripción |
|-------|-------------|
| 🔢 Número / Miembro | Identificador del certificado y socio titular |
| 💰 Capital e Interés | Montos actuales |
| 📈 TNA / Monto al Vencimiento | Tasa nominal anual y proyección de pago |
| 🗓️ Estado y Fecha de Emisión | Información de vigencia |

**Acciones rápidas:** 🔍 Doble clic en un registro para ver detalle · 🔄 Renovación automática o manual · 📜 Consulta de movimientos históricos  

---

## ⏳ 2. AMT Vencidos Impagos

### Certificados cuyo vencimiento ha expirado y no han sido cancelados.

| Acción | Descripción |
|--------|-------------|
| 📊 Consultar monto pendiente, intereses y datos del socio | Seguimiento de deuda |
| 🔧 Gestionar renovación, cancelación o anticipo | Resolver situación |

### 🔍 2.1 Vista Detallada de un AMT Vencido e Impago
Al hacer doble clic sobre un registro en AMT Vencidos Impagos, el sistema abre la vista de detalle del certificado.  
Esta pantalla permite analizar la situación del ahorro y decidir la acción a seguir (renovar, cancelar o registrar movimiento).

| Sección | Qué muestra | Detalles / Campos |
|---------|------------|-----------------|
| 📇 **Datos del Socio** | Información del socio | Nombre, CUIT/CUIL, condición de sellado, estado del certificado (Activo/Inactivo) |
| 📜 **Datos del Certificado** | Información del ahorro | Fecha de emisión, Plazo, Fecha de vencimiento, Capital e Interés, TNA / TEA, Monto al Vencimiento, Renovación Automática (renovar, no renovar, renovar solo capital) |
| 💹 **Información Contable** | Datos contables asociados | Asiento contable, Cuenta AMV, Saldo AMV, estado del sello, forma de pago (paga aparte o incluido) |
| 📑 **Pestañas de Detalle** | Información complementaria | Movimientos AMT (renovaciones, cancelaciones, anticipos), Relaciones, Anteriores (renovaciones previas), Saldos y Trámites (intereses y documentación) |

---

## 💸 3. Cancelación AMT

:::info
Registra y visualiza las cancelaciones de certificados, mostrando número de certificado, tipo de moneda, fecha de canelación y miembro ociado.
:::

### 💰 3.1 Movimiento AMT
#### Detalle de conceptos liquidados

| Concepto | Descripción |
|----------|-------------|
| 💰 Capital e Interés | Valores que se liquidan |
| ⚖️ Diferencias Capital/Interés | Ajustes por redondeo o cálculo |
| 🧾 Monto Afectado | Suma de los conceptos liquidados |
| 🔖 Tipo de Movimiento | Pago AMT o Renovación AMT |

### 🧾 3.2 Movimiento Monetario
#### Imputación contable y acciones sobre el asiento

| Campo | Descripción |
|-------|-------------|
| 💵 Monto | Importe total a debitar o acreditar |
| 🧮 Asiento | Número de asiento contable |
| ➕➖ Debe / Haber | Imputación contable |
| ⚙️ Acciones | Freeze Asiento (congelar) y Reverso (anular) |

### 📦 3.3 Movimiento Cuenta Base
#### Referencias contables y agrupación por lote

| Campo | Descripción |
|-------|-------------|
| 📝 Nro de Movimiento / Fecha / Período | Referencia contable |
| 📦 Nro de Lote | Agrupa operaciones para conciliación |

---

## 💳 4. Anticipos AMT

:::info
Adminitra los anticipos otorgados sobre certificados vigentes, reflejando fecha, capital afectado, monto de anticipo, asiento contable, intereses y diferencia de intereses.
:::

### Gestión de anticipos sobre certificados vigentes

| Campo | Descripción |
|-------|-------------|
| 💰 **Capital e Interés Anticipado** | Lo que se descuenta de la inversión |
| 🧮 **Asiento Contable** | Número de imputación |
| 🗓️ **Estado y Fecha de Registro** | Control administrativo |

---

## 📂 5. Movimientos AMT

:::info
Presenta el detalle de movimientos relacionados a cada certificado (pagos, renovaciones, ajustes de capital e interés)
Incluye información sobre monto afectado, cotización utilizada, fecha de referencia y sucursal.
::: 

### Historial de operaciones sobre certificados

- 💵 Pagos de intereses  
- 🔄 Renovaciones  
- ⚖️ Ajustes de capital o interés  
- ❌ Cancelaciones previas  

---

## 🔒 6. AMT Inmovilizados
### Lista los certificados que se encuentran inmovilizados (retenidos).

| Campo | Descripción |
|-------|-------------|
| 🗓️ Fecha de emisión y vencimiento | Control de plazos |
| 💰 Capital e interés acumulado | Saldo inmovilizado |
| 🚫 Estado del inmovilizado | Motivo de retención |

Clave para cumplir con requerimientos regulatorios o judiciales que impiden el retiro de fondos.

---

## 📋 7. Listados
### Reportes predefinidos para control y auditoría

- 📝 AMT Resumen de Cuenta  
- 📊 AMT Devengamiento de Intereses  
- 🗓️ AMT por Fecha de Emisión  
- 📚 AMT Cartera y Cartera por Socio  
- 🗑️ Certificados Cancelados  
- ⏳ AMT Vencimientos  
- 📈 AMT Saldos Promedio  

---

## 🛠️ 8. Auxiliares
### Parámetros básicos del módulo AMT

- 💱 Cotización de Moneda: registra y mantiene cotizaciones base  
- 📝 Líneas AMT: define líneas de inversión disponibles  
- 🗂️ Tipos de Movimiento AMT: clasificaciones para cada operación  
- 🧮 Asientos Modelo: plantillas contables para automatización  

---

## ⚙️ 9. Procesos
### Operaciones automáticas y masivas sobre certificados

- 🔒 Inmovilizar AMT: marcar certificados como retenidos  
- 🔓 Anular Inmovilización: liberar certificados retenidos  

---

## 🔑 10. Permisos
### Trazabilidad de acciones por usuario


---

## 📝 11. Flujos Operativos Clave
### Ciclo completo de emisión, renovación, anticipos y cancelación

- 📝 **Emisión de un certificado**: desde AMT se da de alta capital, TNA y condiciones  
- 🔄 **Renovación**: automática o manual  
- 💳 **Anticipo de fondos**: se registra en Anticipos AMT y se visualiza en Cancelación AMT  
- ❌ **Cancelación o vencimiento**: se liquida desde Cancelación AMT generando el asiento contable correspondiente  

---

## 🛡️ 12. Consideraciones de Control

- 📊 Los anticipos y movimientos deben conciliarse con contabilidad (impactan cuentas de pasivo y resultados)  
- ⏳ Revisar periódicamente la lista de vencidos impagos para evitar mora en intereses  
- 💱 Mantener actualizadas cotizaciones de moneda para cálculos correctos  

---

## 🔗 13. Integración Contable
Todas las operaciones generan **asientos automáticos** que pueden revisarse y, de ser necesario, revertirse desde el mismo módulo, asegurando **trazabilidad completa**.
