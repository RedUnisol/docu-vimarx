---
sidebar_position: 1
sidebar_label: Solicitudes
---

# 📱 Solicitudes

:::tip **Rol de Solicitudes**
El módulo de **Solicitudes** en VIMARX es el **núcleo operativo** para la gestión integral de pedidos de operaciones crediticias y otros productos financieros.

Su función abarca desde la **carga inicial** de una solicitud por parte de un **vendedor, ejecutivo o agente**, hasta su análisis, resolución y derivación a otros módulos del sistema.

Este módulo no solo **centraliza la información**, sino que permite:
- Coordinar la interacción entre distintas áreas.
- Controlar plazos.
- Verificar requisitos.
- Asegurar el cumplimiento de políticas internas y normativas vigentes.

Se estructura en:
- Una **vista principal** para monitoreo en tiempo real.
- Submódulos auxiliares que permiten **configurar estados, roles, límites operativos**, y gestionar datos y documentación complementaria.

Todo esto otorga **trazabilidad completa** a cada solicitud.
:::

---

## 🖥️ 1. Vista principal de Solicitudes

La vista principal presenta un **listado de solicitudes** con herramientas de **filtrado y búsqueda avanzada**:

- 🔎 **Filtros por**:
  - Fecha de creación
  - Última modificación
  - Estado
  - Ejecutivo asignado
  - Vendedor / agente
  - Monto solicitado

- 📆 **Segmentación temporal**:
  - Solicitudes del día
  - Semana determinada
  - Estados: aprobada, pendiente, rechazada, en revisión

### ✅ Acciones principales

| Acción                         | Descripción                                                                 |
|--------------------------------|------------------------------------------------------------------------------|
| 👁️ Visualizar solicitud           | Acceso al detalle completo                                                  |
| ✏️ Editar información             | Disponible mientras el estado lo permita                                   |
| 🔄 Cambiar estado                 | Manual si el flujo lo autoriza                                              |
| 📤 Exportar listado               | Para análisis externo                                                       |

### 🔍 Detalle de solicitud

Incluye información clave del socio y de la operación:

- 👤 **Datos del socio**: nombre, documento, categoría, contacto  
- 💼 **Datos de la operación**: monto solicitado, saldo previo, ratio de renovación, forma de cobro, actividad laboral

Accesos adicionales:
- 🖩 Simulador de préstamo  
- 📂 Consulta y carga de adjuntos  
- 🕒 Historial de novedades  
- 📝 Observaciones internas  
- 🔗 Link de seguimiento

---

## 🧩 2. Submódulos y funciones auxiliares

### ⚙️ 2.1 Auxiliares de Solicitud

| Submódulo                    | Función principal                                                           |
|-----------------------------|------------------------------------------------------------------------------|
| 💳 **Líneas del préstamo**         | Consulta de condiciones sin generar liquidación                             |
| ➕ **Adicionales de solicitud**    | Registro de beneficiarios, garantes, cotitulares                            |
| 📎 **Adjuntos de solicitud**       | Repositorio documental                                                      |
| 🔖 **Estados de solicitud**        | Definición de etapas y reglas de transición                                 |
| 🏷️ **Grupos de solicitud**         | Clasificación por tipo o segmento                                           |
| 🕒 **Novedades de solicitud**      | Registro histórico de cambios y eventos                                     |
| 🎯 **Segmentaciones de líneas**    | Condiciones especiales por campañas o comisiones                            |
| 🚗 **Evaluación de vehículos**     | Listado y valuación de garantías prendarias                                 |
| 📑 **Tipos de adjuntos**           | Categorización de documentos requeridos y opcionales                        |

---

### 🧑‍🤝‍🧑 2.2 Agentes

Todo **vendedor pertenece a un agente**, quien administra:
- 📦 **Líneas de productos disponibles**  
- 🏢 **Comercializadores vinculados**  
- 👥 **Analistas habilitados**  
- 🧑‍💼 **Responsable del agente con permisos de supervisión**  
- 🔗 **Asignación de ejecutivos predeterminados**

---

### 🧑‍💻 2.3 Ejecutivos

Roles internos con funciones específicas dentro del flujo de solicitudes:
-  Agrupados en **grupos de ejecutivos** (analistas de crédito, auxiliares, tesorería, etc.)  
-  Permisos determinados por el grupo asignado  
-  Posibilidad de vincular ejecutivos a **socios o etapas del proceso**

---

### 🛍️ 2.4 Vendedores

- Asociados a un **usuario y a un agente**  
- Configuración de **límites operativos**:
  - 💵 Monto máximo por operación  
  - 📉 Tope de comisiones  
- 📊 Reportes y análisis por vendedor para seguimiento comercial

---

## 📋 3. Procedimiento básico de análisis y tratamiento

1. 📝 **Ingreso de solicitud** con datos completos del socio y documentación requerida  
2. 🔍 **Revisión inicial** para validar integridad de datos y legibilidad de documentos  
3. 📊 **Evaluación** por el rol asignado, considerando scoring, capacidad de pago y políticas  
4. 🔄 **Cambio de estado** según resolución: aprobación, rechazo, observación o espera  
5. 🗂️ **Registro de novedades** y archivo de adjuntos para respaldo y auditoría  
6. 🔗 **Derivación al módulo de Operaciones** si se aprueba, manteniendo la trazabilidad

---

## ⚠️ 4. Observaciones operativas

- ⚙️ **La integración con flujos configurables** permite automatizar pasos y reducir errores humanos  
- 📁 **El uso correcto de novedades y adjuntos** garantiza un control documental sólido  
- 🔐 **La definición clara de roles y permisos** evita demoras y asegura trazabilidad  
- 🧩 **Los submódulos permiten adaptar el módulo** a distintas realidades sin perder estandarización
