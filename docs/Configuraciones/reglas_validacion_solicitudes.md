---
sidebar_position: 1
sidebar_label: Reglas de validación de solicitudes
---

# Reglas de Validación de Solicitudes (VIMARX)

:::tip **Objetivo**
Proveer una guía **conceptual y operativa** para diseñar, implementar y mantener Reglas de Validación de Solicitudes en VIMARX, articuladas con **flujo de estados/transiciones**, **comandos** y **notificaciones**. Este texto es la base de la página del manual donde se insertarán capturas y anotaciones.
:::

No necesitás saber programar: traducimos **reglas de negocio → validaciones confiables**, explicando **cuándo se evalúan**, **cómo limitar su alcance**, **cómo probarlas** y **cómo desplegarlas sin romper la operación**.

---

## ✅ 1. Dónde se configura (ruta y alcance)

- **Ruta:** `Configuración → Seguridad → Reglas de validación`  
- **Ámbito:** la **vista unificada** gobierna **escritorio y web**. Definir aquí evita duplicar lógica por “modelo”.  
- **Idea central:** cada regla se asocia a uno o más **Context ID** (p. ej., `envío`, `transferir`, `revisión_riesgo`, `save/grabar`), que determinan **cuándo** se evalúa durante el flujo de la solicitud.

:::info **Alias posibles**
Según despliegue, **“Seguridad”** puede figurar como **Administración** y **“Reglas de validación”** como **Validation Rules**.
:::

---

## 🧠 2. Modelo mental (Solicitud → Estados → Transiciones → Reglas)

Una **Solicitud** recorre **Estados** mediante **Transiciones**.  
Al **entrar a un estado** —o **durante la transición**— VIMARX evalúa las **Reglas de Validación** cuyo **Context ID** coincide con ese momento del flujo.

- El **resultado** depende de la **Severidad** (error / advertencia / informativo).  
- El **alcance** puede acotarse vía **Target Criteria** (línea, sucursal, vendedor, atributos de caso).

---

## 🧩 3. Anatomía de una regla

| Campo               | ¿Qué es?                                                                 | Ejemplo / Sugerencia |
|---------------------|---------------------------------------------------------------------------|----------------------|
| **Nombre**          | Identificador legible y trazable.                                         | `VAL_[CTX]_[OBJETO]_[COND]` → `VAL_ENVIO_EMAIL_AT` |
| **Mensaje al usuario** | Texto que aparece cuando la condición no se cumple.                   | `"Ingresá un email válido (debe contener @)."` |
| **Severidad**       | Impacto de la regla.                                                      | `error` (detiene) / `advertencia` (permite ignorar) / `informativo` (continúa) |
| **Tipo**            | Modo de validación.                                                       | **criterio a cumplir** (recomendado), `campo requerido`, `campo único` |
| **Expresión (criterio)** | Condición booleana que debe ser verdadera.                         | `CONTAINS(lower(email), "@")` |
| **Context ID**      | **Cuándo** se evalúa.                                                     | `envío`, `transferir`, `revisión_riesgo`, `save` |
| **Target Criteria** | **Dónde aplica** (segmentación).                                          | Por línea / sucursal / vendedor / atributos |
| **Skip null/empty** | Evalúa solo si el campo tiene valor (ver §6).                             | Activado / Desactivado |
| **Activo**          | Habilita / deshabilita sin borrar.                                        | `true` / `false` |

:::tip **Preferencia por “criterio a cumplir”**
Modela **validez semántica** (p. ej., correo con `@`) y reduce falsos positivos típicos de verificaciones de “completitud”.
:::

---

## 🛠️ 4. Construcción: pasos recomendados

1. **Precisar el objetivo:** qué dato/condición se exige y **en qué Context ID**.  
2. **Definir el alcance con Target Criteria:** línea / sucursal / atributos. Usar **ID estables** en líneas.  
3. **Redactar la expresión** como **criterio a cumplir**; usar el **ayudante (⋯)** del editor para explorar campos y filtros.  
4. **Elegir severidad:** iniciar en **advertencia**, medir impacto y luego **promover a error**.  
5. **Activar y probar:** botón **Validar** en contexto `save/grabar` sobre una solicitud de prueba.  
6. **Versionar:** registrar **regla, contexto, alcance, severidad y motivo de negocio**.

---

## 🎯 5. Alcance con Target Criteria (línea, sucursal, atributos)

- **Líneas:** emplear `linea_solicitud.id` en lugar de **nombre/OID** (estos cambian o se clonan).  
- **Sucursal:** `vendedor.sucursal.id` para incluir / excluir con precisión.  
- **Atributos:** condicionar por `capital_puro`, `monto`, `antigüedad`, etc.  
- **Estrategia de despliegue (canario):** filtrar primero por **una línea/sucursal**, luego expandir.

---

## ✍️ 6. Editor: ayudantes, skip null e invertir resultado

- **Ayudante (⋯):** construye filtros, descubre campos complejos y **copia expresiones** a la regla.  
- **Skip null/empty:** valida solo si el campo tiene valor.  
  - Alternativa **explícita** en la expresión:  
    ```text
    IS_NULL(documento) OR LEN(documento) >= 6
    ```
- **Invertir resultado:** reservar para **casos excepcionales**; preferir expresiones **directas** por legibilidad y trazabilidad.

---

## 🔁 7. Flujo y comandos (cuando la regla participa de una transición)

En cada **transición** del flujo pueden encadenarse **comandos**:

- `cambio_ejecutivo` (**obligatorio** para que cambie el responsable)  
- `aviso_grupo`  
- `aviso_vendedor`  
- `validar` (fuerza la evaluación por **Context ID**)

