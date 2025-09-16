---
sidebar_position: 5
sidebar_label: Cuentas
---

# 💳  Cuentas – AMV (Ahorro Mutual Variable)

:::tip rol
📌 **Objetivo:** El módulo **Cuentas** centraliza la administración de las cuentas AMV (Ahorro Mutual Voluntario), tanto en pesos como en otras monedas, junto con los movimientos asociados, indicadores y procesos auxiliares.  
Constituye una herramienta clave para la gestión financiera de la mutual, ya que permite registrar, controlar y conciliar todas las operaciones vinculadas a los socios.
:::

---

## 📑 1. Movimiento AMV

### 🖥️ Vista General  
La vista **Movimiento AMV** presenta el listado de movimientos asociados a las cuentas AMV. Cada registro refleja la operación realizada por un socio, con campos que detallan:

| 📂 **Campo**                     | 📝 **Descripción**                                                      |
|---------------------------------|------------------------------------------------------------------------|
| 📄 **Cuenta AMV y Miembro**      | Identificación de la cuenta y del socio                                 |
| 🔄 **Tipo de movimiento**        | Crédito, Débito, Cancelación AMT, Liquidación, Transferencias, etc.      |
| 📅 **Fecha y Fecha de referencia** | Fechas principales del movimiento                                      |
| 💰 **Monto e Impacto**           | Débito/Crédito y su valor                                               |
| 🧾 **Nro. de Lote y Asiento contable** | Referencias contables                                                |
| 📝 **Notas u observaciones**     | Información adicional                                                   |

Esta vista permite un control global de los movimientos diarios, con posibilidad de filtrar por fecha, socio o tipo de operación.

### 🔍 Vista Individual  
Al ingresar en un movimiento específico, se accede a un detalle ampliado:

- 📄 **Cuenta AMV y socio asociado**  
- 💰 **Monto total de la operación**  
- 🔄 **Tipo de movimiento** (ej. Crédito FAUM, Débito FAUM, Cancelación AMT, etc.)  
- 📝 **Diagnóstico y notas**  
- ⛔ **Opciones de anulación o reverso**

🔗 Los movimientos registrados en esta vista alimentan directamente la contabilidad del sistema y se reflejan en los indicadores de cuentas.

---

## 🗂️ 2. Movimiento AMV Múltiple

Este submódulo permite visualizar y gestionar en forma consolidada los movimientos de múltiples socios.  
Resulta útil para operaciones masivas como otorgamientos de préstamos, acreditaciones de estímulos o cancelaciones conjuntas.

- 📄 Presenta listado con socio, tipo de operación, fecha, monto total y notas.  
- 📝 Facilita la auditoría de movimientos realizados en lote.  
- ⚙️ Es utilizado también para validar procesos automáticos vinculados a préstamos u otras operaciones recurrentes.

---

## 💵 3. Cuentas AMV Pesos

### 🖥️ Vista General  
En la vista de **Cuentas AMV Pesos** se listan todas las cuentas activas de socios en moneda local. Incluye:

| 📂 **Campo**                 | 📝 **Descripción**                                     |
|------------------------------|-------------------------------------------------------|
| 🔢 **Número de cuenta y estado** | Activa/Inactiva                                        |
| 👤 **Miembro titular**        | Titular de la cuenta                                  |
| 💰 **Saldo AMV y observaciones** | Saldo actual y comentarios                           |
| 🏦 **Cuenta vinculada, CUIT y documento** | Datos identificatorios del socio               |

### 🔍 Vista Individual  
Dentro de una cuenta específica se visualizan:

- 👤 **Datos del socio** (nombre, documento, CUIT)  
- 💰 **Saldo actual, saldo futuro, intereses y márgenes otorgados**  
- 📄 **Estado y firma de la cuenta**  
- 🧾 **Movimientos históricos** con detalle de fecha, tipo (crédito/débito), monto, asiento contable y notas.

Este submódulo permite la gestión integral de cada cuenta en pesos, vinculando las operaciones a indicadores financieros.

---

## 📊 4. Indicador AMV

El submódulo **Indicador AMV** funciona como un tablero de control que refleja la evolución de las cuentas, ya sea en pesos o en otras monedas.

| 📂 **Indicador**           | 📝 **Descripción**                                  |
|----------------------------|----------------------------------------------------|
| 📅 **Fecha de referencia**  | Fecha a partir de la cual se generan los indicadores |
| 💰 **Saldo capital**        | Suma de capital de todos los AMV                   |
| 📈 **Saldo inventario**     | Intereses acumulados                               |
| ⚙️ **Tasa aplicada**        | Tasa de interés vigente                            |
| 🏢 **Dimensión y sucursal** | Datos de segmentación                              |

