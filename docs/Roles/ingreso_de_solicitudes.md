---
sidebar_position: 6
sidebar_label: Ingreso de Solicitudes Externas
---

# 🗂️ Ingreso y Actualización de Solicitudes

:::info Objetivo
    Pasar solicitudes desde un ente externo al circuito de **VIMARX** y mantener su estado hasta liquidación/pago.
:::

## 🧭 Pasos a seguir

---

### 1. 🔍 Detección de solicitudes pendientes en ente externo
Desde el ente externo aplicar **filtros** (líneas vigentes, pendientes de análisis, rango de fechas). Asi asegurarnos
de detectar todas las solicitudes **pendientes de procesar**.

---

### 2. ⬇️ Descarga de archivos de origen
Descargar el lote de solicitudes pendientes desde el ente externo.
:::warning Recomendacion
Guarda las solicitudes en carpetas ordenadas para facilitar su gestión posterior.
:::

---

### 3. 📤 Carga en VIMARX – Módulo Solicitudes

Desde el menú principal, acceder a:  
`Solicitudes → Solicitudes`  

Una vez dentro, en la barra superior, hacer clic en:  
`Archivo → Importar solicitudes`. Seleccionamos el archivo previamente descargado y aceptamos

Ya con las solicitudes cargadas las enviamos desde el botón Enviar ("play" verde).

:::tip Efecto
    La solicitud ingresa al flujo y pasa a **Revisión Riesgo** (no tocar hasta que haya definiciones). 
:::