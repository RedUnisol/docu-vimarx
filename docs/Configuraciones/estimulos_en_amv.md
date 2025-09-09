---
sidebar_position: 2
sidebar_label: Estímulos en AMV
---

# 💰 Carga y Acreditación de Estímulos en Ahorros Mutual Variables (AMV)

:::tip **Objetivo**
Comprender **cómo se calculan y acreditan los estímulos** (intereses) en cuentas AMV dentro de VIMARX, diferenciando conceptos clave y configuraciones.
:::

---

## ✅ 1. Introducción

El módulo **AMV (Ahorros Mutual Variables)** administra los fondos que los socios mantienen en sus cuentas.  
Su función más relevante: **calcular y acreditar los estímulos**, equivalentes a los **intereses** que generan los saldos.

### 📌 **Dos conceptos clave**

| Concepto        | Significado |
|-----------------|-------------|
| **Devengamiento** | Cálculo diario de intereses sobre el saldo. Es **automático** y depende de la fecha de trabajo. |
| **Capitalización** | Acreditación efectiva de esos intereses en la cuenta. A partir de aquí, los estímulos se suman al saldo y generan nuevos intereses. |

:::info **Importante**
Hasta que no se capitaliza, el socio **no ve disponible** ese dinero ni se refleja en contabilidad.
:::

---

## 🧩 2. Formas de Devengamiento y Capitalización

VIMARX permite distintas frecuencias para acreditar estímulos:

- **Mensual (recomendado):**  
  - Cálculo diario, acreditación **al final del mes**.  
  - Simplifica contabilidad y reduce movimientos.

- **Desde el último proceso:**  
  - Toma como referencia la última capitalización.  
  - Ideal para **intervalos flexibles** (quincenal, semanal).

- **Diaria:**  
  - Se acreditan todos los días.  
  - Aumenta movimientos → mayor carga operativa.  
  - Requiere definir si **usa interés compuesto**.

:::warning **Atención**
Si los intereses diarios se suman al saldo base, se genera **interés compuesto**, lo que incrementa el costo financiero.
:::

---

## 📊 3. Configuración de Tasas

Para calcular estímulos, **cada tipo de cuenta AMV** debe tener definidas sus tasas:

- Se configura en:  
  **Cuentas → Auxiliares → Tipo de cuenta → Pestaña AMV Tasas**.

### 🛠 **Reglas principales**

- Cada cuenta AMV pertenece a un **tipo de cuenta**.  
- Las tasas se cargan con:
  - **Fecha de vigencia** (desde cuándo aplica).  
  - **Porcentaje mensual**.  
- Si cambia la tasa, **NO se edita la anterior** → se agrega un nuevo registro (histórico).

### 🔍 **Ejemplo de cambio de tasa**
- 01/09 → **6% mensual**  
- 01/10 → **7% mensual** (nuevo registro)

### 📈 **Tasas por rangos**
| Rango de saldo          | Tasa |
|-------------------------|------|
| Hasta $1.000.000       | 5%   |
| $1.000.001 a $5.000.000| 7%   |
| Más de $5.000.000      | 0%   |

:::info **Beneficio**
Permite imitar esquemas de bancos, fijando **topes de remuneración**.
:::

---

## ⚙️ 4. Generación y Acreditación de Intereses

Dos formas de capitalizar:

### **✔ Manual**
- Desde:  
  **Cuentas AMV → Herramientas → Generar intereses**.
- Aplicable a:  
  - Todas las cuentas.  
  - Selección específica.  
  - Según criterios (ej. tipo de cuenta).

✅ Útil para pruebas o bajas de socios.

---

### **✔ Automática (Tareas Programadas)**
- Se configura un **comando específico**:  
  `AMB_ACREDITACION_ESTIMULO`
- Se ejecuta mediante el **Programador de Tareas de Windows**.
- Permite:
  - Capitalización **diaria**, **semanal** o **mensual** sin intervención.

:::info **Contabilidad**
Cada capitalización genera un **asiento automático** del tipo  
*“Capitalización de estímulos”*, que **no mueve caja**, solo cuentas contables internas.
:::

---

## 🔍 5. Supervisión y Control

Para asegurar el correcto funcionamiento:

- ✅ **Monitoreo de logs:**  
  Cada tarea queda registrada con estado **OK/Error** y detalle.
- ✅ **Conciliación contable:**  
  Revisar que asientos y montos coincidan.
- ✅ **Pruebas progresivas:**  
  Comenzar con pruebas manuales antes de automatizar.

---

## ⚠️ 6. Consideraciones Operativas

- **Volumen de cuentas:**  
  - Miles de cuentas → evitar acreditación diaria (carga alta).
- **Visualización al socio:**  
  - ¿Verá intereses **devengados** o solo **capitalizados**?
- **Casos excepcionales:**  
  - Baja de socios → definir procedimiento.

---

## ✅ Conclusión
:::note
El módulo AMV brinda flexibilidad para definir **cómo y cuándo** se calculan y acreditan los estímulos.

Las decisiones deben equilibrar:
1. **Transparencia para el socio**  
2. **Estabilidad operativa**  
3. **Coherencia contable**

Con **buena configuración y monitoreo**, es posible ofrecer un producto confiable y competitivo.
:::
