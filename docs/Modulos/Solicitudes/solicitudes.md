---
sidebar_position: 1
sidebar_label: Solicitudes
---

# 📝 Solicitudes

:::tip Rol
El submódulo **Solicitudes** centraliza la gestión de los pedidos de préstamos de los socios, abarcando todas las etapas del ciclo:  
**Carga inicial → Preevaluación → Aprobación → Rechazo → Liquidación**.  

También administra a **agentes, ejecutivos y vendedores** involucrados en el flujo de originación, asegurando trazabilidad y control sobre cada operación.
:::

---

## 📊 1. Listado de Solicitudes – Evaluación Inicial

:::info  
La pantalla principal muestra un **listado tabular** con todas las solicitudes registradas en el sistema, incluyendo datos clave para una rápida evaluación.
:::

### 🧮 1.1 Columnas principales

| 🗓️ Fecha | 🔢 Nro Solicitud | 👤 Socio | 📌 Estado | 💵 Monto | 📄 TYC Aceptado | 🧾 Préstamo | 🏷️ Línea |
|---------|------------------|----------|-----------|-----------|----------------|-------------|------------|
| Día de ingreso | Identificador único | Nro y nombre | Preaprobado, Liquidada, etc. | Importe solicitado | Fecha de aceptación | Nro generado | Producto crediticio |

:::note  
Con los **filtros avanzados** (por estado, socio, línea o fecha) es posible localizar solicitudes específicas en segundos.  
Un **doble clic** sobre cualquier fila abre la ficha detallada del caso.
:::

---

## 🔍 2. Ficha de Solicitud – Vista Detallada

:::info  
La ficha concentra toda la información de un pedido y se organiza en secciones claras:
:::

### 📋 2.1 Datos de la Solicitud

- 🆔 Identificadores únicos  
- 🔄 Estado editable  
- 🗒️ Última novedad registrada  
- 🧠 Observaciones internas  
- 📊 Análisis crediticio (saldo, ratio de renovación, etc.)

### 👤 2.2 Datos del Socio

- 🪪 Identidad y categoría societaria  
- 🎁 Beneficios asociados  
- 📞 Contacto  
- 🏦 Cuentas bancarias

### 🗂️ 2.3 Pestañas Funcionales

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="simulador" label="🧮 Simulador Préstamo">
    Recalcula cuotas y condiciones según línea seleccionada.
  </TabItem>
  <TabItem value="adjuntos" label="📎 Adjuntos">
    Carga de documentación respaldatoria (DNI, recibos, etc.).
  </TabItem>
  <TabItem value="novedades" label="🕓 Novedades">
    Historial de cambios y observaciones internas.
  </TabItem>
  <TabItem value="prestamos" label="📚 Préstamos">
    Detalle de préstamos activos e históricos del socio.
  </TabItem>
</Tabs>

---

## 🏢 3. Gestión de Actores – Roles Jerárquicos

:::info  
Este módulo no solo administra las ***solicitudes***, sino también a los actores que intervienen en ellas.
:::

### 🧑‍💼 3.1 Estructura de Roles

| Rol | Función | Parámetros |
|-----|---------|------------|
| 🏦 **Agente** | Origina solicitudes | Nombre, usuario, ejecutivo predeterminado, límites |
| 👨‍💼 **Ejecutivo** | Evalúa y aprueba | Límites de aprobación, relación con agentes |
| 🛍️ **Vendedor** | Comercializa productos | Montos máximos, comisiones, usuarios vinculados |


---

## 🔄 4. Flujo Operativo – Caso Real

1. 🧍‍♂️ El socio solicita un préstamo  
2. 🖥️ El operador carga datos: socio, línea, monto  
3. 🔍 Pasa a **preevaluación** → validación documental y análisis crediticio  
4. ✅ Si cumple requisitos → aprobación por ejecutivo  
5. 💸 **Liquidación** → desembolso en cuenta bancaria  
6. 📁 Cierre y seguimiento en pestañas como **Novedades** y **Préstamos**

---

:::note ✅ Beneficios Institucionales
 
- 🔍 **Trazabilidad completa** → seguimiento desde el origen hasta el cierre  
- ⚙️ **Automatización** → simulador + generación automática de cuentas  
- 🧭 **Control jerárquico** → distribución clara entre agentes, ejecutivos y vendedores  
- 🧾 **Transparencia** → bitácora de estados y novedades para auditoría interna
:::