Permite comparar información histórica y consolidada.  
✅ Esta herramienta es clave para el análisis financiero y la toma de decisiones de la mutual.

---

## 💱 5. Cuentas AMV Otras Monedas

### 🖥️ Vista General  
Permite administrar las cuentas AMV en monedas extranjeras (ejemplo: dólares).

| 📂 **Campo**                    | 📝 **Descripción**                             |
|--------------------------------|-----------------------------------------------|
| 🔢 **Número de cuenta y tipo**  | AMV Dólar, Ayuda Mora, etc.                   |
| 📄 **Estado de la cuenta**      | Activa/Inactiva                               |
| 👤 **Socio titular y observaciones** | Datos identificatorios del socio        |
| 💰 **Saldo AMV, cuenta vinculada, CUIT y documento** | Datos financieros y legales       |

### 🔍 Vista Individual  
Similar a la vista de cuentas en pesos, pero con detalle adicional de moneda asociada. Incluye:

- 👤 **Datos del socio y fecha de alta**  
- 💵 **Saldos actuales y futuros en moneda extranjera**  
- 🧾 **Movimientos registrados** (depósitos, extracciones, transferencias)  
- 📄 **Estado y firma de la cuenta**

---

## 🧾 6. VAC (Valores A Cobrar)

El submódulo **VAC** concentra los procesos de novedad de valores AMV y la gestión de lotes de movimientos.

- 📝 Permite registrar y procesar valores a cobrar de los socios.  
- 📂 Incluye herramientas de importación masiva por archivo.  
- 🔗 Se vincula con las solicitudes de transferencia y los listados de saldos y movimientos.

---

## 🔄 7. Débito Socio

### 🖥️ Vista General  
Permite administrar los débitos automáticos asociados a socios, tanto para impuestos y servicios como para débitos recurrentes.

| 📂 **Campo**                     | 📝 **Descripción**                              |
|--------------------------------|------------------------------------------------|
| 👤 **Nombre del socio**          | Socio al que se le aplica el débito            |
| 🔄 **Tipo de débito**            | Impuestos, servicios, débitos recurrentes       |
| 📅 **Fecha**                    | Fecha de ejecución del débito                  |
| 💰 **Monto debitado y saldo resultante** | Resultado posterior al débito         |

Incluye funciones de **importar y exportar débitos** para conciliación bancaria.

#### 🔹 Submódulos
- 🏛️ **Impuestos y Servicios:** para registrar y ejecutar débitos vinculados a servicios específicos.  
- ♻️ **Débito Automático Socio:** gestiona débitos recurrentes de cuotas, préstamos o compromisos asumidos por el socio.

---

## 📋 8. Listados

Dentro de este bloque se encuentran reportes preconfigurados:

- 📑 **AMV Saldos:** situación actual de las cuentas AMV.  
- 🧾 **AMV Movimientos:** detalle de operaciones realizadas en un rango de fechas.  
- 📜 **AMV Resumen de Cuenta:** visión global por socio, con movimientos y saldos consolidados.

---

## 🛠️ 9. Auxiliares

Los auxiliares agrupan configuraciones y herramientas de soporte:

| 🛡️ **Auxiliar**                       | 📝 **Descripción**                                    |
|--------------------------------------|------------------------------------------------------|
| 🛡️ **Permisos AMV**                   | Definición de accesos                                 |
| 🔧 **Tipo de Cuenta / Tipo de Movimiento AMV** | Parametrización de operaciones           |
| 🧾 **Asiento Modelo AMV**              | Configuración contable de los asientos automáticos    |
| 📈 **Novedad de Tasas**                | Actualización de tasas aplicadas a cuentas           |
| 📄 **Referencias de Cuenta y Todas las cuentas** | Consultas transversales                     |
| ⚙️ **Definición de Proceso AMV**       | Automatizaciones del flujo de operaciones            |
| 🏦 **Cuentas Recaudaciones**           | Administración de cuentas destinadas a la cobranza   |

---

## ✅ Conclusión

:::note
El módulo **Cuentas** constituye el núcleo operativo de la gestión AMV en el ERP. Su estructura modular permite:

- 📑 Registrar y controlar movimientos financieros de cada socio.  
- 💵 Gestionar cuentas en pesos y en moneda extranjera.  
- 🔄 Automatizar débitos y valores a cobrar.  
- 📊 Acceder a indicadores e informes consolidados para la toma de decisiones.

De esta manera, se asegura un seguimiento **integral**, **trazable** y **auditable** de todas las operaciones financieras relacionadas con socios dentro de la mutual.
:::
