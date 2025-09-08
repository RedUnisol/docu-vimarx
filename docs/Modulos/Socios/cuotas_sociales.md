---
sidebar_position: 3
sidebar_label: Cuotas Sociales
---

# 💳 Cuotas Sociales

:::tip **Objetivo general**
Administrar las **cuotas sociales**, generar resúmenes consolidados y gestionar los cobros y movimientos asociados a cada socio.
:::

---

## 🏆 1. Función principal

El módulo **Cuotas Sociales** tiene dos objetivos clave:

- **Configurar y administrar** la estructura de las cuotas sociales:
  - Tipos de cuota.
  - Montos y periodicidades.
  - Cobradores y parámetros contables.
- **Generar y gestionar resúmenes** que consoliden las cuotas y consumos de cada socio en períodos determinados.

---

## 🧩 2. Estructura y componentes

### 📄 2.1. **Resúmenes**
- Se generan a partir del **proceso de generación de cuotas sociales**.
- Funcionan como el **registro central** de lo que cada socio debe pagar en un período.
- **Información disponible en cada resumen**:
  - Período.
  - Socio.
  - Monto total.
  - Saldo pendiente.
  - Referencias internas.
  - Fecha y método de cobro.
- Todos los movimientos relacionados (cobros, débitos, ajustes) se visualizan en **Movimientos Débitos**.

---

### 💰 2.2. **Movimientos / Débitos**
- **Pagos Débitos:** registro de pagos aplicados a las cuotas sociales.
- **Movimientos Resumen:** historial de modificaciones o movimientos generados sobre el resumen.
- **Débitos:** movimientos de débito aplicados automáticamente o manualmente.

---

### 🧾 2.3. **Pagos de Cuotas y Servicios**
Permite registrar pagos correspondientes tanto a **cuotas sociales** como a **otros servicios** brindados por la entidad.

---

## ⚙️ 3. Parámetros Auxiliares

:::tip **Configuración avanzada**
Los auxiliares son parámetros críticos para que la **generación de resúmenes** y el cálculo de cuotas funcionen correctamente.
:::

- **👤 Cobrador Cuenta**  
  Define el **medio o forma habitual de cobro** asignada a un socio (p. ej.: débito automático, ventanilla).

- **🔄 Novedad Débito**  
  Configuraciones puntuales para **débitos específicos** (excepciones o reglas particulares).

- **📅 Períodos Cuotas**  
  Cada **mes debe tener un período activo** para habilitar la **generación de cuotas**.  
  :::warning
  Si el período no está activo, **no se emitirán cuotas** en el resumen.
  :::

- **🏷️ Tipo Cargo Mutual**  
  Clasifica cargos que se pueden **sumar al resumen** (ej.: seguro, gastos administrativos).

- **⚖️ Cargos Condicional Resumen**  
  Permite agregar cargos **solo bajo condiciones específicas** (*pendiente de definición avanzada*).

- **📌 Tipo Cuota Socio**  
  Define las **tipologías de cuotas** (ej.: Activo, Adherente) e incluye parámetros clave:  
  - **Monto y periodicidad** (mensual, trimestral, etc.)  
  - **Cuenta contable asociada**  
  - **Modelo de asiento** para generación y pago  
  - **Fórmulas o recargos** aplicables  
  - **Código de débito** (para integración bancaria)  
  - **Formato de liquidación** (resumen de socio o servicios)  
  - **Opción de cuota recalculable**  

---

## 🧾 4. Liquidación de Actividades y Servicios

- **📌 Tipo Cuota Socio:** define reglas de cálculo y cobro.
- **🗂️ Liquidaciones:** procesos que agrupan **servicios y cuotas en un mismo período**.
- **🖨️ Formato Liquidación Servicio:** plantillas para presentar la información en el resumen.

---

## 📊 5. Consumos

- Base de datos de **consumos asociados a los socios** (servicios, actividades u otros).
- Estos consumos pueden sumarse **automáticamente** a los resúmenes de cuotas para ser cobrados junto con la cuota social.

---

## 🔄 6. Proceso operativo

1. **⚙️ Configurar todos los auxiliares**: tipos de cuota, cobradores, períodos y cargos.
2. **📥 Cargar consumos o servicios** asociados a socios.
3. **🛠️ Ejecutar el proceso de generación de resúmenes**:
   - Agrupa cuotas sociales y consumos del período.
   - Genera un resumen por socio.
4. **💰 Gestionar cobros y movimientos** desde la sección **Movimientos / Débitos**.
5. **📢 Emitir y entregar resúmenes** a los socios si se requiere.

:::tip **Buenas prácticas**
- ✅ Validar la configuración de **períodos activos** antes de generar resúmenes.
- 🧪 Probar con **un socio de prueba** antes de ejecución masiva.
:::
