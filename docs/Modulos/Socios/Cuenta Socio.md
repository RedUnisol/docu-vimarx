---
sidebar_position: 2
sidebar_label: Cuenta socio
---

# Cuenta Socio 💳

:::tip[Cuenta Socio]
La **Cuenta Socio** es un submódulo dentro del Módulo Socios que permite centralizar y administrar todos los movimientos y servicios asociados a un socio específico.
No opera bajo el marco del reglamento de ayuda económica de una caja de ahorro, sino como una **cuenta corriente interna** que registra y organiza los servicios, consumos, cuotas sociales y demás interacciones económicas con la entidad.
:::
## 1. Funciones principales
* **Registro individualizado**: Cada socio cuenta con una cuenta propia donde se concentra toda la información de servicios y movimientos internos.

* **Gestión de servicios sociales**: Permite vincular los servicios que la entidad brinda al socio (por ejemplo, cuotas sociales, servicios médicos, seguros, actividades recreativas).

* **Seguimiento de movimientos**: Control y registro de débitos, créditos, ajustes y cargos administrativos.

* **Generación de resúmenes**: Emisión de extractos o estados de cuenta con el detalle de los servicios y movimientos en períodos definidos.

* **Historial completo**: Conserva la trazabilidad de todas las operaciones realizadas.


## 2. Vinculación con cuentas bancarias
* El sistema permite asociar una o varias ********cuentas bancarias******** (CBU/CVU) del socio.

* Funciona como base de datos centralizada de información bancaria para operaciones como:

  * Débitos automáticos.

  * Transferencias de ayudas económicas.

  * Pagos de servicios.

* Permite mantener actualizada la información y verificar que no existan duplicidades o datos obsoletos.


## 3. Administración de períodos y resúmenes
* El sistema permite estructurar la cuenta por ******períodos****** (mensuales, trimestrales, etc.).

* Cada período puede generar un ******resumen de cuenta****** que incluye:

  * Servicios activos.

  * Movimientos económicos.

  * Saldo a favor o deuda.

* Estos resúmenes pueden ser emitidos internamente o entregados al socio como comprobante.


## 4. Utilidad práctica
La ****Cuenta Socio**** resulta especialmente relevante cuando la entidad desea:

* Proporcionar un ****resumen de servicios y movimientos**** a cada socio.

* Llevar un control interno detallado de todos los compromisos y beneficios otorgados.

* Facilitar la gestión integral de la relación socio–entidad sin depender de sistemas bancarios externos.

Cuotas Sociales / Servicios / Resúmenes
### 1. Función principal
El submódulo de Cuotas Sociales tiene dos objetivos clave:

* Configurar y administrar la estructura de las cuotas sociales, sus tipos, montos, periodicidades y cobradores.

* Generar y gestionar resúmenes que consoliden las cuotas y consumos de cada socio en períodos determinados.


### 2. Estructura y componentes
#### 2.1. Resúmenes
* Se generan a partir del proceso de generación de cuotas sociales.

* Funcionan como el registro central de lo que cada socio debe pagar en un período.

* Información disponible en cada resumen:

  * Período.

  * Socio.

  * Monto total.

  * Saldo pendiente.

  * Referencias internas.

  * Fecha y método de cobro.

* Todos los movimientos relacionados (cobros, débitos, ajustes) se visualizan en Movimientos Débitos.

#### 2.2. Movimientos / Débitos
* **Pagos Débitos**: Registro de pagos aplicados a las cuotas sociales.

* **Movimientos Resumen**: Historial de modificaciones o movimientos generados sobre el resumen.

* **Débitos**: Movimientos de débito aplicados automáticamente o manualmente.

#### 2.3. Pagos de Cuotas y Servicios
* Permite registrar pagos correspondientes tanto a cuotas sociales como a otros servicios que brinda la entidad.


### 3. Auxiliares
Los auxiliares son parámetros de configuración esenciales para que la generación de resúmenes funcione correctamente.

* **Cobrador Cuenta**: Define el medio o forma habitual de cobro asignada a un socio.

* **Novedad Débito**: Configuraciones puntuales para débitos específicos.

* **Períodos Cuotas**: Todo mes debe tener configurado un período activo para generar cuotas.

* **Tipo Cargo Mutual**: Clasifica cargos que pueden sumarse a los resúmenes.

* **Cargos Condicional Resumen**: Permite agregar cargos solo bajo ciertas condiciones (pendiente de definición avanzada).

* **Tipo Cuota Socio**: Define las tipologías de cuotas (ej.: Activo, Adherente), con sus parámetros:

  * Monto y periodicidad.

  * Cuenta contable asociada.

  * Modelo de asiento para generación y pago.

  * Fórmulas o recargos.

  * Código de débito.

  * Formato de liquidación (para resúmenes de socio o servicios).

  * Opción de cuota recalculable.


### 4. Liquidación de Actividades y Servicios
* **Tipo Cuota Socio**: Reglas de cálculo y cobro.

* **Liquidaciones**: Procesos que agrupan servicios y cuotas en un mismo período.

* **Formato Liquidación Servicio**: Plantillas para presentar la información.


### 5. Consumos
* Base de datos de consumos asociados a los socios (servicios, actividades u otros).

* Pueden sumarse automáticamente a los resúmenes de cuotas para ser cobrados junto con la cuota social.


### 6. Proceso operativo
* Configurar todos los auxiliares (tipos de cuota, cobradores, períodos, cargos).

* Cargar consumos o servicios asociados a socios.

* Ejecutar el proceso de generación de resúmenes:

  * Agrupa cuotas sociales y consumos del período.

  * Genera un resumen por socio.

  * Gestionar cobros y movimientos desde Movimientos / Débitos.

  * Emitir y entregar resúmenes a los socios si se requiere.