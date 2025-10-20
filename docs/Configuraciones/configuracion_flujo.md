---
sidebar_position: 11
sidebar_label: Flujo de Solicitudes
---

# 🔄 Flujo de Solicitudes — Configuración Integral

:::tip Objetivo
Este procedimiento detalla los pasos necesarios para configurar el **flujo operativo de solicitudes** dentro del sistema VIMARX, incluyendo grupos ejecutivos, estados, reglas de validación y apariencia dinámica.
:::

---

## 1️⃣ Configuración de Grupos Ejecutivos

✔️ Ir a `Solicitudes → Ejecutivos → Grupo Ejecutivo`  
✔️ Hacer clic en el ícono de hoja en blanco (**Nuevo Grupo Ejecutivo**)  
✔️ Completar el formulario con los datos del grupo  
✔️ Vincular los ejecutivos que pertenecerán al grupo

:::info Ejemplo
Si se crea el grupo **Riesgo**, solo los ejecutivos asignados a ese grupo podrán intervenir en los estados del flujo que lo requieran.
:::

---

## 2️⃣ Definición de Estados de Solicitud

✔️ Ir a `Solicitudes → Auxiliares → Estado Solicitud`  
✔️ Crear cada estado desde el botón **Nuevo Estado Solicitud**  
✔️ Completar los campos: descripción y estado

:::tip Consejo
Definir todos los estados posibles por los que puede transitar una solicitud: Preaprobado, Rechazado, Liquidado, etc.
:::

---

## 3️⃣ Creación del Flujo Operativo

✔️ Ir a `Configuración → Definición Flujo → Definición Flujos`  
✔️ Crear un nuevo flujo desde el botón **Nuevo Definición Flujo**  
✔️ Completar los campos principales:

| Campo               | Descripción                                                                 |
|---------------------|------------------------------------------------------------------------------|
| 📝 Nombre            | Identificador del flujo                                                      |
| ✅ Activo            | Activar el flujo para que esté disponible                                    |
| 📦 Tipo de destino   | Seleccionar `Solicitudes`                                                    |
| 🏷️ Propiedad Estado | Indicar `estado` como campo de referencia para el seguimiento del flujo      |

---

## 4️⃣ Estados del Flujo

✔️ Crear cada estado desde el botón **Nuevo Estado Flujo**  
✔️ Completar los siguientes campos:

| Campo         | Función                                                                 |
|---------------|-------------------------------------------------------------------------|
| 📝 Descripción | Nombre del estado dentro del flujo                                      |
| 🏷️ Marcador    | Asociación con los estados definidos en el módulo de solicitudes       |
| 🔍 Criterio    | Condición lógica para activar el estado                                 |
| ⚙️ Opciones    | Claves especiales para definir comportamiento del estado                |

### 🔧 Claves disponibles en Opciones

| Clave           | Valor esperado / Función                                                                 |
|------------------|------------------------------------------------------------------------------------------|
| `CAMBIOEJECUTIVO:` | Grupo ejecutivo que debe intervenir en este estado                                      |
| `AVISOGRUPO`      | Notificación al grupo correspondiente                                                   |
| `VALIDAR:`         | Nombre de la regla de validación a aplicar (ver sección 6)                             |

---

## 5️⃣ Transiciones entre Estados

✔️ Ir a la pestaña **Transiciones** dentro del flujo  
✔️ Crear cada transición desde el botón **Nueva Transición**  
✔️ Completar los campos:

| Campo         | Descripción                                                                 |
|---------------|------------------------------------------------------------------------------|
| 📝 Descripción | Nombre de la transición                                                     |
| 🎯 Destino     | Estado al que se dirige la transición                                       |
| 💬 Comentario  | Opción para solicitar comentario al usuario                                 |
| 🔍 Criterio    | Condición lógica para habilitar la transición                               |

---

## 6️⃣ Apariencia y Comportamiento Visual

✔️ Ir a la pestaña **Apariencia** dentro del flujo  
✔️ Crear cada configuración desde el botón **Nueva Apariencia**  
✔️ Completar los campos:

| Campo               | Función                                                                 |
|---------------------|-------------------------------------------------------------------------|
| 🎨 `appearance item type` | Tipo de ítem visual (generalmente se deja por defecto)             |
| 🧩 `context`              | Contexto de aplicación (también suele mantenerse por defecto)       |
| 🏷️ `target item`         | Campos afectados por la configuración visual                        |
| ✅ `enabled`             | Si está marcado, los campos son editables; si no, quedan bloqueados |
| 🎨 `font color`          | Color de texto                                                      |
| 🎨 `back color`          | Color de fondo                                                      |
| 👁️ `visibility`         | Visibilidad del campo (mostrar u ocultar)                           |
| 🔍 `target criteria`     | Condición lógica para aplicar la apariencia                         |

:::tip Uso avanzado
Podés usar el asterisco `*` para referenciar todos los campos. Ejemplo:  
`*,MontoAFinanciar,NroCuotas` con `enabled` desmarcado → bloquea todos los campos excepto los indicados.
:::

---

## 7️⃣ Reglas de Validación

✔️ Ir a `Configuración → Seguridad → Regla Validación`  
✔️ Crear cada regla desde el botón **Nueva Regla Validación**  
✔️ Completar los campos:

| Campo                    | Descripción                                                                 |
|--------------------------|------------------------------------------------------------------------------|
| 🧩 Tipo de regla          | Campo único, criterio lógico o campo requerido                              |
| 📝 Rule Name              | Nombre identificador de la regla                                            |
| 💬 Custom Message Template | Mensaje personalizado que se mostrará al usuario                           |
| ✅ Activo                 | Activar la regla para que se ejecute                                        |
| 🔍 Criteria              | Condición lógica (ej: `[MontoAFinanciar] > 100`)                            |
| ⚠️ Resultado              | Tipo de respuesta: Error (bloquea), Advertencia (puede omitir), Información |
| 🏷️ Context IDs           | Nombre que se usará en el campo `VALIDAR` del flujo                         |

:::warning Importante
El campo `Context IDs` debe coincidir exactamente con el valor que se coloque en la opción `VALIDAR` dentro de los estados del flujo.
:::

---

## ✅ Checklist Final

Antes de activar el flujo, asegurarse de:

- ✔️ Grupos ejecutivos definidos  
- ✔️ Estados de solicitud creados  
- ✔️ Flujo configurado con destino `Solicitudes`  
- ✔️ Estados del flujo correctamente mapeados  
- ✔️ Transiciones y apariencia visual definidas  
- ✔️ Reglas de validación activas y asociadas

---

:::note Manejo de flujo
Una vez completada la configuración, y con una solicitud realizada, le aparecera en la barra superor una especie de triangulo con las diferentes etapas del flujo que se han configurado `solo a los grupos ejecutivos que se hayan asignado en cada etapa`.
:::