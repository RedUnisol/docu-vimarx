---
sidebar_position: 2
sidebar_label: Préstamos
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 💳 Préstamos

:::tip rol
Este módulo permite administrar de forma integral la operatoria crediticia de la mutual, desde la generación de nuevas operaciones hasta su cancelación.  
Centraliza información de préstamos, cuotas, cobros y débitos automáticos, asegurando trazabilidad, control contable y seguimiento de cartera.
:::

---

## 🧮 1. Vista General de Préstamos

El panel principal presenta la cartera en diferentes vistas operativas:

| 🗂️ Vista | 📌 Descripción |
|---------|----------------|
| Últimos 20 Préstamos | Acceso rápido a operaciones recientes |
| Cartera Completa / Rápida / Analítica | Listados filtrables con datos clave: número, socio, capital, tasa, cuotas, vencimiento, saldo |
| Cartera Punitórios | Foco en préstamos en mora, con intereses y cargos generados |

:::note
La tabla permite ordenar y filtrar por cualquier columna, ofreciendo una visión consolidada de la situación crediticia.
:::

---

## 📋 2. Ficha de Préstamo – Detalle Operativo

Al seleccionar un préstamo, se despliega su ficha con información estructurada:

### 👤 2.1 Datos del Socio

- Número de socio  
- Titularidad y relación (titular, codeudor)  
- Sucursal y dependencia  
- Garantías asociadas

### 💰 2.2 Condiciones Financieras

- Línea de préstamo  
- Monto solicitado y desembolsado  
- Capital original  
- Tasa de interés  
- Destino (consumo, refinanciación, etc.)

### 📑 2.3 Gestión Contable

- Número de asiento  
- Planilla y orden de compra  
- Período de imputación

### 📌 2.4 Estado de la Cuenta

- Activa  
- Cancelada  
- Refinanciada  
- En mora

### 🗂️ 2.5 Pestañas Funcionales

<Tabs>
  <TabItem value="cuotas" label="📆 Cuotas">
    Calendario de vencimientos con capital, interés y cargos.
  </TabItem>
  <TabItem value="movimientos" label="🔄 Movimientos">
    Pagos, ajustes, refinanciaciones y reestructuraciones.
  </TabItem>
  <TabItem value="garantias" label="🛡️ Garantías">
    Información sobre garantías asociadas al préstamo.
  </TabItem>
  <TabItem value="documentacion" label="📎 Documentación">
    Archivos adjuntos digitalizados.
  </TabItem>
  <TabItem value="debito" label="🏦 Procesos Débito">
    Historial de débitos automáticos aplicados.
  </TabItem>
</Tabs>

---

## 📆 3. Administración de Cuotas

El submódulo permite monitorear y gestionar cada vencimiento.

### 🧾 3.1 Vista General

| Campo | Descripción |
|-------|-------------|
| 📅 Vencimiento | Fecha límite de pago |
| 💳 Fecha de cobro | Registro del pago |
| 💰 Saldo | Capital, interés y cargos |
| 📌 Estado | Pagada, pendiente, vencida |
| 🧾 Asiento contable | Referencia contable asociada |

### 🔍 3.2 Detalle de Cuota

Desglose del monto total:

- Capital  
- Intereses  
- Gastos  
- Punitorios  
- Historial de movimientos

:::tip
Desde esta pantalla se pueden aplicar pagos parciales, registrar ajustes y generar comprobantes de cancelación.
:::

---

## 💵 4. Gestión de Cobros

Centraliza los pagos recibidos de los socios.

### 📋 4.1 Listado General

- Fecha  
- Número de cuota  
- Socio  
- Importe abonado  
- Método de pago

### 🔍 4.2 Detalle de Cobro

- Imputación a capital e interés  
- Ajustes aplicados  
- Usuario que registró el cobro  
- Observaciones

:::note
Incluye pestañas auxiliares para visualizar ajustes, cambios y procesos automáticos asociados.
:::

---

## 🏦 5. Procesos de Débito Automático

Administra la cobranza masiva vía débito en cuenta o CBU.

### 📂 5.1 Vista Principal

| Campo | Descripción |
|-------|-------------|
| 📅 Fecha | Ejecución del proceso |
| 👤 Cobrador | Usuario responsable |
| 📄 Archivo | Excel o TXT |
| 📌 Estado | Aprobado, rechazado, enviado |
| 🗒️ Observaciones | Comentarios operativos |

### ⚙️ 5.2 Detalle de Proceso

Parámetros configurables:

- Formato de archivo  
- Fecha de referencia y cálculo de punitorios  
- Validación de CBU  
- Selección de cuotas  
- Permitir pagos fuera de orden  
- Adelantos a cuenta  
- Monto mínimo a debitar  
- Sucursal de imputación

:::tip
El resultado incluye cuotas seleccionadas, procesadas, rechazadas y monto total.  
Este procedimiento garantiza cobranzas automáticas controladas y trazables.
:::

---

## 🔄 6. Flujo Operativo – Recorrido Institucional

1. 🧍‍♂️ El socio solicita un préstamo  
2. 🖥️ El operador carga los datos y condiciones  
3. 📊 El sistema genera la ficha y pasa a evaluación  
4. ✅ Si se aprueba, se registra el desembolso  
5. 📆 Se activan cuotas y procesos de cobro  
6. 🧾 Se registran pagos, ajustes y débitos automáticos  
7. 📁 Toda la operación queda trazada y disponible para auditoría

---

:::note ✅ Beneficios
  - **Trazabilidad completa** → Registro de eventos con fecha, usuario y observaciones  
  - **Integración contable** → Asientos automáticos para conciliación financiera  
  - **Gestión de mora y punitorios** → Cálculo automático y seguimiento judicial  
  - **Control de políticas de crédito** → Ratio de renovación y validaciones previas  
  - **Soporte documental** → Adjuntos desde la ficha de préstamo (pagarés, garantías)
:::
