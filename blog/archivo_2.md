---
slug: evaluate-escalar
title: "API DevExpress Parte 2: Consultando Valores Únicos y Agregaciones (Evaluate GET)"
date: 2025-10-21T12:00:00.000Z
authors: [unisol]
tags: [api]
---

En esta segunda parte de la serie, nos centraremos en el *endpoint* `GET /api/Empresa/Evaluate`. Este endpoint está diseñado para devolver un valor único o escalar, como la cuenta total de registros, la suma de montos o la verificación booleana de una condición.

<!-- truncate -->

:::info
📌 **Recordatorio:** El *payload* JSON es obligatorio, incluso para peticiones `GET`. Si necesitás repasar la estructura base, consultá la [Parte 1: Payload Universal](/blog/payload-universal-devxpress).
:::

---

## 🎯 1. Propósito y Comportamiento del Endpoint

El endpoint `Evaluate` utiliza el parámetro `cmd` para ejecutar funciones de agregación o expresiones que devuelven un único valor. A diferencia de otros endpoints, `campos` se omite o se establece como `null`, ya que no se espera una lista de propiedades sino un resultado escalar.

| Parámetro Clave | Uso en `/Evaluate` |
|-----------------|--------------------|
| `cmd`           | Función de agregación o expresión (ej. `Count()`, `Sum(Propiedad)`) |
| `campos`        | Se omite o se establece como `null` |
| `max`           | Se omite o se establece en `0` (es ignorado) |

---

## 🧪 2. Ejemplo Básico: Contar Registros

Para obtener el total de registros de una clase específica, se utiliza `Count()` en el campo `cmd`.

**Clase:** `ClasesBase.ContenidoInternet`  
**Endpoint:** `GET {{baseUrl}}/api/Empresa/Evaluate`  
**Payload:**

```json
{
  "cmd": "Count()",
  "tipo": "ClasesBase.ContenidoInternet",
  "campos": null,
  "max": 0,
  "opciones": null
}
```
**Respuesta esperada:** 250 (valor escalar numérico)

---

## 🔍 3. Ejemplo con Criterio: Filtrar y Contar
Podemos combinar funciones de agregación con criterios DevExpress. Por ejemplo, contar cuántas tareas programadas están activas.

**Clase:** `ClasesBase.FAPINET.ScheduledTask`  
**Criterio:** `IsActive == true`  
**Endpoint:** `GET {{baseUrl}}/api/Empresa/Evaluate`  
**Payload:**

```json
{
   "cmd": "Count()",
  "tipo": "ClasesBase.FAPINET.ScheduledTask",
  "campos": null,
  "max": 0,
  "opciones": null
}
```
:::tip Nota sobre cmd 
Si se espera un objeto como resultado, `cmd` puede contener directamente el criterio (ej. `IsActive = True`). En este caso, como buscamos una agregación, mantenemos `Count()` y delegamos el filtrado a una capa posterior o usamos el criterio completo si el endpoint lo permite. 
:::

---

## 📊 4. Ejemplo Avanzado: Verificar Existenciaç

También podemos usar Evaluate para validar si existe al menos un objeto que cumpla una condición.
**Clase:** `F.Module.SocioMutual`  
**Criterio:** `NroDoc = 99999999`  
**Endpoint:** `GET {{baseUrl}}/api/Empresa/Evaluate`  
**Payload:**
```json
{
  "cmd": "NroDoc = 99999999",
  "tipo": "F.Module.SocioMutual",
  "campos": null,
  "max": 0,
  "opciones": null
}
```
**Respuesta esperada:** Un valor booleano o el `Oid` del objeto si existe.

---

## 📌 Próximos Pasos
Continuá con [Post 3: Extrayendo Datos Detallados](/blog/evaluateobj-evaluatelist) para aprender a recuperar información completa de `objetos y listas`.

---


