---
sidebar_position: 2
sidebar_label: Préstamos
---

# 💳 Módulo de Préstamos

:::info Rol institucional
El módulo **Préstamos** gestiona la operación diaria sobre la cartera crediticia: desde el alta (idealmente iniciada desde una Solicitud aprobada) hasta el desembolso, seguimiento y cobranza mediante Procesos Débitos.

Este documento detalla su propósito, integración con otros módulos y cómo interpretar su pantalla principal para operar de forma ordenada, trazable y consistente.
:::

---

## 1. 🔗 Integración funcional

- 👁️ **Visibilidad unificada**  
  Listado de préstamos vigentes con sus datos clave.

- ⚙️ **Acciones operativas**  
  Consultas de saldos, registro de cobros, revisión de adjuntos.

- 🔗 **Integración natural con otros módulos**  
  - **Solicitudes:** origen recomendado del préstamo  
  - **Liquidaciones:** cobranza masiva por cuotas  
  - **Contabilidad:** asiento de alta y conciliaciones  
  - **Compliance:** adjuntos y Rangos para reportes

---

## 2. 📐 Flujo operativo completo

**Etapas del ciclo de vida del préstamo:**

1. 📝 Solicitud → Análisis → Aprobación  
2. 💸 Emisión y desembolso  
3. 📊 Seguimiento  
4. 💰 Cobranza  
5. ✅ Cierre

### Conceptos clave del flujo

| Concepto                | Descripción                                                                          |
|-------------------------|--------------------------------------------------------------------------------------|
| Fecha de Trabajo        | Corte temporal para vencimientos, devengamientos y saldos                           |
| Cuota 0                 | Estructura inicial con cargos administrativos; puede diferir del monto desembolsado |
| Cobrador                | Entidad responsable de la gestión de cobro                                           |
| Cartera / Denuncias     | Agrupadores operativos para gestión y reportes                                       |
| Link de aceptación      | Evidencia del consentimiento del titular                                             |
| Movimiento AMV          | Referencia de control interno para integraciones y conciliaciones                   |

---

## 3. 🖥️ Pantalla principal

### 📋 Planilla general

Grilla principal con todos los préstamos vigentes. Permite:

- Filtrar por múltiples criterios  
- Navegar al detalle del préstamo  
- Accionar desde la barra superior

> ⚠️ Aunque es posible generar un préstamo desde esta vista, se recomienda iniciarlo desde una Solicitud aprobada para asegurar trazabilidad.

### 🛠️ Barra superior

Acciones disponibles (según permisos):

- Grabar / Enviar  
- Anular  
- Generar préstamo  
- Cambiar estado  
- Desembolsar

### 📊 Columnas principales

- Estado  
- Titular  
- N.º de Solicitud (vínculo al origen)  
- Línea  
- Comercializador  
- Emisión digital  
- Fechas de emisión  
- Destino  
- Asiento contable  
- Períodos de movimientos  
- Cobrador  
- Detalle de cuotas

---

## 4. 🔍 Filtros operativos

| Filtro                    | Descripción                                                     |
|---------------------------|------------------------------------------------------------------|
| Vigentes                  | Préstamos dentro del cronograma original                        |
| Impagos                   | Cuotas vencidas no canceladas                                   |
| Pagados                   | Préstamos cancelados totalmente                                 |
| Vencidos                  | Fecha de finalización supera la **Fecha de Trabajo**            |
| Emitidos hoy / Pagados hoy| Actividad del día (según **Fecha de Trabajo**)                  |
| Todos                     | Sin restricción de estado                                       |
| Adicionales               | Por **Cartera** y, si corresponde, por **Denuncias**            |

:::warning Chequeo previo
Confirmar la **Fecha de Trabajo** antes de interpretar vencimientos, devengamientos y saldos.
:::

---

## 5. 📂 Pestañas del préstamo

Cada préstamo incluye pestañas con información específica:

- **Detalle / Cuotas:** cronograma, estados e importes  
- **Novedades:** cargos iniciales y eventos del crédito  
- **Adjuntos:** documentación cargada por comercializador y analista  
- **Cobros:** incluye Cuota 0 y estructura de liquidación  
- **Movimientos:** visión contable y operativa  
- **Tasas:** tasas vigentes aplicadas  
- **Documentación:** reservado (sin uso operativo actual)  
- **Saldos:** capital, intereses, devengado y total a la Fecha de Trabajo  
- **Rangos (Res. 1418):**
  - R1: vencimientos del próximo mes  
  - R2: próximos dos meses  
  - R3: hasta seis meses  
  - R4: hasta 180 días  
  - R5: más de 180 días  
- **Otros datos:** CFT, alícuotas, parámetros complementarios  
- **Garantías:** si aplica, integración con submódulo prendario/hipotecario  
- **Procesos Débitos:** histórico de cargas masivas  
- **Comisiones:** cálculo asociado a vendedores  
- **Trámites:** registro de gestiones y tratamiento  
- **Indicadores / Encuentros:** no utilizados actualmente  
- **Comprobantes:** pagos de facturas vinculadas al crédito

---

## 6. 👥 Roles y responsabilidades

| Rol                      | Función principal                                                                 |
|--------------------------|-----------------------------------------------------------------------------------|
| 👤 Comercial / Analista  | Consulta integral, verificación de adjuntos, seguimiento post-desembolso         |
| 💸 Cobranzas             | Control de Cobrador, monitoreo de impagos y Procesos Débitos                      |
| 📊 Contabilidad / Tesorería | Conciliación de movimientos, control de Cuota 0 y cargos                      |
| 🔍 Compliance / Auditoría | Verificación documental, aceptación y Rangos para reportes regulatorios         |

---

## 7. ✅ Buenas prácticas

- Confirmar la **Fecha de Trabajo** antes de cualquier análisis  
- Priorizar el alta desde **Solicitud aprobada** para asegurar trazabilidad  
- Verificar que el **Cobrador** esté asignado y validado  
- Revisar **Novedades** y **Cuota 0** para confirmar cargos administrativos  
- Utilizar la **Estructuración de Rangos** conforme a la Res. 1418