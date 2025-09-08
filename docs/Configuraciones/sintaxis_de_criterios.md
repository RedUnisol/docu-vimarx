---
sidebar_position: 0
sidebar_label: Sintaxis de criterios
---

# Sintaxis de Criterios (DevExpress) para VIMARX

:::tip **Objetivo**
Convertir el lenguaje de criterios de DevExpress en algo **aprendible y confiable** para personas no técnicas de VIMARX.
:::

No necesitás saber programar: traducimos **ideas de negocio → criterios prácticos**, explicando **por qué sirve** y **cómo evitar errores comunes**.

---

## ✅ 1. ¿Qué es un “criterio” y por qué importa?

Un **criterio** es una frase que indica **qué registros querés ver** y cuáles no.  
Es como decirle al sistema:

> **“Mostrame los socios activos de la Sucursal Córdoba dados de alta este año.”**

### **¿Por qué usar criterios en VIMARX?**

- ✅ **Ahorra tiempo:** filtrás desde el origen.
- ✅ **Evita errores:** todos trabajan con la misma base.
- ✅ **Reutilizable:** guardás el criterio y lo aplicás de nuevo.

:::info **Importante**
Un criterio **NO borra ni modifica datos**, solo selecciona qué se muestra.
:::

---

## 🧩 2. De la idea al criterio (de humano a sistema)

Todo criterio se compone de:

    `[Campo] Operador Valor`

**Pasos:**

1. **Decí la intención:**  
   “Operaciones aprobadas del último mes en Córdoba por más de 100.000”.
2. **Detectá campos:**  
   `[Estado], [FechaOperacion], [Sucursal], [Importe]`
3. **Elegí operadores:**  
   `=, InDateRange, =, >`
4. **Formateá valores:**  
   `'Aprobada', #2025-09-01#, 100000`
5. **Usá paréntesis si mezclás AND / OR.**

### **Resultado:**

    `[Estado]='Aprobada' And [Sucursal]='Córdoba'
    And InDateRange([FechaOperacion], AddMonths(Today(), -1), Today())
    And [Importe] > 100000`

---

## 🔍 3. Campos y valores

:::tip **Regla general**

- **Campos:** `[NombreCampo]`
- **Texto:** `'Activa'`
- **Números:** `1500` (sin coma)
- **Fechas:** `#2025-09-03#`
  :::

### **Ejemplos**

    `[Sucursal] In ('Córdoba','Villa María')
    [Importe] Between (50000, 100000)
    [Nombre] Like 'Mar%'
    `

---

## 🔑 4. Operadores esenciales (90% de uso)

| Operador  | Significado   | Ejemplo                                        |
| --------- | ------------- | ---------------------------------------------- |
| `=`       | Igual a       | `[Estado]='Activo'`                            |
| `!=`      | Distinto de   | `[Estado]!='Baja'`                             |
| `>` `<`   | Mayor / Menor | `[Importe]>10000`                              |
| `Between` | Entre         | `[Fecha] Between (#2025-01-01#, #2025-12-31#)` |
| `In`      | Lista         | `[Sucursal] In ('Córdoba','Rosario')`          |
| `Like`    | Patrón        | `[Nombre] Like 'Mar%'`                         |

---

## 📅 5. Fechas y períodos útiles

:::info **Funciones para no calcular a mano**

- Hoy: `Today()`
- Ahora: `Now()`
- Este mes: `IsThisMonth([Fecha])`
- Últimos 30 días: `[Fecha] >= AddDays(Today(), -30)`
  :::

### **Ejemplos completos:**

    `[FechaAlta] = Today()           -- sólo fecha de hoy (00:00)`
