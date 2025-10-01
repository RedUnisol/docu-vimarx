---
sidebar_position: 9
sidebar_label: Configuración Contabilidad
---

# 📊 Configuración Contabilidad — VIMARX (Guía paso a paso)

:::tip
Objetivo: configurar el módulo Contabilidad en VIMARX, definiendo el plan de cuentas, los asientos modelo, los periodos contables y utilidades adicionales como multimoneda y centros de costos.
:::

---

## 1️⃣ Crear Plan de Cuentas

✔️ Ir a `Contabilidad → Configuración → Planes`  
✔️ Definir el plan de cuentas inicial

:::info
Se permite preparar la estructura en un archivo Excel, construyendo el “árbol” de cuentas:
:::

- **Cuentas contables**: reciben los asientos  
- **Cuentas sumarizadoras**: agrupan las cuentas contables

✔️ Al importar el Excel, el sistema divide en dos partes:  
  • Las sumarizadoras se almacenan en el módulo  
  • Las cuentas contables reciben un código automático

:::tip
Es posible tener más de un plan de cuentas:
:::

- **Principal**: utilizado en balances  
- **Especiales**: subconjuntos para informes específicos (Tesorería, Caja, etc.)

---

## 2️⃣ Configurar Asientos Modelo

✔️ Los asientos modelo funcionan como “esqueletos” contables que se completan automáticamente según la operación vinculada

Ejemplos:

- `Préstamos → Auxiliares → Línea de préstamo → Pestaña contables → Asientos modelo`  
- Otros módulos como Caja de ahorro y AMT también definen sus modelos contables

---

## 3️⃣ Definir Periodos Contables

✔️ Ir a `Contabilidad → Procesos habituales → Periodos contables`  
✔️ Crear los periodos que agruparán los asientos

Opciones disponibles:

- **Casilla Actual**: los asientos automáticos se incluyen en el periodo activo  
- **Estado**: puede ser Abierto o Cerrado (define si se permiten modificaciones)

Acciones disponibles:

- 🔒 **Cierre contable del periodo**: genera el asiento de cierre y apertura del siguiente  
- 🔄 **Arrastre periodo anterior**: permite abrir un nuevo periodo sin cerrar completamente el previo (esta opción se encuentra dentro del modal que se abre al hacer el cierre contable del período)

---

## 4️⃣ Configuración Multimoneda

✔️ Ir a `Contabilidad → Configuración → Multimoneda`  
✔️ Desde el ícono **Nueva cotización** en la barra superior se pueden crear o modificar cotizaciones de moneda

---

## 5️⃣ Configuración de Centros de Costos

✔️ Ir a `Contabilidad → Configuración → Centros de costos`  
✔️ Definir las clases de costos que se usarán en los asientos contables

Al registrar un asiento contable, el centro de costos puede ser:

- ✅ Obligatorio  
- 🟡 Opcional  
- 🚫 No asignado

:::info
Los reportes contables solicitarán el centro de costos según esta configuración
:::