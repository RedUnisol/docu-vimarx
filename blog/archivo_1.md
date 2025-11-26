---
slug: payload-universal-devxpress
title: "Estructura del Payload JSON para la API DevExpress"
date: 2025-10-21T08:00:00.000Z
authors: [unisol]
tags: [api]
---

La **API** de DevExpress ofrece tres *endpoints* principales para realizar consultas de evaluación, agrupados bajo la suite `Evaluate`:

- `GET /api/Empresa/Evaluate`
- `POST /api/Empresa/EvaluateObj`
- `POST /api/Empresa/EvaluateList`

<!-- truncate -->

:::info
Aunque cada uno tiene un propósito distinto (conteo/valores escalares, obtener un objeto, obtener una lista), todos comparten una misma **estructura universal de carga útil (payload) JSON**. Comprender esta estructura y sus reglas de sintaxis es clave para evitar errores y garantizar respuestas exitosas.
:::

---

## 🧱 1. Estructura del Payload JSON

El cuerpo de la solicitud HTTP debe incluir los siguientes campos:

| Parámetro   | Descripción                                                                 | Requisito        |
|-------------|------------------------------------------------------------------------------|------------------|
| `cmd`       | Expresión de consulta en lenguaje de criterios DevExpress.                  | Obligatorio, excepto en agregaciones puras (`Evaluate`). |
| `tipo`      | Nombre exacto del tipo desde el BOModel, incluyendo *namespace*.            | Obligatorio.     |
| `campos`    | Lista de propiedades o rutas de propiedades a recuperar.                    | Opcional.        |
| `max`       | Límite superior de filas a devolver.                                        | Opcional (`EvaluateList`). |
| `opciones`  | Parámetro reservado; debe dejarse nulo o vacío.                             | Opcional.        |

---

## ⚠️ 2. Reglas de Sintaxis y Errores Comunes

Errores en la sintaxis del payload son la causa más frecuente de fallas. Estos son los puntos críticos a tener en cuenta:

### A. Sensibilidad a Mayúsculas en `tipo`

El valor de `tipo` debe coincidir exactamente con el nombre de la clase, incluyendo mayúsculas y *namespace*.

- ✅ Correcto: `"tipo": "F.Module.SocioMutual"`
- ❌ Incorrecto: `"tipo": "f.module.sociomutual"`
- 🧨 Error típico: `Value cannot be null (classType)` con código HTTP 400

---

### B. Separador Obligatorio en `campos`

Para solicitar múltiples propiedades o rutas anidadas, se debe usar **punto y coma (`;`)** como separador.

- ✅ Correcto: `"campos": "NombreCompleto;Email;Domicilio.Calle"`
- ❌ Incorrecto: `"campos": "NombreCompleto,Email"`
- 🧨 Error típico: `single criterion expected`

---

### C. Cuerpo JSON en Peticiones GET

Aunque el endpoint `Evaluate` usa el método `GET`, requiere un cuerpo JSON válido.

- ❌ Si se omite el cuerpo: `A non-empty request body is required` (HTTP 400)
- ⚙️ Recomendación: En herramientas como Postman, desactivar verificación SSL y enviar siempre el header `Content-Type: application/json` para evitar errores 415 (`Unsupported Media Type`)

---

## 📌 Próximos Pasos

Continuá con [Post 2: Consultando Valores Únicos y Agregaciones](/blog/evaluate-escalar) para ver ejemplos prácticos de uso del endpoint `Evaluate`.

---