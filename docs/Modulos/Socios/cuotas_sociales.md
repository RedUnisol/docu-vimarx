---
sidebar_position: 3
sidebar_label: Cuotas sociales
---

# 💳 Cuotas Sociales

:::tip Rol
El submódulo **Cuotas Sociales / Servicios / Resúmenes** centraliza la gestión de las obligaciones periódicas de los socios.  
Permite **generar, revisar, cobrar y contabilizar** cada resumen de cuenta, consolidando información de cuotas, servicios y conceptos asociados a la mutual.
:::

---

## 🖥️ 1. Pantalla Principal – Listado de Resúmenes

:::info Vista inicial
Listado tabular de todos los resúmenes generados, organizados por período y socio. Incluye filtros dinámicos y acceso rápido al detalle.
:::

### 🔑 1.1 Columnas principales

| 🏷️ Campo | 📌 Descripción |
|-----------|----------------|
| **Descripción** | Nombre del resumen (ej. 2022-11 ARTAZA LUIS CESAR) |
| **Período** | Mes y año de la liquidación (AAAA-MM) |
| **Socio** | Nombre del socio titular |
| **Monto Total** | Total de cuotas y servicios incluidos |
| **Debe** | Indicador de deuda pendiente (checkbox) |
| **Saldo Pendiente** | Monto adeudado |
| **Referencia** | Referencia opcional para integración externa |
| **Pagada** | Fecha de cancelación de la deuda |
| **Cobrador** | Responsable del cobro |
| **Nro Lote** | Número de lote si fue generado masivamente |
| **Socio Mutual** | Código interno para integraciones |

### 🔎 1.2 Funcionalidad

- 🔍 Filtrado por período, socio o monto.  
- ✨ **Doble clic** sobre un resumen → abre el detalle completo.  
- 📊 Ordenamiento por cualquier columna para análisis rápido.

---

## 🖱️ 2. Pantalla de Detalle – Resumen Individual

:::tip Gestión completa
Permite visualizar y administrar todas las cuotas y servicios asociados al resumen seleccionado.
:::

### 📋 2.1 Campos principales

- **Descripción:** Nombre del resumen.  
- **Período:** Mes y año de liquidación.  
- **Monto Total:** Suma de todos los ítems incluidos.  
- **Debe / Saldo Pendiente:** Estado de deuda actual.  
- **Lista Socios:** Composición de cuotas y a quién corresponde cada ítem.  
- **Cobrador / Nro Lote:** Información administrativa.  
- **Creado:** Fecha y usuario que generó el resumen.  
- **Socio Mutual:** Nombre y documento del socio asociado.

### 📊 2.2 Pestañas de Ítems

Listado detallado de cuotas y servicios que componen el resumen:

| 🏷️ Campo | 📌 Descripción |
|-----------|----------------|
| **Tipo** | Categoría de la cuota (ej. Cuota C Mutual Cat A) |
| **Descripción** | Detalle de la cuota o servicio |
| **Monto** | Valor monetario de cada concepto |
| **Nota** | Observaciones internas |
| **Socio** | Nombre del socio asociado a cada ítem |
| **Liquidación / Asiento** | Referencias para integración contable |

---

## ⚡ 3. Acciones Disponibles

- 🛑 **Anular / Pagar:** Gestionar pagos manuales o anular resúmenes.  
- 📤 **Exportar:** Generar reportes o enviar resúmenes por correo.  
- 🧾 **Generar Asiento:** Crear automáticamente el asiento contable asociado.  
- ❌ **Anular Cuota:** Cancelar cuotas individuales sin afectar el resto.  
- ✅ **Diagnóstico:** Validar coherencia de datos antes de confirmaciones masivas.

---

## 🔄 4. Flujo de Uso Típico

El uso del submódulo sigue un patrón operativo que garantiza trazabilidad y control:

1. **Consulta de resúmenes existentes:**  
   Buscar por socio, período o monto para revisar el estado de cuentas.  
2. **Creación de nuevo resumen:**  
   Generar resúmenes masivos o individuales según las cuotas y servicios del período.  
3. **Gestión de pagos:**  
   Registrar pagos, abonar deudas parciales o anular resúmenes cuando corresponda.  
4. **Control y verificación:**  
   Validar coherencia de datos mediante diagnóstico antes de confirmar cobros masivos o generar asientos contables.  
5. **Exportación e integración:**  
   Enviar reportes a cobradores, contabilidad o sistemas externos, garantizando uniformidad y trazabilidad.  

---

:::note 💡 Beneficios

El submódulo permite una **gestión completa y centralizada** de los resúmenes de cada socio:

- **Automatización de procesos:** Generación masiva de resúmenes periódicos, con cálculo automático de montos y deudas.  
- **Control y seguimiento:** Monitoreo del estado de pago de cada socio, permitiendo identificar deudas, pagos parciales o saldos a favor.  
- **Integración operativa:** Conexión directa con cobradores, lotes de liquidación y módulos contables para garantizar coherencia y eficiencia.  
- **Flexibilidad y trazabilidad:** Gestión individual de cuotas y servicios, manteniendo un historial completo de cada operación, útil para auditorías internas y regulatorias.  

:::
