---
slug: evaluateobj-evaluatelist
title: "API DevExpress Parte 3: Extrayendo Datos Detallados (EvaluateObj y EvaluateList)"
date: 2025-10-21T16:00:00.000Z
authors: [unisol]
tags: [api]

---

Los *endpoints* `EvaluateObj` y `EvaluateList` son fundamentales para obtener conjuntos de datos complejos. A diferencia de `Evaluate` (que devuelve un solo valor escalar), estos endpoints devuelven propiedades de objetos basadas en el criterio proporcionado en `cmd`.

Ambos utilizan el método **POST** y requieren la [estructura de Payload Universal](/blog/payload-universal-devxpress).

<!-- truncate -->

---

## 🔍 1. Búsqueda de un Objeto Único (`POST /EvaluateObj`)

`EvaluateObj` está diseñado para devolver **el primer objeto** que satisfaga la expresión en `cmd`. Si se encuentran varios, solo se devuelve el primero.

### A. Uso de `tipo`, `cmd` y `campos`

Debemos especificar la clase en `tipo` y la condición de búsqueda en `cmd`. El parámetro `campos` es crucial aquí, ya que define qué propiedades se extraerán del objeto encontrado.

**Ejemplo: Buscar Socio por Documento y Seleccionar Campos**  
Buscamos un socio (`F.Module.SocioMutual`) con un número de documento (`NroDoc`) específico y extraemos su nombre completo y email.

**Endpoint:** `POST {{baseUrl}}/api/Empresa/EvaluateObj`  
**Payload:**

```json
{
  "cmd": "NroDoc = 99999999",
  "tipo": "F.Module.SocioMutual",
  "campos": "NombreCompleto;Email",
  "max": 1,
  "opciones": null
}
```
📛 **Advertencia:** Si el socio no existe, recibirás el error **500**: No existe objeto con esas condiciones.

### B. Navegación en Propiedades Anidadas
Podemos usar `campos` para navegar a través de relaciones entre objetos utilizando la notación de punto (.).
**Ejemplo de Ruta de Propiedad Compuesta:**
Si la clase `F.Module.Cuentas.Prestamos.GarantiaCuenta` tiene una relación con `Persona` y queremos obtener la descripción de la garantía y el nombre completo de la persona:
```json
{
  "campos": "Descripcion;Persona.NombreCompleto"
}
```
:::tip Regla crítica
 Usá punto y coma (`;`) para separar las propiedades. Nunca comas ni espacios. 
:::

---

## 📋 2. Extracción de Listas (`POST /EvaluateList`)
`EvaluateList` devuelve una colección de objetos que cumplen con el criterio en `cmd`.
### A. Controlando el Resultado con `max`
Este es el único endpoint donde el parámetro `max` tiene efecto, limitando la cantidad de filas devueltas. Esto es vital para controlar el rendimiento y la memoria.
**Ejemplo: Listar los últimos 5 Movimientos AMV**
Buscamos los últimos 5 movimientos AMV (`F.Module.Cuentas.amv.MovimientoAMV`) donde el monto sea mayor a 1000.
**Endpoint:** `POST {{baseUrl}}/api/Empresa/EvaluateList`  
**Payload:**
```json
{
  "cmd": "Monto > 1000",
  "tipo": "F.Module.Cuentas.amv.MovimientoAMV",
  "campos": "Fecha;Monto;Nota;Tipo.Descripcion",
  "max": 5,
  "opciones": null
}
```
📤 **Respuesta esperada:** Un arreglo de objetos JSON, donde cada objeto contiene solo los campos solicitados (`Fecha`, `Monto`, `Nota`, y `Tipo.Descripcion`).

---

### B. Consideraciones de Rendimiento
Evitá usar valores de `max` excesivamente altos. El servidor podría responder con un error 500 (*OutOfMemory*) si intenta procesar un conjunto de datos demasiado grande.

---