**Comportamiento de reasignación:** la reasignación cae en el **ejecutivo predeterminado** del grupo de destino; si no existe, **verificar el comportamiento en entorno controlado**. Mantener un grupo **“Ingreso”** como buffer operativo **simplifica la distribución inicial**.

---

## ✉️ 8. Notificaciones (grupo y vendedor)

- **`aviso_grupo`**: envía al **correo del grupo ejecutivo** de destino (configurar **modelo y SMTP**).  
- **`aviso_vendedor`**: notifica al **correo del vendedor**.

:::tip **Recomendaciones**
- Usar **asuntos estables** con **número de solicitud**.  
- Si la solicitud ya no está en la bandeja del destinatario, **aclarar que fue atendida** por otro usuario.
:::

---

## 🚀 9. Pruebas, propagación y despliegue

- El **autor** de la regla ve el efecto **de inmediato**.  
- Para el resto de usuarios de **escritorio** se requiere **reinicio**.  
- En **web**, el cambio se refleja tras el **reinicio nocturno del servicio** o un **reinicio controlado** (coordinar para no interrumpir cargas).  
- **Rollback:** desactivar la regla (**preferible a borrar**).

:::warning **Precaución**
No probar **Liquidación** en productivo si afecta billeteras / fondos.
:::

---

## 🍳 10. Cookbook (expresiones típicas)

A continuación ejemplos útiles de expresiones de validación. Para expresiones cortas uso `inline code`; para las más largas incluyo un pequeño bloque de ejemplo.

- **Correo con “@” (validez mínima)**  
  `CONTAINS(lower(email), "@")`  
  *Descripción:* valida que el email contenga al menos el carácter `@`. Es una verificación básica; combinar con regex si necesitás mayor rigor.

- **DNI opcional o ≥ 6 dígitos**  
  `IS_NULL(documento) OR LEN(documento) >= 6`  
  *Descripción:* permite campo vacío o exige al menos 6 caracteres si viene completado.

- **Excluir una sucursal**  
  `vendedor.sucursal.id != 3`  
  *Descripción:* la regla no aplica para la sucursal con `id = 3`.

- **Relación laboral obligatoria si `capital_puro == true`**  
  - Forma legible usando implicación lógica:  
    `capital_puro == true -> NOT IS_NULL(relacion_laboral)`  
  - Equivalente explícito (sin operador `->`):  
    `(NOT capital_puro) OR (NOT IS_NULL(relacion_laboral))`  
  *Descripción:* si `capital_puro` es verdadero, entonces `relacion_laboral` no puede ser nula.

- **Aplicar a líneas específicas**  
  `linea_solicitud.id IN (25, 28)`  
  *Descripción:* la regla solo se evalúa para solicitudes pertenecientes a las líneas con id `25` o `28`.

---

## 📸 11. Guía de capturas (para insertar imágenes y pies)

Para la documentación con imágenes, se sugiere incluir las siguientes capturas con pies explicativos:

- **C1 · Reglas — listado**  
  *Filtro por Context ID y columnas:* `Nombre`, `Severidad`, `Context ID`, `Activo`.

- **C2 · Alta de regla**  
  *Campos visibles:* `Nombre`, `Mensaje`, `Severidad`, `Tipo = criterio a cumplir`, `Expresión`, `Context ID`, `Target Criteria`, `Skip null/empty`.

- **C3 · Ayudante (⋯)**  
  *Ejemplo de búsqueda por campo complejo y copia a la regla.*

- **C4 · Transición con comandos**  
  *Comandos incluidos:* `cambio_ejecutivo`, `aviso_grupo`, `aviso_vendedor`, `validar`.

- **C5 · Grupos ejecutivos**  
  *Ejecutivo predeterminado y correo del grupo; incluir ejemplo del grupo “Ingreso”.*

- **C6 · Notificaciones**  
  *Configuración de modelos + SMTP; prueba de envío de correo.*

- **C7 · Validación en caliente (save/grabar)**  
  *Uso del botón **Validar** y resultado sobre una solicitud de prueba.*

- **C8 · Líneas por ID**  
  *Ejemplo claro de `linea_solicitud.id` vs uso incorrecto con nombre/OID.*

---

## ✅ 12. Criterios de aceptación

- **Reglas críticas** cubiertas por el **Context ID correcto**.
- **Reglas reutilizadas** mediante clonación por contexto (evitar concatenar).
- **Alcance definido** por línea/sucursal usando **ID estables**.
- **Publicación gradual:** comenzar con advertencia → luego promover a error, registrando **impacto observado**.
- **Modelos de notificación probados**; grupos configurados con **ejecutivo predeterminado**.
- **Rollback documentado**; prohibido probar **Liquidación** en productivo si afecta fondos.

:::tip **Checklist operativo**
Antes de pasar a productivo, verificar **Context ID**, alcance, severidad y prueba controlada.
:::

---

## ⚠️ 13. Riesgos y supuestos (para tensionar el diseño)

- **Homogeneidad de expresiones:** deben comportarse igual en **web y escritorio** → validar en ambos entornos antes de promover a error.
- **Dependencia de reinicios:** planificar ventanas y comunicar a usuarios para evitar interrupciones.
- **Ausencia de ejecutivo predeterminado:** documentar el comportamiento y cubrir con prueba controlada antes de liberar.
- **Uso de nombres/OID en líneas:** evitar; migrar reglas existentes a **ID numéricos**.
- **Uso incorrecto de skip null:** preferir expresar la condición completa en la expresión para mayor trazabilidad.

:::warning **Impacto en operaciones**
Un error en expresiones críticas puede bloquear solicitudes en masa. **Validar siempre en entorno controlado antes de despliegue masivo**.
:::