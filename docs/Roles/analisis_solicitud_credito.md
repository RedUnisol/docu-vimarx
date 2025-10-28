---
sidebar_position: 5
sidebar_label: Análisis de Solicitud de Crédito
---

# 🧾 Proceso de Análisis de Solicitudes

:::info Descripción general
El proceso de análisis de solicitudes es un flujo estructurado que inicia con la **verificación de riesgo del solicitante** y culmina con la **liquidación del crédito**.
:::

## 🧭 Fases del proceso de análisis

---

### 1. 🔍 Verificación de riesgo inicial

El primer paso consiste en copiar el **CUIT del solicitante** y verificar su situación en la página del **Banco Central (BCRA)**.

#### 🧮 Evaluación según situación BCRA

- **Línea Premium:**  
  Aplica si el solicitante **no tiene situaciones 4 ni 5**.  
  ✅ Máximo otorgamiento: **2.5 millones**.

- **Línea Especial:**  
  Aplica si el solicitante **presenta situación 4 o 5**.

#### ⚠️ Verificación adicional

- **Página de quiebra:**  
  Si el solicitante tiene quiebra, pasa automáticamente a **Línea Especial**.  
  Si no tiene quiebra, **continúa en Línea Premium**.

---

### 2. 📂 Corroboración de documentación y datos

Una vez aprobado el riesgo, se verifica la documentación enviada:

- **CBU y datos personales:**  
  Verificar que el CBU coincida con el solicitante.  
  Confirmar CUIT, DNI y fecha de nacimiento.

- **Restricción de edad:**  
  Edad máxima permitida: **x cantidad años**.

- **Recibo de sueldo:**  
  Debe coincidir con el nombre y CUIT del solicitante.  
  Debe ser del **último período vigente** (ej. junio).

- **Cargo y cuotas disponibles:**  
  ej. Un **cargo titular** permite hasta **36 cuotas**, considerado lo más óptimo.

---

### 3. ✅ Cierre, liquidación y seguimiento

Si toda la información es correcta, se avanza al cierre:

- **Verificación de cuota y vencimiento:**  
  Revisar carga en sistemas **Quad y Birmax**.  
  - Si la línea no indica `+1`, se toma el **mes actual**.  
  - Si indica `+1`, se toma el **mes siguiente**.

- **Cambio de estado y generación de socio:**  
  El caso pasa de **“revisión riesgo” a “confirmada”**.  
  Se genera el socio: el solicitante pasa a ser **“socio nuestro”**.

- **Liquidación final:**  
  Marcar casilla de **validación digital**.  

- **Finalización del análisis:**  
  El proceso concluye cuando el socio queda en estado **“liquidado”**.

---

### 4. 🛠️ Manejo de errores

Si falta documentación válida, el analista:

- No liquida el crédito.
- Devuelve el caso al estado **“revisar”**.
- Deja una anotación solicitando lo faltante (ej. *“adjuntar recibo de sueldo más actual”*).

---
