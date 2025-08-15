---
sidebar_position: 0
sidebar_label: Solicitudes
---
# Solicitudes 📱

:::tip[Rol de Solicitudes]
El módulo de Solicitudes en VIMARX es el núcleo operativo para la gestión integral de pedidos de operaciones crediticias y otros productos financieros. Su función abarca desde la carga inicial de una solicitud por parte de un vendedor, ejecutivo o agente, hasta su análisis, resolución y derivación a otros módulos del sistema. Este módulo no solo centraliza la información, sino que permite coordinar la interacción entre distintas áreas, controlar plazos, verificar requisitos y asegurar que cada paso cumpla con las políticas internas y normativas vigentes.

Se estructura en una vista principal para el monitoreo en tiempo real, acompañada de submódulos auxiliares que permiten configurar estados, roles, límites operativos, y almacenar datos y documentación complementaria. Todo esto otorga trazabilidad completa a cada solicitud.
:::

## 1. Vista principal de Solicitudes 
La vista principal presenta un **listado de solicitudes** con herramientas de filtrado y búsqueda avanzada:

* Filtros por fecha de creación, última modificación, estado, ejecutivo asignado, vendedor, agente, monto, entre otros.

* Permite mostrar solo solicitudes del día, de una semana determinada o segmentadas por estados como aprobada, pendiente, rechazada o en revisión.

**Acciones principales:**

* Visualizar el detalle completo de una solicitud.

* Editar información mientras el estado lo permita.

* Cambiar estados de forma manual si el flujo lo autoriza.

* Exportar listados para análisis externos.

**Detalle de solicitud:**
Incluye información clave del socio (nombre, documento, categoría, datos de contacto) y de la operación (monto solicitado, saldo previo, ratio de renovación, forma de cobro, actividad laboral). También ofrece:

* Acceso directo a simulador de préstamo.

* Consulta y carga de adjuntos.

* Historial de novedades.

* Observaciones internas.

* Link de seguimiento para control y cierre de la operación.


## 2. Submódulos y funciones auxiliares
### 2.1 Auxiliares de Solicitud
Herramientas de soporte que facilitan la configuración y administración:

* **Líneas del préstamo pre-solicitud**: permite consultar condiciones sin generar la liquidación.

* **Adicionales de solicitud**: registro de personas asociadas (beneficiarios, garantes, cotitulares).

* **Adjuntos de solicitud**: repositorio de documentos cargados.

* **Estados de solicitud**: definición de etapas y reglas de transición.

* **Grupos de solicitud**: clasificación de operaciones por tipo o segmento.

* **Novedades de solicitud**: registro histórico de cambios y eventos.

* **Segmentaciones de líneas**: asignación de condiciones especiales según campañas o comisiones.

* **Evaluación de vehículos**: listado y valuación de garantías prendarias.

* **Tipos de adjuntos**: categorización de documentos requeridos y opcionales.

### 2.2 Agentes
Todo vendedor pertenece a un agente, quien administra:

* Líneas de productos disponibles.

* Comercializadores vinculados.

* Analistas habilitados.

* Responsable del agente con permisos de supervisión.

* Asignación de ejecutivos predeterminados.

### 2.3 Ejecutivos
Roles internos con funciones específicas dentro del flujo de solicitudes:

* Agrupados en **grupos de ejecutivos** (analistas de crédito, auxiliares, tesorería, etc.).

* Permisos determinados por el grupo asignado.

* Posibilidad de vincular ejecutivos a socios o a etapas del proceso.

### 2.4 Vendedores
* Asociados a un usuario y a un agente.

* Configuración de límites operativos: monto máximo por operación, tope de comisiones.

* Reportes y análisis por vendedor para seguimiento comercial.


## 3. Procedimiento básico de análisis y tratamiento
1. **Ingreso de solicitud** con datos completos del socio y documentación requerida.

2. **Revisión inicial** para validar integridad de datos y legibilidad de documentos.

3. **Evaluación** por el rol asignado, considerando scoring, capacidad de pago y políticas.

4. **Cambio de estado** según resolución: aprobación, rechazo, observación o espera.

5. **Registro de novedades** y archivo de adjuntos para respaldo y auditoría.

6. **Derivación al módulo de Operaciones** si se aprueba, manteniendo la trazabilidad.


## 4. Observaciones operativas
* La integración con flujos de solicitud configurables permite automatizar pasos y reducir errores humanos.

* El uso correcto de novedades y adjuntos garantiza un control documental sólido.

* La definición clara de roles y permisos evita demoras y asegura la trazabilidad del proceso.

* Los submódulos permiten adaptar el módulo a distintas realidades operativas sin perder estandarización.